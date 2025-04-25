<script lang="ts">
  import { onMount } from 'svelte';
  
  let clickCount = 0;
  let buttonPosition = { x: 0, y: 0, width: 0, height: 0 };
  let buttonRef: HTMLButtonElement;
  
  function handleClick() {
    clickCount++;
    console.log('Click detected in diagnostic button!');
    updateButtonPosition();
  }
  
  function updateButtonPosition() {
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      buttonPosition = {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      };
    }
  }
  
  onMount(() => {
    console.log('Diagnostic component mounted');
    updateButtonPosition();
    
    // Add a global click handler to detect click coordinates
    const handleGlobalClick = (e: MouseEvent) => {
      console.log(`Click at X: ${e.clientX}, Y: ${e.clientY}`);
      
      // Check if click is within button bounds
      if (
        e.clientX >= buttonPosition.x && 
        e.clientX <= buttonPosition.x + buttonPosition.width &&
        e.clientY >= buttonPosition.y && 
        e.clientY <= buttonPosition.y + buttonPosition.height
      ) {
        console.log('Click was within button bounds!');
      }
    };
    
    document.addEventListener('click', handleGlobalClick);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  });
</script>

<div class="fixed top-4 left-4 z-[10000] bg-gray-100 p-4 rounded shadow-lg">
  <h3 class="text-lg font-bold mb-2">Click Diagnostic</h3>
  <p>Click count: {clickCount}</p>
  <p>Button position: X:{Math.round(buttonPosition.x)}, Y:{Math.round(buttonPosition.y)}</p>
  <p>Button size: W:{Math.round(buttonPosition.width)}, H:{Math.round(buttonPosition.height)}</p>
  
  <button 
    bind:this={buttonRef}
    on:click={handleClick}
    class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Test Click Here
  </button>
</div>