<script lang="ts">
  let { title } = $props<{ title: string }>();
</script>

<div class="container mx-auto p-8">
  <h1 class="text-3xl font-bold mb-4">{title}</h1>
  <p class="text-gray-600">Welcome to the {title} section.</p>
</div>