<script>
  import FilterTabs from '../components/FilterTabs.svelte'
  import PageHero from '../components/PageHero.svelte'
  import SearchField from '../components/SearchField.svelte'

  export let players = []
  export let playerStats = []
  export let positions = []
  export let activePosition = 'All'
  export let searchValue = ''
  export let onFilter
  export let onSearch
  export let onOpen
</script>

<PageHero
  variant="players"
  eyebrow="Player index"
  title="Browse the people who made the Hoops."
  intro="A searchable player archive with positions, eras, honours, appearances, goals, and room for source notes."
  stats={playerStats}
/>

<section class="archive-page" aria-labelledby="players-title">
  <div class="records-toolbar">
    <div>
      <p class="eyebrow">Players</p>
      <h2 id="players-title">Player records</h2>
    </div>

    <SearchField
      label="Search players"
      value={searchValue}
      placeholder="Try Byrne, goalkeeper, FAI Cup..."
      ariaLabel="Search player records"
      onInput={onSearch}
    />
  </div>

  <FilterTabs options={positions} active={activePosition} onSelect={onFilter} label="Player position filters" />

  <div class="players-grid">
    {#each players as player}
      <article class="player-card">
        <button class="player-avatar" type="button" onclick={() => onOpen(player.id)} aria-label={`Open ${player.name}`}>
          {player.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </button>
        <div class="player-card-body">
          <div class="record-topline">
            <span>{player.position}</span>
            <small>{player.era}</small>
          </div>
          <h3>{player.name}</h3>
          <p>{player.summary}</p>
          <dl class="player-facts">
            <div>
              <dt>Appearances</dt>
              <dd>{player.appearances}</dd>
            </div>
            <div>
              <dt>Goals</dt>
              <dd>{player.goals}</dd>
            </div>
          </dl>
          <div class="card-actions">
            <button type="button" onclick={() => onOpen(player.id)}>Open profile</button>
          </div>
        </div>
      </article>
    {:else}
      <div class="empty-state">
        <h3>No players found</h3>
        <p>Try a different search term or clear the position filter.</p>
      </div>
    {/each}
  </div>
</section>
