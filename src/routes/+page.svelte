<script lang="ts">
  import Cards from "$lib/shared/components/cards.svelte";
  import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
  import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
</script>

<main class="">
  <SignedIn>
    <Cards />
  </SignedIn>
  <SignedOut>
    <div class="h-full w-full text-2xl">Please sign in above</div>
  </SignedOut>
</main>
