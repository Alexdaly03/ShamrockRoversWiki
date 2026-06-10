<script>
  import { matches, matchCompetitions } from './data/matches.js'
  import { players, playerPositions } from './data/players.js'
  import { programmes, programmeTypes } from './data/programmes.js'
  import { seasons, seasonPeriods } from './data/seasons.js'
  import { archiveSections, featuredStats, records } from './data/wiki.js'

  let activePage = 'home'
  let activeSection = 'all'
  let activePosition = 'All'
  let activeCompetition = 'All'
  let activeProgrammeType = 'All'
  let activeSeasonPeriod = 'All'
  let selectedPlayerId = null
  let selectedMatchId = null
  let selectedProgrammeId = null
  let selectedSeasonId = null
  let searchTerm = ''
  let playerSearch = ''
  let matchSearch = ''
  let programmeSearch = ''
  let seasonSearch = ''

  $: selectedPlayer = players.find((player) => player.id === selectedPlayerId)
  $: selectedMatch = matches.find((match) => match.id === selectedMatchId)
  $: selectedProgramme = programmes.find((programme) => programme.id === selectedProgrammeId)
  $: linkedProgrammeMatch = selectedProgramme
    ? matches.find((match) => match.id === selectedProgramme.linkedMatchId)
    : null
  $: selectedSeason = seasons.find((season) => season.id === selectedSeasonId)
  $: linkedSeasonMatches = selectedSeason
    ? selectedSeason.linkedMatchIds
        .map((matchId) => matches.find((match) => match.id === matchId))
        .filter(Boolean)
    : []

  $: visibleRecords = records.filter((record) => {
    const query = searchTerm.trim().toLowerCase()
    const matchesSection = activeSection === 'all' || record.type === activeSection
    const searchableText = `${record.title} ${record.meta} ${record.detail} ${record.tags.join(' ')}`
      .toLowerCase()

    return matchesSection && searchableText.includes(query)
  })

  $: visiblePlayers = players.filter((player) => {
    const query = playerSearch.trim().toLowerCase()
    const matchesPosition = activePosition === 'All' || player.position === activePosition
    const searchableText = `${player.name} ${player.position} ${player.era} ${player.summary} ${player.honours.join(' ')}`
      .toLowerCase()

    return matchesPosition && searchableText.includes(query)
  })

  $: visibleMatches = matches.filter((match) => {
    const query = matchSearch.trim().toLowerCase()
    const matchesCompetition = activeCompetition === 'All' || match.competition === activeCompetition
    const searchableText = `${match.title} ${match.competition} ${match.venue} ${match.opponent} ${match.notes} ${match.tags.join(' ')}`
      .toLowerCase()

    return matchesCompetition && searchableText.includes(query)
  })

  $: visibleProgrammes = programmes.filter((programme) => {
    const query = programmeSearch.trim().toLowerCase()
    const matchesType = activeProgrammeType === 'All' || programme.competition === activeProgrammeType
    const searchableText = `${programme.title} ${programme.opponent} ${programme.competition} ${programme.notes} ${programme.tags.join(' ')}`
      .toLowerCase()

    return matchesType && searchableText.includes(query)
  })

  $: visibleSeasons = seasons.filter((season) => {
    const query = seasonSearch.trim().toLowerCase()
    const matchesPeriod = activeSeasonPeriod === 'All' || season.period === activeSeasonPeriod
    const searchableText = `${season.title} ${season.period} ${season.leagueFinish} ${season.cups} ${season.summary} ${season.tags.join(' ')}`
      .toLowerCase()

    return matchesPeriod && searchableText.includes(query)
  })

  $: playerStats = [
    { label: 'Players listed', value: players.length },
    { label: 'Positions', value: playerPositions.length - 1 },
    { label: 'Modern profiles', value: players.filter((player) => player.era === 'Modern era').length },
    { label: 'Research notes', value: players.filter((player) => player.appearances === 'Research needed').length },
  ]

  const sectionLabel = (sectionId) =>
    archiveSections.find((section) => section.id === sectionId)?.label ?? 'Archive'

  const setPage = (page) => {
    activePage = page
    selectedPlayerId = null
    selectedMatchId = null
    selectedProgrammeId = null
    selectedSeasonId = null
  }

  const showPlayer = (playerId) => {
    selectedPlayerId = playerId
    selectedMatchId = null
    selectedProgrammeId = null
    selectedSeasonId = null
    activePage = 'player-detail'
  }

  const showMatch = (matchId) => {
    selectedMatchId = matchId
    selectedPlayerId = null
    selectedProgrammeId = null
    selectedSeasonId = null
    activePage = 'match-detail'
  }

  const showProgramme = (programmeId) => {
    selectedProgrammeId = programmeId
    selectedPlayerId = null
    selectedMatchId = null
    selectedSeasonId = null
    activePage = 'programme-detail'
  }

  const showSeason = (seasonId) => {
    selectedSeasonId = seasonId
    selectedPlayerId = null
    selectedMatchId = null
    selectedProgrammeId = null
    activePage = 'season-detail'
  }

  const showArchiveSection = (sectionId) => {
    activeSection = sectionId
    setPage(sectionId)
  }
