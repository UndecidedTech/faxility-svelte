<script lang="ts">
  import SignInButton from "clerk-sveltekit/client/SignInButton.svelte";
  import UserButton from "clerk-sveltekit/client/UserButton.svelte";
  import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
  import SignedOut from "clerk-sveltekit/client/SignedOut.svelte";
  // import { CalendarDays, Home } from "lucide-react";
  import Button from "./button.svelte";
  import { page } from '$app/stores';

	import searchIcon from '../../assets/search_icon.svg';

  console.log($page.url.pathname)

</script>


{#if $page.url.pathname === "/marketing"}
<nav class="flex w-full items-center justify-between border-b px-6 py-4 text-xl font-semibold">
      <a href="/" class="text-[#161b26] text-[32px] font-bold font-['Almarena Neue'] leading-[39.15px]">Faxility</a>
        <div class="gap-x-12 h-[55px] pl-[34px] pr-2 py-2 bg-white rounded-[52px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.10)] backdrop-blur-[7.40px] justify-between items-center flex">
        <a href="/aboutus" class="text-center text-[#3d424c] text-lg font-bold font-['Lato'] leading-relaxed">About Us</a>
        <a href="/roadmap" class="text-center text-[#3d424c] text-lg font-bold font-['Lato'] leading-relaxed">Roadmap</a>
        <a href="/partners" class="text-center text-[#3d424c] text-lg font-bold font-['Lato'] leading-relaxed">Partners</a>
        <div class="p-3 bg-[#eaeaea] rounded-[100px] justify-start items-center gap-2.5 flex overflow-hidden">
          <div class="w-[15px] h-[15px] justify-center items-center flex">
            <img src={searchIcon} alt="" srcset="">
          </div>
        </div>
      </div>
      <div class="justify-start items-center gap-[15px] flex">
        <SignedOut>
          <a href="/sign-in">
            <button class="px-7 py-3.5 bg-[#ea6e20] rounded-[100px] border justify-center items-center gap-2.5 flex">
              <div class="text-center text-white text-lg font-bold font-['Lato'] leading-relaxed">Log In</div>
            </button>
          </a>
        </SignedOut>
        <SignedIn>
          {#if $page.path === "/calendar"}
              <a href="/">
                <Button variant="outline" size="sm">
                  <span> home </span>
                </Button>
              </a>
          {:else}
            <a href="/dashboard">
              <Button variant="outline" size="sm" class="p-3 border-r-2 border-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <mask id="mask0_19367_339" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                    <rect x="0.333374" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_19367_339)">
                    <path d="M2.33337 20.5V17.5H4.33337V6.5C4.33337 5.95 4.52921 5.47917 4.92087 5.0875C5.31254 4.69583 5.78337 4.5 6.33337 4.5H21.3334V6.5H6.33337V17.5H12.3334V20.5H2.33337ZM15.3334 20.5C15.05 20.5 14.8125 20.4042 14.6209 20.2125C14.4292 20.0208 14.3334 19.7833 14.3334 19.5V9.5C14.3334 9.21667 14.4292 8.97917 14.6209 8.7875C14.8125 8.59583 15.05 8.5 15.3334 8.5H21.3334C21.6167 8.5 21.8542 8.59583 22.0459 8.7875C22.2375 8.97917 22.3334 9.21667 22.3334 9.5V19.5C22.3334 19.7833 22.2375 20.0208 22.0459 20.2125C21.8542 20.4042 21.6167 20.5 21.3334 20.5H15.3334ZM16.3334 17.5H20.3334V10.5H16.3334V17.5Z" fill="#1C1B1F"/>
                  </g>
                </svg>
              </Button>
            </a>
          {/if}
          <UserButton />
        </SignedIn>
      </div>
</nav>
{/if}


