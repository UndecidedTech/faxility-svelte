<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/shared/components/button.svelte';

	export let onFileUploaded: (fileId: string) => void = () => {};

	//add a function from the props called setUploadVisible
	export let setUploadVisible: (visible: boolean) => void = () => {};

	let fileInput: HTMLInputElement;
	let isUploading = false;
	let uploadStatus = '';
	let assistantId = '';

	// Get the assistant ID when the component mounts
	onMount(async () => {
		try {
			const response = await fetch('/api/chat/assistant-id');
			if (response.ok) {
				const data = await response.json();
				assistantId = data.assistantId;
			} else {
				console.error('Failed to get assistant ID');
			}
		} catch (error) {
			console.error('Error getting assistant ID:', error);
		}
	});

	async function handleFileUpload() {
		console.log('CLICKED');
		if (!fileInput.files || fileInput.files.length === 0) {
			uploadStatus = 'Please select a file to upload';
			return;
		}

		if (!assistantId) {
			uploadStatus = 'Assistant ID not available. Please try again later.';
			return;
		}

		const file = fileInput.files[0];
		if (!file.name.toLowerCase().endsWith('.pdf')) {
			uploadStatus = 'Only PDF files are supported';
			return;
		}

		isUploading = true;
		uploadStatus = 'Uploading...';

		try {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('assistantId', assistantId);

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				const result = await response.json();
				uploadStatus = 'File uploaded successfully!';
				if (result.fileId) {
					onFileUploaded(result.fileId);
				}
			} else {
				const error = await response.json();
				uploadStatus = `Error: ${error.error || 'Unknown error'}`;
			}
		} catch (error) {
			console.error('Upload error:', error);
			uploadStatus = 'An error occurred during upload';
		} finally {
			isUploading = false;
		}
	}
</script>

<div class="mb-4 p-4 border rounded-lg">
	<h3 class="text-lg mb-2">Upload PDF Document</h3>
	<button
		on:click={setUploadVisible}
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
	<p class="text-sm text-gray-600 mb-3">
		Upload a PDF document to help the assistant provide more accurate responses.
	</p>

	<div class="flex items-center gap-2">
		<input
			bind:this={fileInput}
			type="file"
			accept=".pdf"
			class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-gray-50 file:text-gray-700
      hover:file:bg-gray-100"
		/>
		<Button
			onclick={handleFileUpload}
			disabled={isUploading}
			variant="default"
			class="bg-[#ea6e20] hover:bg-[#c85d1d] text-white"
		>
			{isUploading ? 'Uploading...' : 'Upload'}
		</Button>
	</div>

	{#if uploadStatus}
		<p class="mt-2 text-sm {uploadStatus.includes('Error') ? 'text-red-500' : 'text-green-600'}">
			{uploadStatus}
		</p>
	{/if}
</div>
