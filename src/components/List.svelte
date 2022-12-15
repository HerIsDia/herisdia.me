<script lang="ts">
  export let contents: string[];
</script>

<ul id="description" class="mb-4">
  {#each contents as content}
    <li>{@html content}</li>
  {/each}
</ul>
