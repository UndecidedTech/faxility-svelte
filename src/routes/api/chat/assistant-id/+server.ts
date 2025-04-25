// No imports needed for this endpoint
import { env } from '$env/dynamic/private';

// Get OpenAI API key and existing Assistant ID from environment variables
const OPENAI_API_KEY = env.OPENAI_API_KEY;
const EXISTING_ASSISTANT_ID = env.EXISTING_ASSISTANT_ID || null;

// Keep track of the assistant ID
let assistantId: string | null = null;

// Get or create the Facility Management Assistant
async function createOrGetAssistant() {
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
		const assistantResponse = await fetch('https://api.openai.com/v2/assistants', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`,
				'OpenAI-Beta': 'assistants=v2'
			},
			body: JSON.stringify({
				name: 'Facility Management Assistant',
				instructions:
					'You are an AI assistant specializing in facility management. Help users with managing work orders, maintenance, inventory, and other facility-related tasks. Be concise, helpful, and provide actionable information. When referencing information from uploaded files, cite the file name and relevant section.',
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

/**
 * GET handler to return the assistant ID
 */
export async function GET() {
	try {
		// Check if API key is configured
		if (!OPENAI_API_KEY) {
			return new Response(
				JSON.stringify({
					error: 'OpenAI API key not configured.'
				}),
				{ status: 500 }
			);
		}

		// Ensure we have an assistant ID
		const id = await createOrGetAssistant();

		return new Response(
			JSON.stringify({
				assistantId: id
			})
		);
	} catch (error) {
		console.error('Error getting assistant ID:', error);
		return new Response(
			JSON.stringify({
				error: 'Failed to get assistant ID'
			}),
			{ status: 500 }
		);
	}
}
