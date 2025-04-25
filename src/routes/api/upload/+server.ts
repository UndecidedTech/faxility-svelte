import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY });

// Get OpenAI API key from environment variables
const OPENAI_API_KEY = env.OPENAI_API_KEY;

// File storage - In a real app, you would store this in a database
const assistantFiles = new Map<string, string[]>();

/**
 * POST handler for file uploads
 */
export async function POST({ request }: RequestEvent) {
	try {
		// Check if API key is configured
		// if (!OPENAI_API_KEY) {
		// 	return new Response(
		// 		JSON.stringify({
		// 			error: 'OpenAI API key not configured. Please add it to your environment variables.'
		// 		}),
		// 		{ status: 500 }
		// 	);
		// }

		const formData = await request.formData();
		const file = formData.get('file');
		const assistantId = formData.get('assistantId');

		if (!file || !(file instanceof File)) {
			return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
		}

		if (!assistantId || typeof assistantId !== 'string') {
			return new Response(JSON.stringify({ error: 'No assistantId provided' }), { status: 400 });
		}

		// Convert the file to a blob
		const fileArrayBuffer = await file.arrayBuffer();
		const fileBlob = new Blob([fileArrayBuffer]);

		// Create a FormData object for the file upload
		const uploadFormData = new FormData();
		uploadFormData.append('file', fileBlob, file.name);
		uploadFormData.append('purpose', 'assistants');

		// Upload the file to OpenAI
		const fileUploadResponse = await fetch('https://api.openai.com/v1/files', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${OPENAI_API_KEY}`
			},
			body: uploadFormData
		});

		if (!fileUploadResponse.ok) {
			const errorData = await fileUploadResponse.json();
			console.error('Error uploading file to OpenAI:', errorData);
			return new Response(JSON.stringify({ error: 'Failed to upload file to OpenAI' }), {
				status: 500
			});
		}

		const fileData = await fileUploadResponse.json();
		const fileId = fileData.id;

		// Attach the file to the assistant
		// const attachResponse = await fetch(
		// 	`https://api.openai.com/v1/assistants/${assistantId}/files`,
		// 	{
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			Authorization: `Bearer ${OPENAI_API_KEY}`,
		// 			'OpenAI-Beta': 'assistants=v2'
		// 		},
		// 		body: JSON.stringify({
		// 			file_id: fileId
		// 		})
		// 	}
		// );
		//
		const attachFile = await openai.files.

		if (!attachResponse.ok) {
			const errorData = await attachResponse.json();
			console.error('Error attaching file to assistant:', errorData);
			return new Response(JSON.stringify({ error: 'Failed to attach file to assistant' }), {
				status: 500
			});
		}

		// Store the file ID in our map
		const currentFiles = assistantFiles.get(assistantId) || [];
		assistantFiles.set(assistantId, [...currentFiles, fileId]);

		return new Response(
			JSON.stringify({
				success: true,
				fileId: fileId,
				message: `File ${file.name} uploaded successfully and attached to assistant`
			})
		);
	} catch (error) {
		console.error('Error in file upload API:', error);
		return new Response(
			JSON.stringify({
				error: 'An error occurred during file upload'
			}),
			{ status: 500 }
		);
	}
}
