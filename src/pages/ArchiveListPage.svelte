<script>
  import CompactFacts from '../components/CompactFacts.svelte'
  import FilterTabs from '../components/FilterTabs.svelte'
  import PageHero from '../components/PageHero.svelte'
  import SearchField from '../components/SearchField.svelte'
  import TagList from '../components/TagList.svelte'

  export let hero
  export let eyebrow
  export let title
  export let records = []
  export let filters = []
  export let activeFilter = 'All'
  export let searchValue = ''
  export let searchLabel = 'Search'
  export let searchPlaceholder = ''
  export let emptyTitle = 'No records found'
  export let emptyText = 'Try another search or filter.'
  export let getTopline
  export let getMeta
  export let getTitle
  export let getSummary
  export let getFacts
  export let getTags = () => []
  export let getCover = null
  export let onFilter
  export let onSearch
  export let onOpen
  export let openLabel = 'Open'

  $: titleId = `${title.toLowerCase().replaceAll(' ', '-')}-title`
</script>

<PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} />

<section class="archive-page" aria-labelledby={titleId}>
  <div class="records-toolbar">
    <div>
      <p class="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
    </div>

    <SearchField
      label={searchLabel}
      value={searchValue}
      placeholder={searchPlaceholder}
      ariaLabel={searchLabel}
      onInput={onSearch}
    />
  </div>

  <FilterTabs options={filters} active={activeFilter} onSelect={onFilter} label={`${title} filters`} />

  <div class="record-list">
    {#each records as record}
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
    {:else}
      <div class="empty-state">
        <h3>{emptyTitle}</h3>
        <p>{emptyText}</p>
      </div>
    {/each}
  </div>
</section>
