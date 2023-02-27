<script lang="ts">
  export let subtext: string;
  import data from './credits.json';
  import logoGenerated from '../logo.json';
  const logoList = logoGenerated.files;
</script>

{#each data as credits}
  <hgroup>
    <h1>🖌️ {credits.name}.</h1>
    {#if credits.link}
      <h3>
        {subtext.replace('(x)', credits.name)}
        <a
          href={credits.link.url}
          class="underline"
          target="_blank"
          rel="noopener noreferrer">{credits.link.name}</a
        >.
      </h3>
    {/if}
  </hgroup>
  <br />
  <div class="flex flex-row flex-wrap gap-4">
    {#each credits.numbers as n}
      <img
        src={`/logos/${
          logoList[logoList.findIndex((s) => s.startsWith(`${n}.`))]
        }`}
        alt={`/logos/${
          logoList[logoList.findIndex((s) => s.startsWith(`${n}.`))]
        }`}
        class="w-36 rounded-2xl border-solid"
      />
    {/each}
  </div>
  <br />
  <br />
{/each}
