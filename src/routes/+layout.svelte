<script lang="ts">
	import '../app.css';
	let { children } = $props();
  import TopNav from "$lib/shared/components/topnav.svelte";
</script>

<div class="flex flex-col gap-4">
  <TopNav />
  {@render children()}
</div>

