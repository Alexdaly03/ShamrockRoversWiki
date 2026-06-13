const linkedButtons = (items, onOpen, metaKey) =>
  items.map((item) => ({
    label: item.name ?? item.title,
    meta: item[metaKey],
    onClick: () => onOpen(item.id),
  }))

export const createDetailView = ({
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
  actions,
}) => {
  if (selectedPlayer) {
    return {
      hero: {
        variant: 'players',
        eyebrow: selectedPlayer.position,
        title: selectedPlayer.name,
        intro: selectedPlayer.summary,
        backLabel: 'Back to players',
      },
      onBack: actions.backToPlayers,
      stats: [
        { label: 'Era', value: selectedPlayer.era },
        { label: 'Appearances', value: selectedPlayer.appearances },
        { label: 'Goals', value: selectedPlayer.goals },
        { label: 'Honours listed', value: selectedPlayer.honours.length },
      ],
      main: { eyebrow: 'Biography', title: 'Profile notes', text: selectedPlayer.biography },
      side: { title: 'Honours', tags: selectedPlayer.honours },
      cards: [
        { title: 'Seasons', items: selectedPlayer.seasons },
        { title: 'Notable matches', items: selectedPlayer.notableMatches },
        { title: 'Sources', type: 'links', items: selectedPlayer.sourceLinks },
      ],
    }
  }

  if (selectedMatch) {
    return {
      hero: {
        eyebrow: selectedMatch.competition,
        title: selectedMatch.title,
        intro: selectedMatch.notes,
        backLabel: 'Back to matches',
      },
      onBack: actions.backToMatches,
      stats: [
        { label: 'Date', value: selectedMatch.date },
        { label: 'Score', value: selectedMatch.scoreline },
        { label: 'Venue', value: selectedMatch.venue },
        { label: 'Attendance', value: selectedMatch.attendance },
      ],
      main: { eyebrow: 'Match report', title: selectedMatch.result, text: selectedMatch.notes },
      side: {
        title: 'Scorers',
        text: selectedMatch.scorers.length ? '' : 'No Rovers scorers listed.',
        tags: selectedMatch.scorers.length ? selectedMatch.scorers : null,
      },
      cards: [
        { title: 'Timeline', items: selectedMatch.timeline },
        { title: 'Tags', type: 'tags', items: selectedMatch.tags },
        { title: 'Sources', type: 'links', items: selectedMatch.sourceLinks },
      ],
    }
  }

  if (selectedProgramme) {
    return {
      hero: {
        eyebrow: selectedProgramme.competition,
        title: selectedProgramme.title,
        intro: selectedProgramme.notes,
        backLabel: 'Back to programmes',
      },
      onBack: actions.backToProgrammes,
      stats: [
        { label: 'Date', value: selectedProgramme.date },
        { label: 'Opponent', value: selectedProgramme.opponent },
        { label: 'Condition', value: selectedProgramme.condition },
        { label: 'Cover', value: selectedProgramme.coverStatus },
      ],
      main: { eyebrow: 'Programme notes', title: selectedProgramme.venue, text: selectedProgramme.notes },
      side: {
        title: 'Linked match',
        text: linkedProgrammeMatch?.title ?? 'No linked match yet.',
        action: linkedProgrammeMatch
          ? { label: 'Open match', onClick: () => actions.showMatch(linkedProgrammeMatch.id) }
          : null,
      },
      cards: [
        { title: 'Catalogue fields', items: selectedProgramme.details },
        { title: 'Tags', type: 'tags', items: selectedProgramme.tags },
        { title: 'Sources', type: 'links', items: selectedProgramme.sourceLinks },
      ],
    }
  }

  if (selectedSeason) {
    return {
      hero: {
        eyebrow: selectedSeason.period,
        title: selectedSeason.title,
        intro: selectedSeason.summary,
        backLabel: 'Back to seasons',
      },
      onBack: actions.backToSeasons,
      stats: [
        { label: 'League', value: selectedSeason.leagueFinish },
        { label: 'Cups', value: selectedSeason.cups },
        { label: 'Europe', value: selectedSeason.europe },
        { label: 'Manager', value: selectedSeason.manager },
      ],
      main: { eyebrow: 'Season summary', title: selectedSeason.stadium, text: selectedSeason.summary },
      side: { title: 'Top scorer', text: selectedSeason.topScorer },
      cards: [
        { title: 'Highlights', items: selectedSeason.highlights },
        {
          title: 'Linked matches',
          type: 'buttons',
          items: linkedButtons(linkedSeasonMatches, actions.showMatch, 'date'),
          emptyText: 'No linked matches yet.',
        },
        { title: 'Sources', type: 'links', items: selectedSeason.sourceLinks },
      ],
    }
  }

  if (selectedHonour) {
    return {
      hero: {
        eyebrow: selectedHonour.category,
        title: selectedHonour.title,
        intro: selectedHonour.summary,
        backLabel: 'Back to honours',
      },
      onBack: actions.backToHonours,
      stats: [
        { label: 'Total wins', value: selectedHonour.count },
        { label: 'Status', value: selectedHonour.status },
        { label: 'First listed', value: selectedHonour.years[0] },
        { label: 'Latest listed', value: selectedHonour.years[selectedHonour.years.length - 1] },
      ],
      main: { eyebrow: 'Honour summary', title: `${selectedHonour.count} wins`, text: selectedHonour.summary },
      side: { title: 'Winning years', text: '' },
      cards: [
        { title: 'Winning years', type: 'years', items: selectedHonour.years },
        { title: 'Notes', items: selectedHonour.notes },
        {
          title: 'Linked seasons',
          type: 'buttons',
          items: linkedButtons(linkedHonourSeasons, actions.showSeason, 'leagueFinish'),
          emptyText: 'No linked seasons yet.',
        },
        { title: 'Sources', type: 'links', items: selectedHonour.sourceLinks },
      ],
    }
  }

  if (selectedStadium) {
    return {
      hero: {
        eyebrow: selectedStadium.status,
        title: selectedStadium.name,
        intro: selectedStadium.summary,
        backLabel: 'Back to stadiums',
      },
      onBack: actions.backToStadiums,
      stats: [
        { label: 'Era', value: selectedStadium.era },
        { label: 'Location', value: selectedStadium.location },
        { label: 'Capacity', value: selectedStadium.capacity },
        { label: 'Linked matches', value: linkedStadiumMatches.length },
      ],
      main: { eyebrow: 'Ground notes', title: selectedStadium.location, text: selectedStadium.summary },
      side: { title: 'Status', text: selectedStadium.status },
      cards: [
        { title: 'Notes', items: selectedStadium.notes },
        {
          title: 'Linked matches',
          type: 'buttons',
          items: linkedButtons(linkedStadiumMatches, actions.showMatch, 'date'),
          emptyText: 'No linked matches yet.',
        },
        { title: 'Sources', type: 'links', items: selectedStadium.sourceLinks },
      ],
    }
  }

  if (selectedManager) {
    return {
      hero: {
        eyebrow: selectedManager.era,
        title: selectedManager.name,
        intro: selectedManager.summary,
        backLabel: 'Back to managers',
      },
      onBack: actions.backToManagers,
      stats: [
        { label: 'Tenure', value: selectedManager.tenure },
        { label: 'Role', value: selectedManager.role },
        { label: 'Record', value: selectedManager.record },
        { label: 'Linked seasons', value: linkedManagerSeasons.length },
      ],
      main: { eyebrow: 'Manager profile', title: selectedManager.tenure, text: selectedManager.summary },
      side: { title: 'Honours', tags: selectedManager.honours },
      cards: [
        { title: 'Notes', items: selectedManager.notes },
        {
          title: 'Linked seasons',
          type: 'buttons',
          items: linkedButtons(linkedManagerSeasons, actions.showSeason, 'leagueFinish'),
          emptyText: 'No linked seasons yet.',
        },
        { title: 'Sources', type: 'links', items: selectedManager.sourceLinks },
      ],
    }
  }

  return null
}
