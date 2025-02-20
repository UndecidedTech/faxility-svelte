<script lang="ts">
	import { page } from "$app/stores";
	import UserButton from "clerk-sveltekit/client/UserButton.svelte";

    let { isExpanded, handleSidebarToggle } = $props()

    console.log($page.url)
</script>

<nav class="flex w-[100%] items-center justify-between py-4 border-b-2 border-black">
    <div class="flex align-middle">
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button 
            class="ml-6 p-2 transition-transform duration-200" 
            class:rotate-180={!isExpanded}
            on:click={() => handleSidebarToggle()}
        >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </button>

        <div class="justify-self-start items-center flex">
            <div class="w-[31px] h-[31px] relative origin-top-left -rotate-90 rounded-[100px]  overflow-hidden"></div>
            <div class="text-[#161b26] text-2xl font-semibold font-['Almarena Neue'] leading-loose">{$page.path}</div>
        </div>
    

        <div class="inline-block">
            <input
                class="pl-5 pr-1.5 py-1.5 bg-[#fbfbfb] rounded-[134px] border border-[#eaeaea] w-[292px] text-[#72777f] text-sm font-medium font-['Almarena Neue'] leading-tight" 
                type="search"
                name="tasks"
                id="tasks"
                placeholder="Search tasks"
            >
            <div class="p-3 bg-[#ffe9db] rounded-[100px] justify-start items-center gap-2.5 flex overflow-hidden">
                <div class="w-[15px] h-[15px] relative"></div>
            </div>
        </div>

    </div>
        <!-- svelte-ignore a11y_consider_explicit_label -->
    <div class="h-[51px] justify-between items-center flex">
        <div class="justify-start items-center gap-[30px] flex">
            <div class="justify-start items-start flex">
                <div class="pl-5 pr-[15px] py-2.5 bg-[#eb6f20] rounded-[100px] justify-start items-center gap-[15px] flex">
                    <div class="text-white text-sm font-medium font-['Inter'] leading-tight">Add Order</div>
                    <div class="w-6 h-6 relative  overflow-hidden"></div>
                </div>
            </div>
            <div class="justify-start items-center gap-5 flex">
                <div class="p-[9px] bg-[#5b5b5b]/10 rounded-[100px] justify-start items-start gap-2.5 flex">
                    <div class="w-[18px] h-[18px] relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.8624 14.6917C3.2324 14.4806 2.7524 14.0509 2.5424 13.4903C2.3249 12.9296 2.3999 12.3106 2.7449 11.7572L3.6074 10.3664C3.7874 10.0752 3.9524 9.49262 3.9524 9.15039V7.04598C3.9524 4.3372 6.2249 2.13086 9.0149 2.13086C11.8049 2.13086 14.0774 4.3372 14.0774 7.04598V9.15039C14.0774 9.48534 14.2424 10.0752 14.4224 10.3737L15.2774 11.7572C15.5999 12.2815 15.6599 12.915 15.4424 13.4903C15.2249 14.0655 14.7524 14.5024 14.1599 14.6917C12.5099 15.2306 10.7624 15.5 9.0149 15.5C7.2674 15.5 5.5199 15.2306 3.8624 14.6917ZM5.0774 7.04598V9.15039C5.0774 9.68195 4.8524 10.4684 4.5749 10.9271L3.7124 12.3179C3.5474 12.5873 3.5024 12.8713 3.5999 13.1116C3.6899 13.3592 3.9149 13.5485 4.2224 13.6505C7.3574 14.6699 10.6799 14.6699 13.8149 13.6505C14.0849 13.5631 14.2949 13.3665 14.3924 13.1043C14.4899 12.8422 14.4674 12.5582 14.3174 12.3179L13.4549 10.9271C13.1699 10.4538 12.9524 9.67467 12.9524 9.1431V7.04598C12.9524 4.9343 11.1899 3.22311 9.0149 3.22311C6.8474 3.22311 5.0774 4.9343 5.0774 7.04598Z" fill="#585C67"/>
                            <path d="M10.2522 3.4308C10.0347 3.3708 9.82472 3.3258 9.62222 3.2958C8.98472 3.2133 8.36972 3.2583 7.79222 3.4308C7.58222 3.4983 7.35722 3.4308 7.21472 3.2733C7.07222 3.1158 7.02722 2.8908 7.10972 2.6883C7.41722 1.9008 8.16722 1.3833 9.02222 1.3833C9.87722 1.3833 10.6272 1.8933 10.9347 2.6883C11.0097 2.8908 10.9722 3.1158 10.8297 3.2733C10.7172 3.3933 10.5597 3.4533 10.4097 3.4533C10.3572 3.4533 10.3047 3.4458 10.2522 3.4308Z" fill="#585C67"/>
                            <path d="M7.02715 16.7819C6.50215 16.2569 6.20215 15.5369 6.20215 14.7944H7.32715C7.32715 15.2369 7.50715 15.6719 7.82215 15.9869C8.13715 16.3019 8.57215 16.4819 9.01465 16.4819C9.94465 16.4819 10.7021 15.7244 10.7021 14.7944H11.8271C11.8271 16.3469 10.5671 17.6069 9.01465 17.6069C8.27215 17.6069 7.55215 17.3069 7.02715 16.7819Z" fill="#585C67"/>
                            <circle cx="14.5" cy="5.5" r="3.25" fill="#EB6F20" stroke="white" stroke-width="1.5"/>
                        </svg>
                        <div class="w-[5px] h-[5px] left-[12px] top-[2.50px] absolute bg-[#eb6f20] rounded-full border border-white"></div>
                    </div>
                </div>
                <UserButton />
            </div>
        </div>
    </div>
</nav>