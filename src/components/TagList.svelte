<script>
  export let tags = []
</script>

<div class="tag-list">
  {#each tags as tag}
    <span>{tag}</span>
  {/each}
</div>
