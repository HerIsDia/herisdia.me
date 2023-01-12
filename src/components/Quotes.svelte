<script lang="ts">
  import { onMount } from 'svelte';

  import * as quotes from '../data/quotes.json';
  export let lang: 'fr' | 'en' | 'espo' = 'en';
  let quoteP: HTMLParagraphElement;
  let oldQuote: string = '';

  const generateQuote = () => {
    const quotesInLanguage = quotes[lang];
    let randomQuote = '';
    while (randomQuote === oldQuote) {
      randomQuote =
        quotesInLanguage[Math.floor(Math.random() * quotesInLanguage.length)];
    }
    return randomQuote;
  };

  export let content: string = '';
  $: quotesToRender = content;
  onMount(() => {
    quotesToRender = generateQuote();
    setTimeout(() => {
      quoteP.style.opacity = '1';
      quoteP.style.transform = 'translateX(0)';
    }, 69);

    setInterval(() => {
      quoteP.style.opacity = '0';
      quoteP.style.transform = 'translateX(-5px)';
      setTimeout(() => {
        quoteP.style.transitionDuration = '0s';
        quoteP.style.transform = 'translateX(5px)';
        quotesToRender = generateQuote();
        setTimeout(() => {
          quoteP.style.transitionDuration = '0.69s';
          quoteP.style.opacity = '1';
          quoteP.style.transform = 'translateX(0)';
        }, 69);
      }, 690);
    }, 6900);
  });
</script>

<div
  id="quotes"
  class="mb-8 ml-1 w-fit text-white flex justify-center items-center pl-2 border-l-4 border-solid"
  style="border-color: var(--secondary);"
>
  <p
    bind:this={quoteP}
    class="quoteText font-mundial text-[#ece0f3] font-thin"
    style="opacity: 0; transform: translateX(30px);"
  >
    {@html quotesToRender}
  </p>
</div>

<style>
  .quoteText {
    transition: all 0.69s ease-out;
  }
</style>
