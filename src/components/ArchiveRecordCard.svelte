<script>
  import CompactFacts from './CompactFacts.svelte'
  import TagList from './TagList.svelte'

  export let record
  export let getTopline
  export let getMeta
  export let getTitle
  export let getSummary
  export let getFacts
  export let getTags
  export let getCover
  export let onOpen
  export let openLabel
</script>

<article class:programme-card={getCover} class:record-card={!getCover}>
  {#if getCover}
    <div class="programme-cover" aria-hidden="true">{getCover(record)}</div>
  {/if}
  <div>
    <div class="record-topline">
      <span>{getTopline(record)}</span>
      <small>{getMeta(record)}</small>
    </div>
    <h3>{getTitle(record)}</h3>
    <p>{getSummary(record)}</p>
    <CompactFacts facts={getFacts(record)} />
    {#if getTags(record).length}
      <TagList tags={getTags(record)} />
    {/if}
    <div class="card-actions">
      <button type="button" onclick={() => onOpen(record)}>{openLabel}</button>
    </div>
  </div>
</article>
