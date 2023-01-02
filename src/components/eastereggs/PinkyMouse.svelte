<script lang="ts">
  import { onMount } from 'svelte';

  const isEnable = localStorage.getItem('pinkyMouse') === 'true';
  let img: HTMLImageElement;

  onMount(() => {
    if (isEnable) {
      img.style.visibility = 'visible';
      document.body.style.cursor = 'none';
      document.addEventListener('mousemove', (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;

        img.style.transform = `translate3d(${mouseX - 16}px, ${
          mouseY - 16
        }px, 0)`;
      });
    }
    const getUrl = window.location.pathname;
    if (getUrl.startsWith('/pinky')) {
      localStorage.setItem('pinkyMouse', 'true');
    }
  });
</script>

<img
  bind:this={img}
  src="/pinkyt.png"
  alt="pinkymouse"
  width="32px"
  height="32px"
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
