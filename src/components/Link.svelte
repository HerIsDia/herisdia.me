<script lang="ts">
  export let color: string;
  export let href: string;
  export let text: string;
  export let newTab: boolean = false;
</script>

<a
  id="button"
  style="--color: {color};"
  {href}
  target={newTab ? '_blank' : '_self'}>{text}</a
>
