<script lang="ts">
  let isCollapsed = $state(false);
  
  const tableOfContents = [
    { id: 'section1', title: 'Section 1', packets: [
      { id: 'packet1', title: 'Packet 1' },
      { id: 'packet2', title: 'Packet 2' }
    ]},
    { id: 'section2', title: 'Section 2', packets: [
      { id: 'packet3', title: 'Packet 3' },
      { id: 'packet4', title: 'Packet 4' }
    ]}
  ];
</script>

<div class="h-full bg-gray-100 flex">
  <div class="transition-all duration-300 flex flex-col {isCollapsed ? 'w-0' : 'w-64'} overflow-hidden">
    <div class="p-4 border-b flex justify-between items-center bg-white">
      <h2 class={isCollapsed ? 'hidden' : 'text-lg font-semibold'}>Contents</h2>
    </div>
    
    <div class="flex-1 overflow-y-auto">
      {#each tableOfContents as section}
        <div class="p-4">
          <h3 class="font-medium mb-2">{section.title}</h3>
          <ul class="space-y-2 pl-4">
            {#each section.packets as packet}
              <li>
                <a 
                  href="#{packet.id}" 
                  class="text-blue-600 hover:text-blue-800"
                >
                  {packet.title}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>

  <button 
    class="h-full w-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors"
    on:click={() => isCollapsed = !isCollapsed}
  >
    <span class="block transform {isCollapsed ? 'rotate-0' : 'rotate-180'}">→</span>
  </button>
</div>