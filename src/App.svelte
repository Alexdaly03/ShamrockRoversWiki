<script>
  import { onMount } from 'svelte'
  import SiteHeader from './components/SiteHeader.svelte'
  import ArchiveListPage from './pages/ArchiveListPage.svelte'
  import DetailPage from './pages/DetailPage.svelte'
  import HomePage from './pages/HomePage.svelte'
  import PlayersPage from './pages/PlayersPage.svelte'
  import SearchPage from './pages/SearchPage.svelte'
  import SourcesPage from './pages/SourcesPage.svelte'
  import TimelinePage from './pages/TimelinePage.svelte'
  import { honourCategories, honours } from './data/honours.js'
  import { managerEras, managers } from './data/managers.js'
  import { matches, matchCompetitions } from './data/matches.js'
  import { players, playerPositions } from './data/players.js'
  import { programmes, programmeTypes } from './data/programmes.js'
  import { seasons, seasonPeriods } from './data/seasons.js'
  import { stadiums, stadiumStatuses } from './data/stadiums.js'
  import { timelineCategories, timelineEvents } from './data/timeline.js'
  import { archiveSections, featuredStats, records } from './data/wiki.js'
  import { contains, countSources, createResearchItems, createSearchRecords, createSourceGroups } from './lib/archive.js'
  import { createDetailView } from './lib/detailViews.js'

  let activePage = 'home'
  let activeSection = 'all'
  let activePosition = 'All'
  let activeCompetition = 'All'
  let activeProgrammeType = 'All'
  let activeSeasonPeriod = 'All'
  let activeHonourCategory = 'All'
  let activeManagerEra = 'All'
  let activeStadiumStatus = 'All'
  let activeTimelineCategory = 'All'
  let activeSearchType = 'All'
  let selectedPlayerId = null
  let selectedMatchId = null
  let selectedProgrammeId = null
  let selectedSeasonId = null
  let selectedHonourId = null
  let selectedManagerId = null
  let selectedStadiumId = null
  let searchTerm = ''
  let playerSearch = ''
  let matchSearch = ''
  let programmeSearch = ''
  let seasonSearch = ''
  let honourSearch = ''
  let managerSearch = ''
  let stadiumSearch = ''
  let timelineSearch = ''
  let globalSearch = ''

  const routes = {
    home: '#/',
    players: '#/players',
    matches: '#/matches',
    programmes: '#/programmes',
    seasons: '#/seasons',
    honours: '#/honours',
    managers: '#/managers',
    stadiums: '#/stadiums',
    timeline: '#/timeline',
    search: '#/search',
    sources: '#/sources',
  }

  const routeSections = Object.keys(routes)

  const updateRoute = (route) => {
    if (typeof window !== 'undefined' && window.location.hash !== route) {
      window.location.hash = route
    }
  }

  const clearSelections = () => {
    selectedPlayerId = null
    selectedMatchId = null
    selectedProgrammeId = null
    selectedSeasonId = null
    selectedHonourId = null
    selectedManagerId = null
    selectedStadiumId = null
  }

  const applyRoute = () => {
    const route = window.location.hash.replace(/^#\/?/, '')
    const [section, id] = route.split('/')

    clearSelections()

    if (!section) {
      activePage = 'home'
      return
    }

    if (section === 'players' && id && players.some((player) => player.id === id)) {
      selectedPlayerId = id
      activePage = 'player-detail'
      return
    }

    if (section === 'matches' && id && matches.some((match) => match.id === id)) {
      selectedMatchId = id
      activePage = 'match-detail'
      return
    }

    if (section === 'programmes' && id && programmes.some((programme) => programme.id === id)) {
      selectedProgrammeId = id
      activePage = 'programme-detail'
      return
    }

    if (section === 'seasons' && id && seasons.some((season) => season.id === id)) {
      selectedSeasonId = id
      activePage = 'season-detail'
      return
    }

    if (section === 'honours' && id && honours.some((honour) => honour.id === id)) {
      selectedHonourId = id
      activePage = 'honour-detail'
      return
    }

    if (section === 'managers' && id && managers.some((manager) => manager.id === id)) {
      selectedManagerId = id
      activePage = 'manager-detail'
      return
    }

    if (section === 'stadiums' && id && stadiums.some((stadium) => stadium.id === id)) {
      selectedStadiumId = id
      activePage = 'stadium-detail'
      return
    }

    activePage = routeSections.includes(section) ? section : 'home'
  }

  onMount(() => {
    applyRoute()
    window.addEventListener('hashchange', applyRoute)

    return () => window.removeEventListener('hashchange', applyRoute)
  })

  $: selectedPlayer = players.find((player) => player.id === selectedPlayerId)
  $: selectedMatch = matches.find((match) => match.id === selectedMatchId)
  $: selectedProgramme = programmes.find((programme) => programme.id === selectedProgrammeId)
  $: selectedSeason = seasons.find((season) => season.id === selectedSeasonId)
  $: selectedHonour = honours.find((honour) => honour.id === selectedHonourId)
  $: selectedManager = managers.find((manager) => manager.id === selectedManagerId)
  $: selectedStadium = stadiums.find((stadium) => stadium.id === selectedStadiumId)
  $: linkedProgrammeMatch = selectedProgramme
    ? matches.find((match) => match.id === selectedProgramme.linkedMatchId)
    : null
  $: linkedSeasonMatches = selectedSeason
    ? selectedSeason.linkedMatchIds.map((matchId) => matches.find((match) => match.id === matchId)).filter(Boolean)
    : []
  $: linkedHonourSeasons = selectedHonour
    ? selectedHonour.linkedSeasonIds.map((seasonId) => seasons.find((season) => season.id === seasonId)).filter(Boolean)
    : []
  $: linkedManagerSeasons = selectedManager
    ? selectedManager.linkedSeasonIds.map((seasonId) => seasons.find((season) => season.id === seasonId)).filter(Boolean)
    : []
  $: linkedStadiumMatches = selectedStadium
    ? selectedStadium.linkedMatchIds.map((matchId) => matches.find((match) => match.id === matchId)).filter(Boolean)
    : []

  $: visibleRecords = records.filter((record) => {
    const query = searchTerm.trim().toLowerCase()
    const matchesSection = activeSection === 'all' || record.type === activeSection
    return matchesSection && contains(`${record.title} ${record.meta} ${record.detail} ${record.tags.join(' ')}`, query)
  })

  $: visiblePlayers = players.filter((player) => {
    const query = playerSearch.trim().toLowerCase()
    const matchesPosition = activePosition === 'All' || player.position === activePosition
    return matchesPosition && contains(`${player.name} ${player.position} ${player.era} ${player.summary} ${player.honours.join(' ')}`, query)
  })

  $: visibleMatches = matches.filter((match) => {
    const query = matchSearch.trim().toLowerCase()
    const matchesCompetition = activeCompetition === 'All' || match.competition === activeCompetition
    return matchesCompetition && contains(`${match.title} ${match.competition} ${match.venue} ${match.opponent} ${match.notes} ${match.tags.join(' ')}`, query)
  })

  $: visibleProgrammes = programmes.filter((programme) => {
    const query = programmeSearch.trim().toLowerCase()
    const matchesType = activeProgrammeType === 'All' || programme.competition === activeProgrammeType
    return matchesType && contains(`${programme.title} ${programme.opponent} ${programme.competition} ${programme.notes} ${programme.tags.join(' ')}`, query)
  })

  $: visibleSeasons = seasons.filter((season) => {
    const query = seasonSearch.trim().toLowerCase()
    const matchesPeriod = activeSeasonPeriod === 'All' || season.period === activeSeasonPeriod
    return matchesPeriod && contains(`${season.title} ${season.period} ${season.leagueFinish} ${season.cups} ${season.summary} ${season.tags.join(' ')}`, query)
  })

  $: visibleHonours = honours.filter((honour) => {
    const query = honourSearch.trim().toLowerCase()
    const matchesCategory = activeHonourCategory === 'All' || honour.category === activeHonourCategory
    return matchesCategory && contains(`${honour.title} ${honour.category} ${honour.status} ${honour.summary} ${honour.years.join(' ')}`, query)
  })

  $: visibleManagers = managers.filter((manager) => {
    const query = managerSearch.trim().toLowerCase()
    const matchesEra = activeManagerEra === 'All' || manager.era === activeManagerEra
    return matchesEra && contains(`${manager.name} ${manager.era} ${manager.tenure} ${manager.summary} ${manager.honours.join(' ')}`, query)
  })

  $: visibleStadiums = stadiums.filter((stadium) => {
    const query = stadiumSearch.trim().toLowerCase()
    const matchesStatus = activeStadiumStatus === 'All' || stadium.status === activeStadiumStatus
    return matchesStatus && contains(`${stadium.name} ${stadium.location} ${stadium.era} ${stadium.status} ${stadium.summary}`, query)
  })

  $: visibleTimelineEvents = timelineEvents.filter((event) => {
    const query = timelineSearch.trim().toLowerCase()
    const matchesCategory = activeTimelineCategory === 'All' || event.category === activeTimelineCategory
    return matchesCategory && contains(`${event.year} ${event.title} ${event.category} ${event.summary}`, query)
  })

  $: searchTypes = ['All', 'Players', 'Matches', 'Programmes', 'Seasons', 'Honours', 'Managers', 'Stadiums', 'Timeline']
  $: allSearchRecords = createSearchRecords({
    players,
    matches,
    programmes,
    seasons,
    honours,
    managers,
    stadiums,
    timelineEvents,
  })

  $: visibleSearchResults = allSearchRecords.filter((record) => {
    const query = globalSearch.trim().toLowerCase()
    const matchesType = activeSearchType === 'All' || record.type === activeSearchType
    return matchesType && (!query || record.keywords.toLowerCase().includes(query))
  })

  $: playerStats = [
    { label: 'Players listed', value: players.length },
    { label: 'Positions', value: playerPositions.length - 1 },
    { label: 'Modern profiles', value: players.filter((player) => player.era === 'Modern era').length },
    { label: 'Research notes', value: players.filter((player) => player.appearances === 'Research needed').length },
  ]

  $: sourceGroups = createSourceGroups([
    { label: 'Players', items: players },
    { label: 'Matches', items: matches },
    { label: 'Programmes', items: programmes },
    { label: 'Seasons', items: seasons },
    { label: 'Honours', items: honours },
    { label: 'Managers', items: managers },
    { label: 'Stadiums', items: stadiums },
    { label: 'Timeline', items: timelineEvents },
  ])

  $: sourceCount = countSources(sourceGroups)
  $: researchItems = createResearchItems({ players, matches, programmes, seasons, managers })

  const sectionLabel = (sectionId) =>
    archiveSections.find((section) => section.id === sectionId)?.label ?? 'Archive'

  const setPage = (page) => {
    activePage = page
    clearSelections()
    updateRoute(routes[page] ?? routes.home)
  }

  const showPlayer = (id) => {
    clearSelections()
    selectedPlayerId = id
    activePage = 'player-detail'
    updateRoute(`#/players/${id}`)
  }

  const showMatch = (id) => {
    clearSelections()
    selectedMatchId = id
    activePage = 'match-detail'
    updateRoute(`#/matches/${id}`)
  }

  const showProgramme = (id) => {
    clearSelections()
    selectedProgrammeId = id
    activePage = 'programme-detail'
    updateRoute(`#/programmes/${id}`)
  }

  const showSeason = (id) => {
    clearSelections()
    selectedSeasonId = id
    activePage = 'season-detail'
    updateRoute(`#/seasons/${id}`)
  }

  const showHonour = (id) => {
    clearSelections()
    selectedHonourId = id
    activePage = 'honour-detail'
    updateRoute(`#/honours/${id}`)
  }

  const showManager = (id) => {
    clearSelections()
    selectedManagerId = id
    activePage = 'manager-detail'
    updateRoute(`#/managers/${id}`)
  }

  const showStadium = (id) => {
    clearSelections()
    selectedStadiumId = id
    activePage = 'stadium-detail'
    updateRoute(`#/stadiums/${id}`)
  }

  const openByType = (type, id) => {
    if (type === 'players') showPlayer(id)
    if (type === 'matches') showMatch(id)
    if (type === 'programmes') showProgramme(id)
    if (type === 'seasons') showSeason(id)
    if (type === 'honours') showHonour(id)
    if (type === 'managers') showManager(id)
    if (type === 'stadiums') showStadium(id)
  }

  const openResearchItem = (item) => openByType(item.type, item.id)
  const openLinkedRecord = (link) => openByType(link.type, link.id)
  const openSearchResult = (result) =>
    result.recordType === 'timeline' ? setPage('timeline') : openByType(result.recordType, result.id)

  const changeHomeSection = (sectionId) => {
    activeSection = sectionId
    if (sectionId !== 'all') setPage(sectionId)
  }

  $: detailView = createDetailView({
    selectedPlayer,
    selectedMatch,
    selectedProgramme,
    selectedSeason,
    selectedHonour,
    selectedManager,
    selectedStadium,
    linkedProgrammeMatch,
    linkedSeasonMatches,
    linkedHonourSeasons,
    linkedManagerSeasons,
    linkedStadiumMatches,
    actions: {
      backToPlayers: () => setPage('players'),
      backToMatches: () => setPage('matches'),
      backToProgrammes: () => setPage('programmes'),
      backToSeasons: () => setPage('seasons'),
      backToHonours: () => setPage('honours'),
      backToManagers: () => setPage('managers'),
      backToStadiums: () => setPage('stadiums'),
      showMatch,
      showSeason,
    },
  })
</script>

<main class="site-shell">
  <SiteHeader {activePage} {setPage} />

  {#if detailView}
    <DetailPage {...detailView} />
  {:else if activePage === 'players'}
    <PlayersPage
      players={visiblePlayers}
      positions={playerPositions}
      {playerStats}
      {activePosition}
      searchValue={playerSearch}
      onFilter={(value) => (activePosition = value)}
      onSearch={(value) => (playerSearch = value)}
      onOpen={showPlayer}
    />
  {:else if activePage === 'matches'}
    <ArchiveListPage
      hero={{ eyebrow: 'Match archive', title: 'Results, fixtures, reports, and derby records.', intro: 'Track matches by competition, opponent, venue, result, scorers, attendance, and linked programmes.' }}
      eyebrow="Matches"
      title="Match records"
      records={visibleMatches}
      filters={matchCompetitions}
      activeFilter={activeCompetition}
      searchValue={matchSearch}
      searchLabel="Search matches"
      searchPlaceholder="Try derby, Europe, Tallaght..."
      getTopline={(record) => record.competition}
      getMeta={(record) => record.date}
      getTitle={(record) => record.title}
      getSummary={(record) => record.notes}
      getFacts={(record) => [
        { label: 'Opponent', value: record.opponent },
        { label: 'Venue', value: record.venue },
        { label: 'Result', value: record.result },
      ]}
      getTags={(record) => record.tags}
      onFilter={(value) => (activeCompetition = value)}
      onSearch={(value) => (matchSearch = value)}
      onOpen={(record) => showMatch(record.id)}
      openLabel="Open match"
    />
  {:else if activePage === 'programmes'}
    <ArchiveListPage
      hero={{ eyebrow: 'Programme archive', title: 'Catalogue match programmes and collectibles.', intro: 'Store opponent, date, competition, condition, cover images, scans, and the linked match record.' }}
      eyebrow="Programmes"
      title="Programme records"
      records={visibleProgrammes}
      filters={programmeTypes}
      activeFilter={activeProgrammeType}
      searchValue={programmeSearch}
      searchLabel="Search programmes"
      searchPlaceholder="Try cup, derby, Europe..."
      getTopline={(record) => record.competition}
      getMeta={(record) => record.date}
      getTitle={(record) => record.title}
      getSummary={(record) => record.notes}
      getFacts={(record) => [
        { label: 'Opponent', value: record.opponent },
        { label: 'Condition', value: record.condition },
        { label: 'Cover', value: record.coverStatus },
      ]}
      getTags={(record) => record.tags}
      getCover={() => 'SR'}
      onFilter={(value) => (activeProgrammeType = value)}
      onSearch={(value) => (programmeSearch = value)}
      onOpen={(record) => showProgramme(record.id)}
      openLabel="Open programme"
    />
  {:else if activePage === 'seasons'}
    <ArchiveListPage
      hero={{ eyebrow: 'Season archive', title: 'Season-by-season club history.', intro: 'Bring together squads, tables, trophies, match links, programmes, and important moments.' }}
      eyebrow="Seasons"
      title="Season records"
      records={visibleSeasons}
      filters={seasonPeriods}
      activeFilter={activeSeasonPeriod}
      searchValue={seasonSearch}
      searchLabel="Search seasons"
      searchPlaceholder="Try title, Europe, history..."
      getTopline={(record) => record.period}
      getMeta={(record) => record.leagueFinish}
      getTitle={(record) => record.title}
      getSummary={(record) => record.summary}
      getFacts={(record) => [
        { label: 'League', value: record.leagueFinish },
        { label: 'Cups', value: record.cups },
      ]}
      getTags={(record) => record.tags}
      onFilter={(value) => (activeSeasonPeriod = value)}
      onSearch={(value) => (seasonSearch = value)}
      onOpen={(record) => showSeason(record.id)}
      openLabel="Open season"
    />
  {:else if activePage === 'honours'}
    <ArchiveListPage
      hero={{ eyebrow: 'Honours archive', title: 'The trophy cabinet, organised by competition.', intro: 'Track title counts, winning years, linked seasons, and source notes for each major honour.' }}
      eyebrow="Honours"
      title="Competition records"
      records={visibleHonours}
      filters={honourCategories}
      activeFilter={activeHonourCategory}
      searchValue={honourSearch}
      searchLabel="Search honours"
      searchPlaceholder="Try league, cup, Setanta..."
      getTopline={(record) => record.category}
      getMeta={(record) => record.status}
      getTitle={(record) => record.title}
      getSummary={(record) => record.summary}
      getFacts={(record) => [
        { label: 'Wins', value: record.count },
        { label: 'Latest', value: record.years[record.years.length - 1] },
      ]}
      onFilter={(value) => (activeHonourCategory = value)}
      onSearch={(value) => (honourSearch = value)}
      onOpen={(record) => showHonour(record.id)}
      openLabel="Open honour"
    />
  {:else if activePage === 'managers'}
    <ArchiveListPage
      hero={{ eyebrow: 'Managers archive', title: 'The people in charge across club eras.', intro: 'Track tenures, honours, linked seasons, source notes, and research gaps for each manager.' }}
      eyebrow="Managers"
      title="Manager records"
      records={visibleManagers}
      filters={managerEras}
      activeFilter={activeManagerEra}
      searchValue={managerSearch}
      searchLabel="Search managers"
      searchPlaceholder="Try Bradley, O'Neill, four in a row..."
      getTopline={(record) => record.era}
      getMeta={(record) => record.tenure}
      getTitle={(record) => record.name}
      getSummary={(record) => record.summary}
      getFacts={(record) => [
        { label: 'Role', value: record.role },
        { label: 'Record', value: record.record },
      ]}
      getTags={(record) => record.honours}
      onFilter={(value) => (activeManagerEra = value)}
      onSearch={(value) => (managerSearch = value)}
      onOpen={(record) => showManager(record.id)}
      openLabel="Open manager"
    />
  {:else if activePage === 'stadiums'}
    <ArchiveListPage
      hero={{ eyebrow: 'Ground archive', title: 'The places that shaped Rovers history.', intro: 'Track home grounds, temporary venues, stadium eras, linked matches, and source notes.' }}
      eyebrow="Stadiums"
      title="Ground records"
      records={visibleStadiums}
      filters={stadiumStatuses}
      activeFilter={activeStadiumStatus}
      searchValue={stadiumSearch}
      searchLabel="Search stadiums"
      searchPlaceholder="Try Tallaght, Milltown, Ringsend..."
      getTopline={(record) => record.status}
      getMeta={(record) => record.era}
      getTitle={(record) => record.name}
      getSummary={(record) => record.summary}
      getFacts={(record) => [
        { label: 'Location', value: record.location },
        { label: 'Capacity', value: record.capacity },
      ]}
      onFilter={(value) => (activeStadiumStatus = value)}
      onSearch={(value) => (stadiumSearch = value)}
      onOpen={(record) => showStadium(record.id)}
      openLabel="Open stadium"
    />
  {:else if activePage === 'timeline'}
    <TimelinePage
      events={visibleTimelineEvents}
      totalEvents={timelineEvents.length}
      categories={timelineCategories}
      activeCategory={activeTimelineCategory}
      searchValue={timelineSearch}
      onFilter={(value) => (activeTimelineCategory = value)}
      onSearch={(value) => (timelineSearch = value)}
      onOpenLinked={openLinkedRecord}
    />
  {:else if activePage === 'search'}
    <SearchPage
      records={visibleSearchResults}
      totalRecords={allSearchRecords.length}
      {sourceCount}
      {searchTypes}
      activeType={activeSearchType}
      searchValue={globalSearch}
      onFilter={(value) => (activeSearchType = value)}
      onSearch={(value) => (globalSearch = value)}
      onOpen={openSearchResult}
    />
  {:else if activePage === 'sources'}
    <SourcesPage
      {sourceGroups}
      {sourceCount}
      {researchItems}
      totalRecords={players.length + matches.length + programmes.length + seasons.length + honours.length + managers.length + stadiums.length + timelineEvents.length}
      onOpenResearch={openResearchItem}
    />
  {:else}
    <HomePage
      {archiveSections}
      {featuredStats}
      records={visibleRecords}
      {activeSection}
      {searchTerm}
      {sectionLabel}
      onSectionChange={changeHomeSection}
      onSearch={(value) => (searchTerm = value)}
      {setPage}
    />
  {/if}
</main>
