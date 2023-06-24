<script lang="ts">
  export let title: string;
  export let description: string;
  export let text: string;

  const url = window.location.href;

  const shareData: ShareData = {
    title,
    text: description,
    url,
  };

  const canShare = navigator.canShare && navigator.canShare(shareData);
  const share = async () => {
    try {
      await navigator.share(shareData);
      console.log('Shared successfully');
    } catch (err) {
      console.log(err);
    }
  };
</script>

{#if canShare}
  <a
    on:click|preventDefault={() => share()}
    id="button"
    style="--color: white;"
    href="#">{text}</a
  >
{/if}

<style>
  a {
    color: var(--color);
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--selection-btn);
    cursor: pointer;
  }

  a:hover {
    color: white;
    border-color: var(--color);
  }
  a:focus,
  a:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
