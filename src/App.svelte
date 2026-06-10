<script>
  import { players, playerPositions } from './data/players.js'
  import { archiveSections, featuredStats, records } from './data/wiki.js'

  let activePage = 'home'
  let activeSection = 'all'
  let activePosition = 'All'
  let searchTerm = ''
  let playerSearch = ''

  $: normalizedSearch = searchTerm.trim().toLowerCase()
  $: visibleRecords = records.filter((record) => {
    const matchesSection = activeSection === 'all' || record.type === activeSection
    const searchableText = `${record.title} ${record.meta} ${record.detail} ${record.tags.join(' ')}`
      .toLowerCase()

    return matchesSection && searchableText.includes(normalizedSearch)
  })

  $: normalizedPlayerSearch = playerSearch.trim().toLowerCase()
  $: visiblePlayers = players.filter((player) => {
    const matchesPosition = activePosition === 'All' || player.position === activePosition
    const searchableText = `${player.name} ${player.position} ${player.era} ${player.summary} ${player.honours.join(' ')}`
      .toLowerCase()

    return matchesPosition && searchableText.includes(normalizedPlayerSearch)
  })

  $: playerStats = [
    { label: 'Players listed', value: players.length },
    { label: 'Positions', value: playerPositions.length - 1 },
    { label: 'Modern profiles', value: players.filter((player) => player.era === 'Modern era').length },
    { label: 'Research notes', value: players.filter((player) => player.appearances === 'Research needed').length },
  ]

  const sectionLabel = (sectionId) =>
    archiveSections.find((section) => section.id === sectionId)?.label ?? 'Archive'

  const goHome = () => {
    activePage = 'home'
  }

  const goPlayers = () => {
    activePage = 'players'
  }

  const showArchiveSection = (sectionId) => {
    activeSection = sectionId
    activePage = sectionId === 'players' ? 'players' : 'home'
  }
</script>

<main class="site-shell">
  <header class="site-header">
    <button class="brand" type="button" onclick={goHome} aria-label="Shamrock Rovers Wiki home">
      <span class="brand-mark">SR</span>
      <span>
        <strong>Shamrock Rovers Wiki</strong>
        <small>Club archive</small>
      </span>
    </button>

    <nav class="top-nav" aria-label="Primary navigation">
      <button type="button" class:active={activePage === 'home'} onclick={goHome}>Home</button>
      <button type="button" class:active={activePage === 'players'} onclick={goPlayers}>Players</button>
      <button type="button" onclick={() => showArchiveSection('matches')}>Matches</button>
      <button type="button" onclick={() => showArchiveSection('programmes')}>Programmes</button>
      <button type="button" onclick={() => showArchiveSection('seasons')}>Seasons</button>
    </nav>
  </header>

  {#if activePage === 'players'}
    <section class="page-hero players-hero">
      <div>
        <p class="eyebrow">Player index</p>
        <h1>Browse the people who made the Hoops.</h1>
        <p class="intro">
          A searchable player archive with positions, eras, honours, appearances,
          goals, and room for source notes.
        </p>
      </div>

      <div class="mini-stat-grid" aria-label="Player archive summary">
        {#each playerStats as stat}
          <div>
            <span>{stat.value}</span>
            <p>{stat.label}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="players-section" aria-labelledby="players-title">
      <div class="records-toolbar">
        <div>
          <p class="eyebrow">Players</p>
          <h2 id="players-title">Player records</h2>
        </div>

        <label class="search-box">
          <span>Search players</span>
          <input
            type="search"
            bind:value={playerSearch}
            placeholder="Try Byrne, goalkeeper, FAI Cup..."
            aria-label="Search player records"
          />
        </label>
      </div>

      <div class="filter-tabs" aria-label="Player position filters">
        {#each playerPositions as position}
          <button
            type="button"
            class:active={activePosition === position}
            onclick={() => (activePosition = position)}
          >
            {position}
          </button>
        {/each}
      </div>

      <div class="players-grid">
        {#each visiblePlayers as player}
          <article class="player-card">
            <div class="player-avatar" aria-hidden="true">
              {player.name
                .split(' ')
                .map((part) => part[0])
                .join('')}
            </div>
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
              <div class="tag-list">
                {#each player.honours as honour}
                  <span>{honour}</span>
                {/each}
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
  {:else}
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">Unofficial Hoops archive</p>
        <h1>Build the living record of Shamrock Rovers.</h1>
        <p class="intro">
          A club archive for programmes, past matches, player profiles, season
          summaries, honours, and the stories behind the green and white.
        </p>

        <div class="hero-actions">
          <button class="primary-action" type="button" onclick={goPlayers}>Browse players</button>
          <a class="secondary-action" href="#records">Browse records</a>
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
            <button type="button" onclick={() => showArchiveSection(section.id)}>
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

        <label class="search-box">
          <span>Search</span>
          <input
            type="search"
            bind:value={searchTerm}
            placeholder="Try players, derby, programme..."
            aria-label="Search archive records"
          />
        </label>
      </div>

      <div class="filter-tabs" aria-label="Record filters">
        <button
          type="button"
          class:active={activeSection === 'all'}
          onclick={() => (activeSection = 'all')}
        >
          All
        </button>
        {#each archiveSections as section}
          <button
            type="button"
            class:active={activeSection === section.id}
            onclick={() => showArchiveSection(section.id)}
          >
            {section.label}
          </button>
        {/each}
      </div>

      <div class="record-list">
        {#each visibleRecords as record}
          <article class="record-card">
            <div class="record-topline">
              <span>{sectionLabel(record.type)}</span>
              <small>{record.meta}</small>
            </div>
            <h3>{record.title}</h3>
            <p>{record.detail}</p>
            <div class="tag-list">
              {#each record.tags as tag}
                <span>{tag}</span>
              {/each}
            </div>
          </article>
        {:else}
          <div class="empty-state">
            <h3>No records found</h3>
            <p>Try a different search term or switch archive sections.</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="contribute-section" id="contribute" aria-labelledby="contribute-title">
      <div>
        <p class="eyebrow">Next build step</p>
        <h2 id="contribute-title">Turn the homepage into a proper wiki.</h2>
      </div>
      <ol>
        <li>Create individual detail pages for the player records.</li>
        <li>Add verified sources for appearances, goals, honours, and seasons.</li>
        <li>Then repeat this page pattern for matches, programmes, and seasons.</li>
      </ol>
    </section>
  {/if}
</main>