</script>

<main class="site-shell">
  <header class="site-header">
    <button class="brand" type="button" onclick={() => setPage('home')} aria-label="Shamrock Rovers Wiki home">
      <span class="brand-mark">SR</span>
      <span>
        <strong>Shamrock Rovers Wiki</strong>
        <small>Club archive</small>
      </span>
    </button>

    <nav class="top-nav" aria-label="Primary navigation">
      <button type="button" class:active={activePage === 'home'} onclick={() => setPage('home')}>Home</button>
      <button type="button" class:active={activePage === 'players' || activePage === 'player-detail'} onclick={() => setPage('players')}>Players</button>
      <button type="button" class:active={activePage === 'matches'} onclick={() => setPage('matches')}>Matches</button>
      <button type="button" class:active={activePage === 'programmes'} onclick={() => setPage('programmes')}>Programmes</button>
      <button type="button" class:active={activePage === 'seasons'} onclick={() => setPage('seasons')}>Seasons</button>
    </nav>
  </header>

  {#if activePage === 'season-detail' && selectedSeason}
    <section class="page-hero archive-hero">
      <div>
        <button class="back-link" type="button" onclick={() => setPage('seasons')}>Back to seasons</button>
        <p class="eyebrow">{selectedSeason.period}</p>
        <h1>{selectedSeason.title}</h1>
        <p class="intro">{selectedSeason.summary}</p>
      </div>

      <div class="mini-stat-grid" aria-label="Season profile summary">
        <div>
          <span>{selectedSeason.leagueFinish}</span>
          <p>League</p>
        </div>
        <div>
          <span>{selectedSeason.cups}</span>
          <p>Cups</p>
        </div>
        <div>
          <span>{selectedSeason.europe}</span>
          <p>Europe</p>
        </div>
        <div>
          <span>{selectedSeason.manager}</span>
          <p>Manager</p>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <article class="detail-main">
        <p class="eyebrow">Season summary</p>
        <h2>{selectedSeason.stadium}</h2>
        <p>{selectedSeason.summary}</p>
      </article>

      <aside class="detail-side">
        <h3>Top scorer</h3>
        <p>{selectedSeason.topScorer}</p>
      </aside>

      <article class="detail-card">
        <h3>Highlights</h3>
        <ul>
          {#each selectedSeason.highlights as highlight}
            <li>{highlight}</li>
          {/each}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Linked matches</h3>
        {#if linkedSeasonMatches.length}
          <div class="linked-list">
            {#each linkedSeasonMatches as match}
              <button type="button" onclick={() => showMatch(match.id)}>
                <strong>{match.title}</strong>
                <span>{match.date}</span>
              </button>
            {/each}
          </div>
        {:else}
          <p>No linked matches yet.</p>
        {/if}
      </article>

      <article class="detail-card">
        <h3>Sources</h3>
        <ul>
          {#each selectedSeason.sourceLinks as source}
            <li>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
            </li>
          {/each}
        </ul>
      </article>
    </section>
  {:else if activePage === 'programme-detail' && selectedProgramme}
    <section class="page-hero archive-hero">
      <div>
        <button class="back-link" type="button" onclick={() => setPage('programmes')}>Back to programmes</button>
        <p class="eyebrow">{selectedProgramme.competition}</p>
        <h1>{selectedProgramme.title}</h1>
        <p class="intro">{selectedProgramme.notes}</p>
      </div>

      <div class="mini-stat-grid" aria-label="Programme profile summary">
        <div>
          <span>{selectedProgramme.date}</span>
          <p>Date</p>
        </div>
        <div>
          <span>{selectedProgramme.opponent}</span>
          <p>Opponent</p>
        </div>
        <div>
          <span>{selectedProgramme.condition}</span>
          <p>Condition</p>
        </div>
        <div>
          <span>{selectedProgramme.coverStatus}</span>
          <p>Cover</p>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <article class="detail-main">
        <p class="eyebrow">Programme notes</p>
        <h2>{selectedProgramme.venue}</h2>
        <p>{selectedProgramme.notes}</p>
      </article>

      <aside class="detail-side">
        <h3>Linked match</h3>
        {#if linkedProgrammeMatch}
          <p>{linkedProgrammeMatch.title}</p>
          <div class="card-actions">
            <button type="button" onclick={() => showMatch(linkedProgrammeMatch.id)}>Open match</button>
          </div>
        {:else}
          <p>No linked match yet.</p>
        {/if}
      </aside>

      <article class="detail-card">
        <h3>Catalogue fields</h3>
        <ul>
          {#each selectedProgramme.details as item}
            <li>{item}</li>
          {/each}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Tags</h3>
        <div class="tag-list">
          {#each selectedProgramme.tags as tag}
            <span>{tag}</span>
          {/each}
        </div>
      </article>

      <article class="detail-card">
        <h3>Sources</h3>
        <ul>
          {#each selectedProgramme.sourceLinks as source}
            <li>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
            </li>
          {/each}
        </ul>
      </article>
    </section>
  {:else if activePage === 'match-detail' && selectedMatch}
    <section class="page-hero archive-hero">
      <div>
        <button class="back-link" type="button" onclick={() => setPage('matches')}>Back to matches</button>
        <p class="eyebrow">{selectedMatch.competition}</p>
        <h1>{selectedMatch.title}</h1>
        <p class="intro">{selectedMatch.notes}</p>
      </div>

      <div class="mini-stat-grid" aria-label="Match profile summary">
        <div>
          <span>{selectedMatch.date}</span>
          <p>Date</p>
        </div>
        <div>
          <span>{selectedMatch.scoreline}</span>
          <p>Score</p>
        </div>
        <div>
          <span>{selectedMatch.venue}</span>
          <p>Venue</p>
        </div>
        <div>
          <span>{selectedMatch.attendance}</span>
          <p>Attendance</p>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <article class="detail-main">
        <p class="eyebrow">Match report</p>
        <h2>{selectedMatch.result}</h2>
        <p>{selectedMatch.notes}</p>
      </article>

      <aside class="detail-side">
        <h3>Scorers</h3>
        {#if selectedMatch.scorers.length}
          <div class="tag-list">
            {#each selectedMatch.scorers as scorer}
              <span>{scorer}</span>
            {/each}
          </div>
        {:else}
          <p>No Rovers scorers listed.</p>
        {/if}
      </aside>

      <article class="detail-card">
        <h3>Timeline</h3>
        <ul>
          {#each selectedMatch.timeline as item}
            <li>{item}</li>
          {/each}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Tags</h3>
        <div class="tag-list">
          {#each selectedMatch.tags as tag}
            <span>{tag}</span>
          {/each}
        </div>
      </article>

      <article class="detail-card">
        <h3>Sources</h3>
        <ul>
          {#each selectedMatch.sourceLinks as source}
            <li>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
            </li>
          {/each}
        </ul>
      </article>
    </section>
  {:else if activePage === 'player-detail' && selectedPlayer}
    <section class="page-hero players-hero">
      <div>
        <button class="back-link" type="button" onclick={() => setPage('players')}>Back to players</button>
        <p class="eyebrow">{selectedPlayer.position}</p>
        <h1>{selectedPlayer.name}</h1>
        <p class="intro">{selectedPlayer.summary}</p>
      </div>

      <div class="mini-stat-grid" aria-label="Player profile summary">
        <div>
          <span>{selectedPlayer.era}</span>
          <p>Era</p>
        </div>
        <div>
          <span>{selectedPlayer.appearances}</span>
          <p>Appearances</p>
        </div>
        <div>
          <span>{selectedPlayer.goals}</span>
          <p>Goals</p>
        </div>
        <div>
          <span>{selectedPlayer.honours.length}</span>
          <p>Honours listed</p>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <article class="detail-main">
        <p class="eyebrow">Biography</p>
        <h2>Profile notes</h2>
        <p>{selectedPlayer.biography}</p>
      </article>

      <aside class="detail-side">
        <h3>Honours</h3>
        <div class="tag-list">
          {#each selectedPlayer.honours as honour}
            <span>{honour}</span>
          {/each}
        </div>
      </aside>

      <article class="detail-card">
        <h3>Seasons</h3>
        <ul>
          {#each selectedPlayer.seasons as season}
            <li>{season}</li>
          {/each}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Notable matches</h3>
        <ul>
          {#each selectedPlayer.notableMatches as match}
            <li>{match}</li>
          {/each}
        </ul>
      </article>

      <article class="detail-card">
        <h3>Sources</h3>
        <ul>
          {#each selectedPlayer.sourceLinks as source}
            <li>
              <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
            </li>
          {/each}
        </ul>
      </article>
    </section>
  {:else if activePage === 'players'}
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

    <section class="archive-page" aria-labelledby="players-title">
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
            <button class="player-avatar" type="button" onclick={() => showPlayer(player.id)} aria-label={`Open ${player.name}`}>
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
                <button type="button" onclick={() => showPlayer(player.id)}>Open profile</button>
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
  {:else if activePage === 'matches'}
    <section class="page-hero archive-hero">
      <div>
        <p class="eyebrow">Match archive</p>
        <h1>Results, fixtures, reports, and derby records.</h1>
        <p class="intro">Track matches by competition, opponent, venue, result, scorers, attendance, and linked programmes.</p>
      </div>
    </section>

    <section class="archive-page" aria-labelledby="matches-title">
      <div class="records-toolbar">
        <div>
          <p class="eyebrow">Matches</p>
          <h2 id="matches-title">Match records</h2>
        </div>
        <label class="search-box">
          <span>Search matches</span>
          <input type="search" bind:value={matchSearch} placeholder="Try derby, Europe, Tallaght..." aria-label="Search match records" />
        </label>
      </div>

      <div class="filter-tabs" aria-label="Match competition filters">
        {#each matchCompetitions as competition}
          <button type="button" class:active={activeCompetition === competition} onclick={() => (activeCompetition = competition)}>
            {competition}
          </button>
        {/each}
      </div>

      <div class="record-list">
        {#each visibleMatches as match}
          <article class="record-card">
            <div class="record-topline">
              <span>{match.competition}</span>
              <small>{match.date}</small>
            </div>
            <h3>{match.title}</h3>
            <p>{match.notes}</p>
            <dl class="compact-facts">
              <div><dt>Opponent</dt><dd>{match.opponent}</dd></div>
              <div><dt>Venue</dt><dd>{match.venue}</dd></div>
              <div><dt>Result</dt><dd>{match.result}</dd></div>
            </dl>
            <div class="tag-list">
              {#each match.tags as tag}<span>{tag}</span>{/each}
            </div>
            <div class="card-actions">
              <button type="button" onclick={() => showMatch(match.id)}>Open match</button>
            </div>
          </article>
        {:else}
          <div class="empty-state"><h3>No matches found</h3><p>Try another search or competition filter.</p></div>
        {/each}
      </div>
    </section>
  {:else if activePage === 'programmes'}
    <section class="page-hero archive-hero">
      <div>
        <p class="eyebrow">Programme archive</p>
        <h1>Catalogue match programmes and collectibles.</h1>
        <p class="intro">Store opponent, date, competition, condition, cover images, scans, and the linked match record.</p>
      </div>
    </section>

    <section class="archive-page" aria-labelledby="programmes-title">
      <div class="records-toolbar">
        <div>
          <p class="eyebrow">Programmes</p>
          <h2 id="programmes-title">Programme records</h2>
        </div>
        <label class="search-box">
          <span>Search programmes</span>
          <input type="search" bind:value={programmeSearch} placeholder="Try cup, derby, Europe..." aria-label="Search programme records" />
        </label>
      </div>

      <div class="filter-tabs" aria-label="Programme type filters">
        {#each programmeTypes as type}
          <button type="button" class:active={activeProgrammeType === type} onclick={() => (activeProgrammeType = type)}>
            {type}
          </button>
        {/each}
      </div>

      <div class="record-list">
        {#each visibleProgrammes as programme}
          <article class="programme-card">
            <div class="programme-cover" aria-hidden="true">SR</div>
            <div>
              <div class="record-topline">
                <span>{programme.competition}</span>
                <small>{programme.date}</small>
              </div>
              <h3>{programme.title}</h3>
              <p>{programme.notes}</p>
              <dl class="compact-facts">
                <div><dt>Opponent</dt><dd>{programme.opponent}</dd></div>
                <div><dt>Condition</dt><dd>{programme.condition}</dd></div>
                <div><dt>Cover</dt><dd>{programme.coverStatus}</dd></div>
              </dl>
              <div class="tag-list">
                {#each programme.tags as tag}<span>{tag}</span>{/each}
              </div>
              <div class="card-actions">
                <button type="button" onclick={() => showProgramme(programme.id)}>Open programme</button>
              </div>
            </div>
          </article>
        {:else}
          <div class="empty-state"><h3>No programmes found</h3><p>Try another search or competition filter.</p></div>
        {/each}
      </div>
    </section>
  {:else if activePage === 'seasons'}
    <section class="page-hero archive-hero">
      <div>
        <p class="eyebrow">Season archive</p>
        <h1>Season-by-season club history.</h1>
        <p class="intro">Bring together squads, tables, trophies, match links, programmes, and important moments.</p>
      </div>
    </section>

    <section class="archive-page" aria-labelledby="seasons-title">
      <div class="records-toolbar">
        <div>
          <p class="eyebrow">Seasons</p>
          <h2 id="seasons-title">Season records</h2>
        </div>
        <label class="search-box">
          <span>Search seasons</span>
          <input type="search" bind:value={seasonSearch} placeholder="Try title, Europe, history..." aria-label="Search season records" />
        </label>
      </div>

      <div class="filter-tabs" aria-label="Season period filters">
        {#each seasonPeriods as period}
          <button type="button" class:active={activeSeasonPeriod === period} onclick={() => (activeSeasonPeriod = period)}>
            {period}
          </button>
        {/each}
      </div>

      <div class="record-list">
        {#each visibleSeasons as season}
          <article class="record-card">
            <div class="record-topline">
              <span>{season.period}</span>
              <small>{season.leagueFinish}</small>
            </div>
            <h3>{season.title}</h3>
            <p>{season.summary}</p>
            <dl class="compact-facts">
              <div><dt>League</dt><dd>{season.leagueFinish}</dd></div>
              <div><dt>Cups</dt><dd>{season.cups}</dd></div>
            </dl>
            <div class="tag-list">
              {#each season.tags as tag}<span>{tag}</span>{/each}
            </div>
            <div class="card-actions">
              <button type="button" onclick={() => showSeason(season.id)}>Open season</button>
            </div>
          </article>
        {:else}
          <div class="empty-state"><h3>No seasons found</h3><p>Try another search or period filter.</p></div>
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
          <input type="search" bind:value={searchTerm} placeholder="Try players, derby, programme..." aria-label="Search archive records" />
        </label>
      </div>

      <div class="filter-tabs" aria-label="Record filters">
        <button type="button" class:active={activeSection === 'all'} onclick={() => (activeSection = 'all')}>All</button>
        {#each archiveSections as section}
          <button type="button" class:active={activeSection === section.id} onclick={() => showArchiveSection(section.id)}>
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
  {/if}
</main>
