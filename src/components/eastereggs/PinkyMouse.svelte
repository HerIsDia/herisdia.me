<script lang="ts">
  import { onMount } from 'svelte';
  const pinkyMouseLocalStorage = localStorage.getItem('pinkyMouse');
  const pinkyMouseDate = pinkyMouseLocalStorage
    ? parseInt(pinkyMouseLocalStorage)
    : 0;
  const isEnable =
    pinkyMouseDate + 1000 * 60 * 60 * 24 * 7 > new Date().getTime();
  let img: HTMLImageElement;

  onMount(() => {
    if (isEnable) {
      img.style.visibility = 'visible';
      document.body.style.cursor = 'none';
      document.addEventListener('mousemove', (e) => {
        img.style.opacity = '1';

        const mouseY = e.clientY;
        const mouseX = e.clientX;

        img.style.transform = `translate3d(${mouseX - 16}px, ${
          mouseY - 16
        }px, 0)`;
      });
    }
    const getUrl = window.location.pathname;
    if (getUrl.startsWith('/pinky')) {
      localStorage.setItem('pinkyMouse', `${new Date().getTime()}`);
    }
  });
</script>

<img
  bind:this={img}
  src="/pinkyt.png"
  alt="pinkymouse"
  width="32px"
  height="32px"
  style="opacity: 0;"
/>

<style>
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    cursor: none;
    pointer-events: none;
    visibility: hidden;
  }
</style>
