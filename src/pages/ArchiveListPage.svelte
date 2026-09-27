<script>
  import ArchiveRecordCard from '../components/ArchiveRecordCard.svelte'
  import FilterTabs from '../components/FilterTabs.svelte'
  import PageHero from '../components/PageHero.svelte'
  import SearchField from '../components/SearchField.svelte'

  export let hero
  export let eyebrow
  export let title
  export let records = []
  export let filters = []
  export let activeFilter = 'All'
  export let searchValue = ''
  export let searchLabel = 'Search'
  export let searchPlaceholder = ''
  export let selectOptions = []
  export let selectValue = ''
  export let selectLabel = 'Select'
  export let summaryStats = []
  export let groupBy = null
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
  export let onSelect = null
  export let onOpen
  export let openLabel = 'Open'

  $: titleId = `${title.toLowerCase().replaceAll(' ', '-')}-title`
  $: recordGroups = groupBy
    ? [...records.reduce((groups, record) => {
        const label = groupBy(record)
        groups.set(label, [...(groups.get(label) ?? []), record])
        return groups
      }, new Map())].map(([label, items]) => ({ label, items }))
    : []
  const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
</script>

<PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} />

<section class="archive-page" aria-labelledby={titleId}>
  <div class="records-toolbar">
    <div>
      <p class="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
    </div>

    <div class="archive-controls">
      {#if selectOptions.length}
        <label class="archive-select">
          <span>{selectLabel}</span>
          <select value={selectValue} onchange={(event) => onSelect?.(event.currentTarget.value)}>
            {#each selectOptions as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        </label>
      {/if}

      <SearchField
        label={searchLabel}
        value={searchValue}
        placeholder={searchPlaceholder}
        ariaLabel={searchLabel}
        onInput={onSearch}
      />
    </div>
  </div>

  <FilterTabs options={filters} active={activeFilter} onSelect={onFilter} label={`${title} filters`} />

  {#if summaryStats.length}
    <dl class="archive-summary" aria-label={`${title} summary`}>
      {#each summaryStats as stat}
        <div>
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      {/each}
    </dl>
  {/if}

  {#if records.length && groupBy}
    <div class="record-groups">
      {#each recordGroups as group}
        <section class="record-group" aria-labelledby={`${titleId}-${slugify(group.label)}`}>
          <div class="record-group-heading">
            <h3 id={`${titleId}-${slugify(group.label)}`}>{group.label}</h3>
            <span>{group.items.length} {group.items.length === 1 ? 'match' : 'matches'}</span>
          </div>
          <div class="record-list">
            {#each group.items as record}
              <ArchiveRecordCard {record} {getTopline} {getMeta} {getTitle} {getSummary} {getFacts} {getTags} {getCover} {onOpen} {openLabel} />
            {/each}
          </div>
        </section>
      {/each}
    </div>
  {:else if records.length}
    <div class="record-list">
      {#each records as record}
        <ArchiveRecordCard {record} {getTopline} {getMeta} {getTitle} {getSummary} {getFacts} {getTags} {getCover} {onOpen} {openLabel} />
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h3>{emptyTitle}</h3>
      <p>{emptyText}</p>
    </div>
  {/if}
</section>
