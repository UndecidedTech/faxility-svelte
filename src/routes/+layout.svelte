<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import TopNav from '$lib/shared/components/topnav.svelte';
	import ChatButton from '$lib/components/ui/ChatButton.svelte';

	// Enable debugging mode
	const DEBUG_MODE = true;

	// Log when the layout is mounted to make sure the ChatButton is being rendered
	console.log('Layout loaded - ChatButton should be visible');
</script>

<div>
	<div class="flex flex-col gap-4">
		<TopNav />
		{@render children()}
	</div>
	<ChatButton />
</div>
