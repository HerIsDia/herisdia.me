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
    background-color: #1f1f1f;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
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
