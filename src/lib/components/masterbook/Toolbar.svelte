<script lang="ts">
  function openAddPacketModal() {
    // TODO: Implement modal
    console.log('Open Add Packet Modal');
  }
  
  function openAddSubpacketModal() {
    // TODO: Implement modal
    console.log('Open Add Subpacket Modal');
  }
</script>

<div class="sticky top-0 bg-white border-b shadow-sm z-10">
  <div class="p-4 flex gap-4">
    <button
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      on:click={openAddPacketModal}
    >
      Add Packet
    </button>
    <button
      class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      on:click={openAddSubpacketModal}
    >
      Add Subpacket
    </button>
  </div>
</div>