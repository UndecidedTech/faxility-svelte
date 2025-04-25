import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

// Get OpenAI API key and assistant ID from environment variables
const OPENAI_API_KEY = env.OPENAI_API_KEY;
const EXISTING_ASSISTANT_ID = env.EXISTING_ASSISTANT_ID || null;

/**
 * GET handler for retrieving assistant information and files
 */
export async function GET(event: RequestEvent) {
	const assistantsList = await openai.beta.assistants.list();
	console.log(assistantsList.data);

	const myAssistant = await openai.beta.assistants.retrieve(EXISTING_ASSISTANT_ID);

	const fileList = await openai.files.list();

	console.log(fileList);

	return new Response(
		JSON.stringify({
			assistant: myAssistant,
			files: fileList
		})
	);
}
