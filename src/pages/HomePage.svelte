<script>
  import FilterTabs from '../components/FilterTabs.svelte'
  import SearchField from '../components/SearchField.svelte'
  import TagList from '../components/TagList.svelte'

  export let archiveSections = []
  export let featuredStats = []
  export let records = []
  export let activeSection = 'all'
  export let searchTerm = ''
  export let sectionLabel
  export let onSectionChange
  export let onSearch
  export let setPage

  $: filterOptions = ['all', ...archiveSections.map((section) => section.id)]
</script>

<section class="hero-section">
  <div class="hero-copy">
    <p class="eyebrow">Unofficial Hoops archive</p>
    <h1>Build the living record of Shamrock Rovers.</h1>
    <p class="intro">
      A club archive for programmes, past matches, player profiles, season
      summaries, honours, and the stories behind the green and white.
    </p>

    <div class="hero-actions">
      <button class="primary-action" type="button" onclick={() => setPage('players')}>Browse players</button>
      <button class="secondary-action" type="button" onclick={() => setPage('matches')}>Browse matches</button>
    </div>
  </div>

  <aside class="hero-panel" aria-label="Archive summary">
    {#each featuredStats as stat}
      <div>
        <span>{stat.value}</span>
        <p>{stat.label}</p>
      </div>
    {/each}
  </aside>
</section>

<section class="archive-band" id="archive" aria-labelledby="archive-title">
  <div class="section-heading">
    <p class="eyebrow">Archive areas</p>
    <h2 id="archive-title">Start with the collections supporters will search first.</h2>
  </div>

  <div class="section-grid">
    {#each archiveSections as section}
      <article class="collection-card">
        <div>
          <span class="collection-count">{section.count}</span>
          <h3>{section.label}</h3>
        </div>
        <p>{section.description}</p>
        <button type="button" onclick={() => onSectionChange(section.id)}>
          View {section.label}
        </button>
      </article>
    {/each}
  </div>
</section>

<section class="records-section" id="records" aria-labelledby="records-title">
  <div class="records-toolbar">
    <div>
      <p class="eyebrow">Search the wiki</p>
      <h2 id="records-title">{activeSection === 'all' ? 'All records' : sectionLabel(activeSection)}</h2>
    </div>

    <SearchField
      label="Search"
      value={searchTerm}
      placeholder="Try players, derby, programme..."
      ariaLabel="Search archive records"
      onInput={onSearch}
    />
  </div>

  <FilterTabs
    label="Record filters"
    options={filterOptions}
    active={activeSection}
    onSelect={onSectionChange}
  />

  <div class="record-list">
    {#each records as record}
      <article class="record-card">
        <div class="record-topline">
          <span>{sectionLabel(record.type)}</span>
          <small>{record.meta}</small>
        </div>
        <h3>{record.title}</h3>
        <p>{record.detail}</p>
        <TagList tags={record.tags} />
      </article>
    {:else}
      <div class="empty-state">
        <h3>No records found</h3>
        <p>Try a different search term or switch archive sections.</p>
      </div>
    {/each}
  </div>
</section>
