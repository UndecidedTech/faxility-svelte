<script lang="ts">
const menuItems = [
  { title: 'Apartment Tiles', route: '/masterbook/apartment-tiles' },
  { title: 'Fleet Management', route: '/masterbook/fleet-management' },
  { title: 'Site Facilities', route: '/masterbook/site-facilities' },
  { title: 'Product Information', route: '/masterbook/product-information' },
  { title: 'Engineering & Architectural', route: '/masterbook/engineering' },
  { title: 'Seasonal Operations', route: '/masterbook/seasonal' },
  { title: 'Municipalities Info', route: '/masterbook/municipalities' },
  { title: 'Emergency Management', route: '/masterbook/emergency' },
  { title: 'Resident Info', route: '/masterbook/resident-info' },
  { title: 'Equipment Management', route: '/masterbook/equipment' }
];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {#each menuItems as item}
    <a
      href={item.route}
      class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
    >
      <span class="text-lg font-semibold text-gray-800">{item.title}</span>
    </a>
  {/each}
</div>