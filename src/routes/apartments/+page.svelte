<script lang="ts">
  import Sidebar from '$lib/shared/components/sidebar.svelte';
  import Mainnav from '$lib/shared/components/mainnav.svelte';
  import apartment from '$lib/assets/apartment_1.png';
	import { goto } from '$app/navigation';

  let sidebarExpanded = true;

  function handleSidebarToggle() {
    sidebarExpanded = !sidebarExpanded;
  }

  function handleNavigation(event: CustomEvent) {
    const page = event.detail.page;
    // Handle navigation logic here
    console.log(`Navigating to ${page}`);
  }

  function handleLogout() {
    // Handle logout logic here
    console.log('Logging out...');
  }

  const apartmentData = Array(11).
    fill({
      image: apartment,
      name: "Dvilla Residences Batu",
      paint_color: "Modern Grey",
      building: "#02",
      duration: "2 Days ago",
      id: "1"
     });

  </script>
  <div class="flex">
    <Sidebar 
      isExpanded={sidebarExpanded}
      handleSidebarToggle={handleSidebarToggle}
      on:navigate={handleNavigation}
      on:logout={handleLogout}
    />

    <main class="flex-1 flex-col">
      <Mainnav 
          isExpanded={sidebarExpanded}
          handleSidebarToggle={handleSidebarToggle}
          title="Apartments List"
      />

    <div class="flex-1 flex-col">
      <div class="flex justify-between mt-[40px] mx-[30px] align-middle">
        <h4 class="text-2xl font-semibold">
          Listing Grid
        </h4>

          <div class="pl-5 pr-1.5 py-1.5 bg-[#fbfbfb] rounded-[134px] ring-1 ring-[#eaeaea] inline-flex justify-start items-center gap-2">
            <div class="w-[292px] relative justify-center text-[#72777f] text-sm font-medium font-['Almarena_Neue'] leading-tight">Search apartment....</div>
            <div class="p-3 bg-[#ffe9db] rounded-[100px] flex justify-start items-center gap-2.5 overflow-hidden">
              <div class="w-[15px] h-[15px] relative">
                <div class="w-[15px] h-[15px] left-0 top-0 absolute ring-[1.50px] ring-[#eb6f20]"></div>
            </div>
          </div>
        </div>

      </div>

      <div class="grid grid-cols-4 gap-[15px] mx-[30px] my-[35px]">
        {#each apartmentData as apartmentItem}
          <div class="flex flex-col w-[274px]">
            <button onclick={() => goto(`/apartments/${apartmentItem.id}`)} class="overflow-hidden h-[195px] rounded-tr-md rounded-tl-md">
              <img src={apartmentItem.image} alt="apartment" class="flex-shrink-0 object-cover w-full h-full">
            </button>

            <div class="flex flex-col py-[13px] px-[13px] border-2 border-t-0 rounded-br-md rounded-bl-md">
              <h2 class="text-lg font-semibold ">
                {apartmentItem.name}
              </h2>

              <div>
                <span class="text-[#3D424D]">
                  Paint color&nbsp;&nbsp;:
                </span>
                {apartmentItem.paint_color}
              </div>

              <div class="pt-[7px]">
                <span class="text-[#3D424D]">
                  Building &nbsp;&nbsp;&nbsp;&nbsp; :
                </span>
                <span>
                  {apartmentItem.building}
                </span>
              </div>

              <div class="pt-[7px]">
                <span class="text-[#3D424D]">
                  Duration &nbsp;&nbsp;&nbsp;&nbsp;:
                </span>
                <span>
                  {apartmentItem.duration}
                </span>
              </div>
            </div>

          </div>
        {/each}

      </div>
  </main>
</div>