<script>
  export let facts = []
</script>

<dl class="compact-facts">
  {#each facts as fact}
    <div>
      <dt>{fact.label}</dt>
      <dd>{fact.value}</dd>
    </div>
  {/each}
</dl>
