import type { RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Get OpenAI API key from environment variables
const OPENAI_API_KEY = env.OPENAI_API_KEY;

/**
 * DELETE handler for removing files from an assistant
 */
export async function DELETE({ request }: RequestEvent) {
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

		const { fileId, assistantId } = await request.json();

		if (!fileId || typeof fileId !== 'string') {
			return new Response(JSON.stringify({ error: 'No fileId provided' }), { status: 400 });
		}

		if (!assistantId || typeof assistantId !== 'string') {
			return new Response(JSON.stringify({ error: 'No assistantId provided' }), { status: 400 });
		}

		// First, remove the file from the assistant
		const detachResponse = await fetch(
			`https://api.openai.com/v1/assistants/${assistantId}/files/${fileId}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${OPENAI_API_KEY}`,
					'OpenAI-Beta': 'assistants=v2'
				}
			}
		);

		if (!detachResponse.ok) {
			const errorData = await detachResponse.json();
			console.error('Error detaching file from assistant:', errorData);
			return new Response(JSON.stringify({ error: 'Failed to detach file from assistant' }), {
				status: 500
			});
		}

		// Then, optionally delete the file from OpenAI
		const deleteResponse = await fetch(`https://api.openai.com/v1/files/${fileId}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${OPENAI_API_KEY}`
			}
		});

		if (!deleteResponse.ok) {
			// If just detaching worked but deletion failed, we still consider it a success
			// but log the error and return a warning
			const errorData = await deleteResponse.json();
			console.error('Error deleting file from OpenAI:', errorData);
			return new Response(
				JSON.stringify({
					success: true,
					warning: 'File was detached from assistant but could not be deleted from OpenAI'
				})
			);
		}

		return new Response(
			JSON.stringify({
				success: true,
				message: `File ${fileId} successfully removed from assistant and deleted`
			})
		);
	} catch (error) {
		console.error('Error in file deletion API:', error);
		return new Response(
			JSON.stringify({
				error: 'An error occurred during file deletion'
			}),
			{ status: 500 }
		);
	}
}