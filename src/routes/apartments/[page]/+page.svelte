<script lang="ts">
  import Sidebar from "$lib/shared/components/sidebar.svelte";
  import Mainnav from "$lib/shared/components/mainnav.svelte";
  import apartment2 from "$lib/assets/apartment_2.png";
  
  let sidebarExpanded = true;

  function handleSidebarToggle() {
    sidebarExpanded = !sidebarExpanded
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

  const apartmentDetails = {
      image: apartment2,
      name: "Dvilla Residences Batu",
      paint_color: "Modern Grey",
      building: "#02",
      duration: "2 Days ago",
      id: "1",
      trim: "Standard"
     }


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
      title="Apartment Overview"
    />
  
  <div class="flex-1 flex-col">
    <div class="flex justify-between mt-[40px] mx-[30px] align-middle">
      <h4 class="text-2xl font-semibold">
        Listing Grid
      </h4>
    </div>


      <div class="flex flex-col mx-[30px] my-[35px] bg-[#F7F7F7]">
        <div class="overflow-hidden h-[424px] rounded-tr-md rounded-tl-md">
          <img src={apartment2} alt="apartment" class="flex-shrink-0 object-cover w-full h-full">        
        </div>


        <div class="flex flex-col">
          <h4 class="text-2xl font-semibold">
            {apartmentDetails.name}
          </h4>

          <div class="flex justify-between">
            <span class="text-[#3D424D]">
              Trim Level &nbsp;&nbsp;&nbsp;&nbsp; :
            </span>
            <span>
              {apartmentDetails.trim}
            </span>
          </div>

        </div>
      </div>

  </div>
  
</div>
