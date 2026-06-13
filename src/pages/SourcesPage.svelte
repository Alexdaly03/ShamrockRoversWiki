<script>
  import PageHero from '../components/PageHero.svelte'

  export let sourceGroups = []
  export let sourceCount = 0
  export let researchItems = []
  export let totalRecords = 0
  export let onOpenResearch
</script>

<PageHero
  eyebrow="Research desk"
  title="Sources and research queue."
  intro="Track every reference already attached to the archive and keep a clear list of the fields that still need checking."
  stats={[
    { label: 'Source links', value: sourceCount },
    { label: 'Research tasks', value: researchItems.length },
    { label: 'Archive records', value: totalRecords },
    { label: 'Collections', value: sourceGroups.length },
  ]}
/>

<section class="archive-page" aria-labelledby="sources-title">
  <div class="records-toolbar">
    <div>
      <p class="eyebrow">Sources</p>
      <h2 id="sources-title">Reference index</h2>
    </div>
  </div>

  <div class="source-grid">
    {#each sourceGroups as group}
      <article class="source-card">
        <div class="record-topline">
          <span>{group.label}</span>
          <small>{group.items.length} records</small>
        </div>
        {#each group.items as item}
          <div class="source-record">
            <h3>{item.name ?? item.title}</h3>
            <ul>
              {#each item.sourceLinks as source}
                <li>
                  <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </article>
    {/each}
  </div>

  <div class="records-toolbar research-heading">
    <div>
      <p class="eyebrow">Research queue</p>
      <h2>Fields to verify</h2>
    </div>
  </div>

  <div class="research-list">
    {#each researchItems as item}
      <article class="research-item">
        <div>
          <span>{item.section}</span>
          <h3>{item.title}</h3>
          <p>{item.field}</p>
        </div>
        <button type="button" onclick={() => onOpenResearch(item)}>Open record</button>
      </article>
    {:else}
      <div class="empty-state">
        <h3>No research tasks</h3>
        <p>Every tracked field has a value.</p>
      </div>
    {/each}
  </div>
</section>
