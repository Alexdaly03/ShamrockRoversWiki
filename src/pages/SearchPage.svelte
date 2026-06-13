<script>
  import FilterTabs from '../components/FilterTabs.svelte'
  import PageHero from '../components/PageHero.svelte'
  import SearchField from '../components/SearchField.svelte'

  export let records = []
  export let totalRecords = 0
  export let sourceCount = 0
  export let searchTypes = []
  export let activeType = 'All'
  export let searchValue = ''
  export let onFilter
  export let onSearch
  export let onOpen
</script>

<PageHero
  eyebrow="Global search"
  title="Search the whole archive."
  intro="Find players, matches, programmes, seasons, honours, stadiums, and timeline entries from one place."
  stats={[
    { label: 'Searchable records', value: totalRecords },
    { label: 'Current results', value: records.length },
    { label: 'Collections', value: searchTypes.length - 1 },
    { label: 'Source links', value: sourceCount },
  ]}
/>

<section class="archive-page" aria-labelledby="search-title">
  <div class="records-toolbar">
    <div>
      <p class="eyebrow">Search</p>
      <h2 id="search-title">Archive results</h2>
    </div>
    <SearchField
      label="Search everything"
      value={searchValue}
      placeholder="Try Tallaght, Byrne, FAI Cup..."
      ariaLabel="Search the whole archive"
      onInput={onSearch}
    />
  </div>

  <FilterTabs options={searchTypes} active={activeType} onSelect={onFilter} label="Search type filters" />

  <div class="search-results">
    {#each records as result}
      <article class="search-result">
        <div>
          <div class="record-topline">
            <span>{result.type}</span>
            <small>{result.meta}</small>
          </div>
          <h3>{result.title}</h3>
          <p>{result.summary}</p>
        </div>
        <button type="button" onclick={() => onOpen(result)}>Open</button>
      </article>
    {:else}
      <div class="empty-state">
        <h3>No results found</h3>
        <p>Try a different search term or clear the collection filter.</p>
      </div>
    {/each}
  </div>
</section>
