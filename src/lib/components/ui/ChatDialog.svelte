<script lang="ts">
	import Button from '$lib/shared/components/button.svelte';
	import { createEventDispatcher } from 'svelte';
	import FileUpload from './FileUpload.svelte';

	const dispatch = createEventDispatcher();

	let isUploadVisible = true;
	let setUploadVisible = () => (isUploadVisible = !isUploadVisible);

	// Keep track of uploaded file IDs
	let uploadedFileIds: string[] = [];

	// Handle file uploaded event
	function handleFileUploaded(fileId: string) {
		uploadedFileIds = [...uploadedFileIds, fileId];
		// Add a system message about the file being uploaded
		messagesStore.update((msgs) => [
			...msgs,
			{
				id: crypto.randomUUID(),
				role: 'assistant',
				content:
					'I can now access the uploaded PDF document. Feel free to ask questions about its contents!'
			}
		]);
	}

	// Define message type
	interface ChatMessage {
		id: string;
		role: 'user' | 'assistant';
		content: string;
	}

	import { writable } from 'svelte/store';

	// State management
	const messagesStore = writable<ChatMessage[]>([
		{
			id: crypto.randomUUID(),
			role: 'assistant',
			content: 'Hello! How can I help you today?'
		}
	]);
	const inputStore = writable('');
	const isLoadingStore = writable(false);

	// Function to handle form submission
	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		let currentInput = '';
		let currentIsLoading = false;

		// Get current values from stores
		const unsubInput = inputStore.subscribe((value) => (currentInput = value));
		const unsubLoading = isLoadingStore.subscribe((value) => (currentIsLoading = value));

		// Cleanup subscriptions
		unsubInput();
		unsubLoading();

		if (!currentInput.trim() || currentIsLoading) return;

		// Add user message
		const userMessage: ChatMessage = {
			id: crypto.randomUUID(),
			role: 'user',
			content: currentInput.trim()
		};
		messagesStore.update((msgs) => [...msgs, userMessage]);

		// Clear input and set loading state
		inputStore.set('');
		isLoadingStore.set(true);

		try {
			// Get updated messages after adding user message
			let updatedMessages: ChatMessage[] = [];
			const unsubMessages = messagesStore.subscribe((value) => (updatedMessages = [...value]));
			unsubMessages();

			// Generate a user ID or use a stored one
			const userId = localStorage.getItem('chatUserId') || `user-${crypto.randomUUID()}`;
			if (!localStorage.getItem('chatUserId')) {
				localStorage.setItem('chatUserId', userId);
			}

			// Send request to API
			const response = await fetch('/api/chat', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					messages: updatedMessages,
					userId: userId
				})
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			const responseData = await response.json();

			// Add assistant messag
			messagesStore.update((msgs) => [...msgs, responseData]);
		} catch (error) {
			console.error('Error sending message:', error);
			// Add error message
			messagesStore.update((msgs) => [
				...msgs,
				{
					id: crypto.randomUUID(),
					role: 'assistant',
					content: 'Sorry, there was an error processing your request.'
				}
			]);
		} finally {
			isLoadingStore.set(false);
		}
	}

	// Function to close the dialog
	function closeDialog() {
		console.log('Closing dialog');
		dispatch('close');
	}
</script>

<div
	class="fixed bottom-20 right-4 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50 max-h-[500px]"
>
	<!-- Header -->
	<div class="p-4 border-b flex justify-between items-center bg-gray-50 rounded-t-lg">
		<h3 class="font-medium">Chat Assistant</h3>
		<button
			on:click={closeDialog}
			class="text-gray-500 hover:text-gray-700"
			aria-label="Close chat"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="18"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>
	</div>

	<!-- Chat messages -->
	<div class="flex-1 p-4 overflow-y-auto space-y-4">
		{#if $messagesStore.length === 0}
			<div class="text-gray-500 text-center py-4">How can I help you today?</div>
		{:else}
			{#each $messagesStore as message}
				<div class={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
					<div
						class={`max-w-[80%] px-4 py-2 rounded-lg ${message.role === 'user' ? 'bg-[#ea6e20] text-white' : 'bg-gray-100 text-gray-800'}`}
					>
						{message.content}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<!-- File upload section -->
	{#if isUploadVisible}
		<div class="border-t border-gray-200">
			<FileUpload {setUploadVisible} onFileUploaded={handleFileUploaded} />
		</div>
	{/if}

	<!-- Input form -->
	<form on:submit={handleSubmit} class="border-t p-4">
		<div class="flex gap-2">
			<input
				type="text"
				bind:value={$inputStore}
				placeholder="Type your message..."
				class="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ea6e20] focus:border-transparent"
				disabled={$isLoadingStore}
			/>
			<Button
				type="submit"
				variant="default"
				disabled={$isLoadingStore || !$inputStore.trim()}
				class="bg-[#ea6e20] hover:bg-[#c85d1d] text-white"
			>
				{#if $isLoadingStore}
					<svg
						class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					Sending
				{:else}
					Send
				{/if}
			</Button>
		</div>
	</form>
</div>
