<script lang="ts">
  import SignInButton from "clerk-sveltekit/client/SignInButton.svelte";
  import UserButton from "clerk-sveltekit/client/UserButton.svelte";
  import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
  import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
  // import { CalendarDays, Home } from "lucide-react";
  import Button from "./button.svelte";
  import { page } from '$app/stores';

</script>

<nav class="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
  <a href="/">Faxility</a>
    <div class="flex flex-row">
      <SignedOut>
        <a href="/sign-in">
          <Button variant="outline" size="sm">
            <span> sign in button temp TODO </span>
          </Button>
        </a>
      </SignedOut>
      <SignedIn>
        {#if $page.path === "/calendar"}
            <a href="/">
              <Button variant="outline" size="sm">
                <span> home button temp TODO </span>
              </Button>
            </a>
        {:else}
          <a href="/calendar">
            <Button variant="outline" size="sm">
              <span> calendar button temp TODO </span>
            </Button>
          </a>
        {/if}
        <UserButton />
      </SignedIn>
    </div>
</nav>

