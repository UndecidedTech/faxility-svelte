<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '$lib/shared/components/button.svelte';
	let assistant: any = null;
	let files: any[] = [];
	let loading = true;
	let error: string | null = null;
	let uploadStatus = '';
	let fileInput: HTMLInputElement;
	let isUploading = false;

	// Format bytes to readable size
	function formatFileSize(bytes: number): string {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	}

	// Format timestamp to readable date
	function formatDate(timestamp: number): string {
		return new Date(timestamp * 1000).toLocaleString();
	}

	// Load assistant data
	async function loadAssistantData() {
		try {
			loading = true;
			error = null;

			const response = await fetch('/api/assistant');
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Failed to load assistant data');
			}

			const data = await response.json();
			assistant = data.assistant;
			files = data.files;
		} catch (e: any) {
			error = e.message;
			console.error('Error loading assistant data:', e);
		} finally {
			loading = false;
		}
	}

	// Handle file upload
	async function handleFileUpload() {
		if (!fileInput.files || fileInput.files.length === 0) {
			uploadStatus = 'Please select a file to upload';
			return;
		}

		if (!assistant?.id) {
			uploadStatus = 'Assistant ID not available. Please try again later.';
			return;
		}

		const file = fileInput.files[0];

		isUploading = true;
		uploadStatus = 'Uploading...';

		try {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('assistantId', assistant.id);

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData
			});

			if (response.ok) {
				const result = await response.json();
				uploadStatus = 'File uploaded successfully!';
				// Reload files list
				await loadAssistantData();
				// Clear the file input
				fileInput.value = '';
			} else {
				const error = await response.json();
				uploadStatus = `Error: ${error.error || 'Unknown error'}`;
			}
		} catch (error: any) {
			console.error('Upload error:', error);
			uploadStatus = 'An error occurred during upload';
		} finally {
			isUploading = false;
		}
	}

	// Handle file deletion
	async function deleteFile(fileId: string) {
		if (!confirm('Are you sure you want to delete this file?')) {
			return;
		}

		try {
			const response = await fetch('/api/delete-file', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ fileId, assistantId: assistant.id })
			});

			if (response.ok) {
				// Remove file from the list or reload the list
				files = files.filter((file) => file.id !== fileId);
				uploadStatus = 'File deleted successfully!';
			} else {
				const errorData = await response.json();
				uploadStatus = `Error deleting file: ${errorData.error || 'Unknown error'}`;
			}
		} catch (error: any) {
			console.error('Error deleting file:', error);
			uploadStatus = `Error: ${error.message || 'Failed to delete file'}`;
		}
	}

	// Load data on mount
	onMount(() => {
		loadAssistantData();
	});
</script>

<svelte:head>
	<title>Assistant Management | Faxility</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="text-3xl font-bold mb-6">Assistant Management</h1>

	{#if loading}
		<div class="flex justify-center items-center h-64">
			<div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
		</div>
	{:else if error}
		<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
			<p>{error}</p>
		</div>
	{:else if assistant}
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<!-- Assistant Details Section -->
			<div class="bg-white shadow rounded-lg p-6">
				<h2 class="text-xl font-semibold mb-4">Assistant Details</h2>

				<div class="mb-4">
					<p class="text-sm font-medium text-gray-500">ID</p>
					<p class="text-sm bg-gray-100 p-2 rounded mt-1 break-all">{assistant.id}</p>
				</div>

				<div class="mb-4">
					<p class="text-sm font-medium text-gray-500">Name</p>
					<p class="text-sm bg-gray-100 p-2 rounded mt-1">{assistant.name}</p>
				</div>

				<div class="mb-4">
					<p class="text-sm font-medium text-gray-500">Model</p>
					<p class="text-sm bg-gray-100 p-2 rounded mt-1">{assistant.model}</p>
				</div>

				<div>
					<p class="text-sm font-medium text-gray-500">Instructions</p>
					<pre
						class="text-sm bg-gray-100 p-2 rounded mt-1 whitespace-pre-wrap">{assistant.instructions}</pre>
				</div>
			</div>

			<!-- File Upload and Management Section -->
			<div class="bg-white shadow rounded-lg p-6">
				<h2 class="text-xl font-semibold mb-4">Files</h2>

				<!-- Upload Form -->
				<div class="mb-6 p-4 border rounded-lg">
					<h3 class="text-lg mb-2">Upload File</h3>
					<p class="text-sm text-gray-600 mb-3">
						Upload documents to help the assistant provide more accurate responses.
					</p>

					<div class="flex items-center gap-2">
						<input
							bind:this={fileInput}
							type="file"
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
						<p
							class="mt-2 text-sm {uploadStatus.includes('Error')
								? 'text-red-500'
								: 'text-green-600'}"
						>
							{uploadStatus}
						</p>
					{/if}
				</div>

				<!-- Files List -->
				<div>
					<h3 class="text-lg mb-2">Uploaded Files</h3>

					{#if files.length === 0}
						<p class="text-gray-500 italic">No files uploaded yet.</p>
					{:else}
						<div class="overflow-x-auto">
							<table class="min-w-full divide-y divide-gray-200">
								<thead class="bg-gray-50">
									<tr>
										<th
											scope="col"
											class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>Filename</th
										>
										<th
											scope="col"
											class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>Size</th
										>
										<th
											scope="col"
											class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>Uploaded</th
										>
										<th
											scope="col"
											class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
											>Actions</th
										>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200">
									{#each files as file}
										<tr>
											<td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900"
												>{file.filename}</td
											>
											<td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
												>{formatFileSize(file.bytes)}</td
											>
											<td class="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
												>{formatDate(file.created_at)}</td
											>
											<td class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
												<button
													on:click={() => deleteFile(file.id)}
													class="text-red-600 hover:text-red-900">Delete</button
												>
											</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/if}

	<div class="mt-8">
		<a href="/dashboard" class="text-blue-600 hover:underline">← Back to Dashboard</a>
	</div>
</div>
