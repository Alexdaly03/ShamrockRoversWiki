<script>
  export let activePage
  export let setPage
</script>

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
    <button type="button" class:active={activePage === 'matches' || activePage === 'match-detail'} onclick={() => setPage('matches')}>Matches</button>
    <button type="button" class:active={activePage === 'programmes' || activePage === 'programme-detail'} onclick={() => setPage('programmes')}>Programmes</button>
    <button type="button" class:active={activePage === 'seasons' || activePage === 'season-detail'} onclick={() => setPage('seasons')}>Seasons</button>
    <button type="button" class:active={activePage === 'honours' || activePage === 'honour-detail'} onclick={() => setPage('honours')}>Honours</button>
    <button type="button" class:active={activePage === 'managers' || activePage === 'manager-detail'} onclick={() => setPage('managers')}>Managers</button>
    <button type="button" class:active={activePage === 'stadiums' || activePage === 'stadium-detail'} onclick={() => setPage('stadiums')}>Stadiums</button>
    <button type="button" class:active={activePage === 'timeline'} onclick={() => setPage('timeline')}>Timeline</button>
    <button type="button" class:active={activePage === 'search'} onclick={() => setPage('search')}>Search</button>
    <button type="button" class:active={activePage === 'sources'} onclick={() => setPage('sources')}>Sources</button>
  </nav>
</header>
