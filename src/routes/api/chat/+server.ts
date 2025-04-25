import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Get OpenAI API key and existing Assistant ID from environment variables
const OPENAI_API_KEY = env.OPENAI_API_KEY;
const EXISTING_ASSISTANT_ID = env.EXISTING_ASSISTANT_ID || null;
console.log('OpenAI API Key status:', OPENAI_API_KEY ? 'Found' : 'Not found');
console.log(
	'Using existing Assistant ID:',
	EXISTING_ASSISTANT_ID || 'None (will create new assistant)'
);

// Store assistant and thread info for reuse
// In production, you might want to store these in a database
let assistantId: string | null = null;
const threadIds = new Map<string, string>(); // Map to store thread IDs for different users

// Get or create the assistant - uses existing ID if provided, otherwise creates a new one
async function createAssistant() {
	// If we already have an assistant ID from a previous call, use that
	if (assistantId) return assistantId;

	// If an existing assistant ID was provided in environment variables, use that
	if (EXISTING_ASSISTANT_ID) {
		console.log('Using provided assistant ID:', EXISTING_ASSISTANT_ID);
		assistantId = EXISTING_ASSISTANT_ID;
		return assistantId;
	}

	// Otherwise, create a new assistant
	try {
		const assistantResponse = await fetch('https://api.openai.com/v1/assistants', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'OpenAI-Beta': 'assistants=v2'
			},
			body: JSON.stringify({
				name: 'Facility Management Assistant',
				instructions:
					'You are an AI assistant specializing in facility management. Help users with managing work orders, maintenance, inventory, and other facility-related tasks. Be concise, helpful, and provide actionable information. When referencing information from uploaded files, cite the file name and relevant section. Use the retrieval tool to search through any uploaded documents for specific information that might help answer user questions.',
				model: 'gpt-4-turbo',
				tools: [{ type: 'retrieval' }]
			})
		});

		if (!assistantResponse.ok) {
			const error = await assistantResponse.json();
			console.error('Error creating assistant:', error);
			throw new Error('Failed to create assistant');
		}

		const assistant = await assistantResponse.json();
		assistantId = assistant.id;
		console.log('Created new assistant with ID:', assistantId);
		return assistantId;
	} catch (error) {
		console.error('Error creating assistant:', error);
		throw error;
	}
}

// Get a thread ID for a user or create a new one
async function getOrCreateThreadForUser(userId: string) {
	// For simplicity, we're using a single thread for all users
	// In a real application, you might want to create separate threads for different users
	if (threadIds.has(userId)) {
		return threadIds.get(userId)!;
	}

	try {
		const threadResponse = await fetch('https://api.openai.com/v1/threads', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'OpenAI-Beta': 'assistants=v2'
			}
		});

		if (!threadResponse.ok) {
			const error = await threadResponse.json();
			console.error('Error creating thread:', error);
			throw new Error('Failed to create thread');
		}

		const thread = await threadResponse.json();
		const threadId = thread.id;
		threadIds.set(userId, threadId);
		console.log('Created thread with ID:', threadId, 'for user:', userId);
		return threadId;
	} catch (error) {
		console.error('Error creating thread:', error);
		throw error;
	}
}

// Define interface for message type
interface ChatMessage {
	role: string;
	content: string;
	id?: string;
}

// GET handler to retrieve the assistant ID
export async function GET() {
	try {
		// Check if API key is configured
		if (!OPENAI_API_KEY) {
			return new Response(
				JSON.stringify({
					error: 'OpenAI API key not configured. Please add it to your environment variables.'
				}),
				{ status: 500 }
			);
		}

		// Ensure we have an assistant ID
		const currentAssistantId = await createAssistant();

		return new Response(
			JSON.stringify({
				assistantId: currentAssistantId
			})
		);
	} catch (error) {
		console.error('Error getting assistant ID:', error);
		return new Response(
			JSON.stringify({
				error: 'An error occurred while getting the assistant ID'
			}),
			{ status: 500 }
		);
	}
}

