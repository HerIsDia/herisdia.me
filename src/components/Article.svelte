<script lang="ts">
  import moment from 'moment';

  export let url: string;
  export let date: Date;
  export let title: string;
  export let description: string;
  export let type: string;
  console.log(date);

  moment.locale(url.split('/')[0]);
  const strDate = moment(date).fromNow();
</script>

<div class="mt-8 link">
  <a href={`/read/${url}/`} class="">
    <hgroup>
      <h3 class="font-bold">
        {title}
      </h3>
      <p class="text-justify font-light">
        {description}
        <br />
        <span class="text-[--primary]">{type}, {strDate}.</span>
      </p>
    </hgroup>
  </a>
</div>

<style>
  .link {
    transition: all 0.2s ease-in-out;
    border-left: 2px solid var(--secondary);
    padding-left: 6px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
  }

  .link:hover {
    color: var(--primary);
    border-color: var(--selection);
    /* scale: 1.01; */
    translate: 5px 0px;
  }
</style>
