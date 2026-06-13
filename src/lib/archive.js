export const contains = (value, query) => value.toLowerCase().includes(query)

export const createSearchRecords = ({
  players,
  matches,
  programmes,
  seasons,
  honours,
  managers,
  stadiums,
  timelineEvents,
}) => [
  ...players.map((player) => ({
    type: 'Players',
    title: player.name,
    meta: `${player.position} / ${player.era}`,
    summary: player.summary,
    id: player.id,
    recordType: 'players',
    keywords: `${player.name} ${player.position} ${player.era} ${player.summary} ${player.honours.join(' ')}`,
  })),
  ...matches.map((match) => ({
    type: 'Matches',
    title: match.title,
    meta: `${match.competition} / ${match.date}`,
    summary: match.notes,
    id: match.id,
    recordType: 'matches',
    keywords: `${match.title} ${match.competition} ${match.opponent} ${match.venue} ${match.notes} ${match.tags.join(' ')}`,
  })),
  ...programmes.map((programme) => ({
    type: 'Programmes',
    title: programme.title,
    meta: `${programme.competition} / ${programme.date}`,
    summary: programme.notes,
    id: programme.id,
    recordType: 'programmes',
    keywords: `${programme.title} ${programme.opponent} ${programme.competition} ${programme.notes} ${programme.tags.join(' ')}`,
  })),
  ...seasons.map((season) => ({
    type: 'Seasons',
    title: season.title,
    meta: `${season.period} / ${season.leagueFinish}`,
    summary: season.summary,
    id: season.id,
    recordType: 'seasons',
    keywords: `${season.title} ${season.period} ${season.leagueFinish} ${season.cups} ${season.summary} ${season.tags.join(' ')}`,
  })),
  ...honours.map((honour) => ({
    type: 'Honours',
    title: honour.title,
    meta: `${honour.category} / ${honour.count} wins`,
    summary: honour.summary,
    id: honour.id,
    recordType: 'honours',
    keywords: `${honour.title} ${honour.category} ${honour.status} ${honour.summary} ${honour.years.join(' ')}`,
  })),
  ...managers.map((manager) => ({
    type: 'Managers',
    title: manager.name,
    meta: `${manager.era} / ${manager.tenure}`,
    summary: manager.summary,
    id: manager.id,
    recordType: 'managers',
    keywords: `${manager.name} ${manager.era} ${manager.tenure} ${manager.role} ${manager.summary} ${manager.honours.join(' ')}`,
  })),
  ...stadiums.map((stadium) => ({
    type: 'Stadiums',
    title: stadium.name,
    meta: `${stadium.location} / ${stadium.era}`,
    summary: stadium.summary,
    id: stadium.id,
    recordType: 'stadiums',
    keywords: `${stadium.name} ${stadium.location} ${stadium.era} ${stadium.status} ${stadium.summary}`,
  })),
  ...timelineEvents.map((event) => ({
    type: 'Timeline',
    title: event.title,
    meta: `${event.year} / ${event.category}`,
    summary: event.summary,
    id: event.id,
    recordType: 'timeline',
    keywords: `${event.year} ${event.title} ${event.category} ${event.summary}`,
  })),
]

export const createSourceGroups = (groups) =>
  groups.map((group) => ({
    ...group,
    items: group.items.filter((item) => item.sourceLinks?.length),
  }))

export const countSources = (sourceGroups) =>
  sourceGroups.reduce(
    (total, group) => total + group.items.reduce((groupTotal, item) => groupTotal + item.sourceLinks.length, 0),
    0,
  )

export const createResearchItems = ({ players, matches, programmes, seasons, managers }) => [
  ...players.flatMap((player) =>
    [
      ['Appearances', player.appearances],
      ['Goals', player.goals],
    ]
      .filter(([, value]) => value === 'Research needed')
      .map(([field]) => ({ section: 'Players', title: player.name, field, type: 'players', id: player.id })),
  ),
  ...matches.flatMap((match) =>
    [['Attendance', match.attendance]]
      .filter(([, value]) => value === 'Research needed')
      .map(([field]) => ({ section: 'Matches', title: match.title, field, type: 'matches', id: match.id })),
  ),
  ...programmes.flatMap((programme) =>
    [
      ['Condition', programme.condition],
      ['Cover status', programme.coverStatus],
    ]
      .filter(([, value]) => value === 'Research needed')
      .map(([field]) => ({ section: 'Programmes', title: programme.title, field, type: 'programmes', id: programme.id })),
  ),
  ...seasons.flatMap((season) =>
    [
      ['Cups', season.cups],
      ['Top scorer', season.topScorer],
    ]
      .filter(([, value]) => value === 'Research needed')
      .map(([field]) => ({ section: 'Seasons', title: season.title, field, type: 'seasons', id: season.id })),
  ),
  ...managers.flatMap((manager) =>
    [['Record', manager.record]]
      .filter(([, value]) => value === 'Research needed')
      .map(([field]) => ({ section: 'Managers', title: manager.name, field, type: 'managers', id: manager.id })),
  ),
]
