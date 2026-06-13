<script>
  export let options = []
  export let active = 'All'
  export let onSelect
  export let label = 'Filters'
</script>

<div class="filter-tabs" aria-label={label}>
  {#each options as option}
    <button type="button" class:active={active === option} onclick={() => onSelect(option)}>
      {option}
    </button>
  {/each}
</div>
