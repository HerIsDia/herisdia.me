<script lang="ts">
  import { onMount } from 'svelte';

  export let title: string;
  export let description: string;

  export let text: string;
  export let copyText: string;

  let copyBtn: HTMLAnchorElement;

  let shareData: ShareData = {
    title,
    text: description,
    url: '',
  };

  onMount(() => {
    shareData.url = window.location.href;
    canShare = navigator.canShare && navigator.canShare(shareData);
  });

  let canShare = false;
  const share = async () => {
    try {
      await navigator.share(shareData);
      console.log('Shared successfully');
    } catch (err) {
      console.log(err);
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${shareData.title}: ${shareData.url}`
      );
      copyBtn.innerText = '✅';
      setTimeout(() => {
        copyBtn.innerText = copyText;
      }, 3000);
    } catch (err) {
      copyBtn.innerText = '❌ (Sorry)';
      setTimeout(() => {
        copyBtn.innerText = copyText;
      }, 3000);
    }
  };
</script>

{#if canShare}
  <a
    on:click|preventDefault={() => share()}
    style="--color: white;"
    href="#share">{text}</a
  >
{:else}
  <a
    bind:this={copyBtn}
    on:click|preventDefault={() => copy()}
    style="--color: white;"
    href="#share">{copyText}</a
  >
{/if}
