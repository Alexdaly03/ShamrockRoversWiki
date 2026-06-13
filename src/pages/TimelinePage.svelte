<script>
  import FilterTabs from '../components/FilterTabs.svelte'
  import PageHero from '../components/PageHero.svelte'
  import SearchField from '../components/SearchField.svelte'

  export let events = []
  export let totalEvents = 0
  export let categories = []
  export let activeCategory = 'All'
  export let searchValue = ''
  export let onFilter
  export let onSearch
  export let onOpenLinked
</script>

<PageHero
  eyebrow="Club timeline"
  title="A chronological guide to the Rovers archive."
  intro="Follow the club from its earliest known reference through the major eras, honours, stadium moves, and European milestones."
  stats={[
    { label: 'Milestones', value: totalEvents },
    { label: 'Categories', value: categories.length - 1 },
    { label: 'Earliest point', value: '1899' },
    { label: 'Latest point', value: '2025' },
  ]}
/>

<section class="archive-page" aria-labelledby="timeline-title">
  <div class="records-toolbar">
    <div>
      <p class="eyebrow">Timeline</p>
      <h2 id="timeline-title">Milestones</h2>
    </div>
    <SearchField
      label="Search timeline"
      value={searchValue}
      placeholder="Try Tallaght, Europe, cup..."
      ariaLabel="Search timeline"
      onInput={onSearch}
    />
  </div>

  <FilterTabs options={categories} active={activeCategory} onSelect={onFilter} label="Timeline category filters" />

  <div class="timeline-list">
    {#each events as event}
      <article class="timeline-item">
        <div class="timeline-year">{event.year}</div>
        <div class="timeline-body">
          <div class="record-topline">
            <span>{event.category}</span>
            <small>{event.sourceLinks.length} sources</small>
          </div>
          <h3>{event.title}</h3>
          <p>{event.summary}</p>
          {#if event.links.length}
            <div class="card-actions linked-actions">
              {#each event.links as link}
                <button type="button" onclick={() => onOpenLinked(link)}>{link.label}</button>
              {/each}
            </div>
          {/if}
          <div class="source-inline">
            {#each event.sourceLinks as source}
              <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
            {/each}
          </div>
        </div>
      </article>
    {:else}
      <div class="empty-state">
        <h3>No timeline events found</h3>
        <p>Try another search or category filter.</p>
      </div>
    {/each}
  </div>
</section>