export async function POST({ request }: RequestEvent) {
	try {
		// Check if API key is configured
		if (!OPENAI_API_KEY) {
			return new Response(
				JSON.stringify({
					error: 'OpenAI API key not configured. Please add it to your environment variables.'
				}),
				{ status: 500 }
			);
		}

		// Parse the incoming request to get the messages
		const { messages, userId = 'default-user' } = await request.json();

		// Make sure we have valid messages
		if (!messages || !Array.isArray(messages) || messages.length === 0) {
			return new Response(JSON.stringify({ error: 'Messages are required and must be an array' }), {
				status: 400
			});
		}

		// Get the last user message
		const lastUserMessage = messages.filter((msg: ChatMessage) => msg.role === 'user').pop();

		if (!lastUserMessage) {
			return new Response(JSON.stringify({ error: 'No user message found' }), { status: 400 });
		}

		// Ensure assistant exists
		const currentAssistantId = await createAssistant();

		// Get or create a thread for this user
		const threadId = await getOrCreateThreadForUser(userId);

		// Add the user message to the thread
		const messageResponse = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'OpenAI-Beta': 'assistants=v2'
			},
			body: JSON.stringify({
				role: 'user',
				content: lastUserMessage.content
			})
		});

		if (!messageResponse.ok) {
			const errorData = await messageResponse.json();
			console.error('Error adding message to thread:', errorData);
			throw new Error(`Failed to add message to thread: ${JSON.stringify(errorData)}`);
		}

		// Run the assistant on the thread
		const runResponse = await fetch(`https://api.openai.com/v1/threads/${threadId}/runs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'OpenAI-Beta': 'assistants=v2'
			},
			body: JSON.stringify({
				assistant_id: currentAssistantId
			})
		});

		if (!runResponse.ok) {
			const errorData = await runResponse.json();
			console.error('Error starting assistant run:', errorData);
			throw new Error(`Failed to start assistant run: ${JSON.stringify(errorData)}`);
		}

		const runData = await runResponse.json();
		const runId = runData.id;

		// Poll for run completion
		let runStatus;
		do {
			const checkResponse = await fetch(
				`https://api.openai.com/v1/threads/${threadId}/runs/${runId}`,
				{
					headers: {
						Authorization: `Bearer ${OPENAI_API_KEY}`,
						'OpenAI-Beta': 'assistants=v2'
					}
				}
			);

			if (!checkResponse.ok) {
				const errorData = await checkResponse.json();
				console.error('Error checking run status:', errorData);
				throw new Error(`Failed to check run status: ${JSON.stringify(errorData)}`);
			}

			runStatus = await checkResponse.json();

			if (runStatus.status === 'failed') {
				console.error('Run failed:', runStatus);
				throw new Error(`Run failed: ${JSON.stringify(runStatus)}`);
			}

			if (runStatus.status !== 'completed') {
				// Wait before checking again
				await new Promise((resolve) => setTimeout(resolve, 1000));
			}
		} while (runStatus.status !== 'completed');

		// Get the messages from the thread
		const messagesResponse = await fetch(`https://api.openai.com/v1/threads/${threadId}/messages`, {
			headers: {
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'OpenAI-Beta': 'assistants=v2'
			}
		});

		if (!messagesResponse.ok) {
			const errorData = await messagesResponse.json();
			console.error('Error fetching thread messages:', errorData);
			throw new Error(`Failed to fetch thread messages: ${JSON.stringify(errorData)}`);
		}

		const messagesData = await messagesResponse.json();

		// Get the latest assistant message
		const assistantMessages = messagesData.data
			.filter((msg: any) => msg.role === 'assistant')
			.sort(
				(a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
			);

		if (assistantMessages.length === 0) {
			throw new Error('No assistant messages found in thread');
		}

		const latestAssistantMessage = assistantMessages[0];
		const assistantResponse = latestAssistantMessage.content[0].text.value;

		// Return the response in the format expected by the chat component
		return new Response(
			JSON.stringify({
				id: crypto.randomUUID(),
				role: 'assistant',
				content: assistantResponse
			})
		);
	} catch (error) {
		console.error('Error in chat API:', error);

		// Return appropriate error response
		return new Response(
			JSON.stringify({
				error: 'An error occurred while connecting to OpenAI Assistants API'
			}),
			{ status: 500 }
		);
	}
}
