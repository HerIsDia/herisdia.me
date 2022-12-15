<script lang="ts">
  import { onMount } from 'svelte';

  export let quickAccessString: string = '';

  let form: HTMLFormElement;
  let input: HTMLInputElement;

  onMount(() => {
    quickAccessString = window.location.pathname;
    input.value = quickAccessString;
  });

  const triggered = (e: KeyboardEvent) => {
    if (e.key === 'C' && e.ctrlKey) {
      e.preventDefault();
      form.classList.toggle('hidden');
      input.focus();
    }
  };

  const entered = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      form.classList.toggle('hidden');
      window.location.pathname = `${input.value.toLowerCase()}`;
      input.value = '';
      quickAccessString = window.location.hash.slice(1).toLowerCase();
    }
  };
</script>

<svelte:window on:keydown={triggered} />

<form
  bind:this={form}
  on:submit|preventDefault
  class="absolute top-3 left-3 w-2/5 hidden"
>
  <input
    bind:this={input}
    on:keydown={entered}
    type="text"
    class="w-full rounded-md border-2 border-blue-200"
  />
</form>
