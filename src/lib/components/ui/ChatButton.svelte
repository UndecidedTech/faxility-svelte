<script lang="ts">
	import ChatDialog from '$lib/components/ui/ChatDialog.svelte';
	import { onMount } from 'svelte';

	let isOpen = false;

	function toggleChat(event: MouseEvent) {
		console.log('Button clicked!', event);
		isOpen = !isOpen;
	}

	function handleClose() {
		console.log('Dialog closed!');
		isOpen = false;
	}

	function directClickHandler(event: MouseEvent) {
		console.log('Direct click event fired!', event);
		isOpen = !isOpen;
		// Force Svelte to update
		isOpen = isOpen;
	}
</script>

<div class="fixed bottom-4 right-4 z-[9999]">
	<!-- Simple button for testing click events -->
	<button
		on:click={toggleChat}
		type="button"
		class="rounded-full w-12 h-12 flex items-center justify-center bg-[#ea6e20] hover:bg-[#c85d1d] text-white shadow-md cursor-pointer"
	>
		{#if !isOpen}
			<!-- Chat icon when closed -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
			</svg>
		{:else}
			<!-- X icon when open -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
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
		{/if}
	</button>

	{#if isOpen}
		<ChatDialog on:close={handleClose} />
	{/if}
</div>
