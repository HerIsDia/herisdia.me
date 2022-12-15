<script lang="ts">
  export let title: string;
  export let image: string | undefined;
  export let imageAlt: string | undefined;
  export let subtitle: string | undefined;
</script>

<div class="flex flex-row items-center gap-4 mb-8 flex-wrap">
  {#if image && imageAlt}
    <div id="logo" class="flex justify-center items-center ">
      <img
        src={image}
        alt={imageAlt}
        class="w-32 rounded-2xl border-solid bg-[#0f0f0f]"
      />
    </div>
  {/if}
  <div>
    <h1 class="font-bold text-4xl">
      {title}
    </h1>
    {#if subtitle}
      <h2 class="text-2xl lg:text-3xl">
        <span
          style="color: var(--primary); transition: color 0.69s ease-in-out;"
          >{subtitle}</span
        >
      </h2>
    {/if}
  </div>
</div>
