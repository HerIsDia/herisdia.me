<script lang="ts">
  export let sub: Boolean = false;
</script>

<div
  id="row"
  class="mt-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-start lg:justify-start flex-wrap"
  style={sub ? 'font-size: 0.7rem' : ''}
>
  <slot />
</div>
