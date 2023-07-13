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
    href="#share">{text}</a
  >
{/if}
