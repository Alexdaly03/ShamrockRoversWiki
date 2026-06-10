export const seasons = [
  {
    id: '2011-season',
    title: '2011 season',
    period: '2010s',
    manager: "Michael O'Neill",
    leagueFinish: 'League of Ireland champions',
    cups: 'Setanta Sports Cup winners; FAI Cup quarter-finals',
    europe: 'Europa League group stage',
    topScorer: 'Billy Dennehy (16 all competitions)',
    stadium: 'Tallaght Stadium',
    summary:
      "One of the greatest seasons in the club's history: league champions, Setanta Sports Cup winners, and the first Irish club to reach a major European group stage.",
    highlights: [
      'Won the League of Ireland title.',
      'Beat Partizan Belgrade 3-2 on aggregate to reach the Europa League group stage.',
      'Played Tottenham Hotspur, Rubin Kazan, and PAOK in the group stage.',
      'Won the Setanta Sports Cup.',
    ],
    linkedMatchIds: ['2011-partizan-away', '2011-flora-home', '2011-tottenham-home'],
    tags: ['League title', 'Europe', 'Setanta Cup'],
    sourceLinks: [
      {
        label: '2011 Shamrock Rovers season',
        url: 'https://en.wikipedia.org/wiki/2011_Shamrock_Rovers_F.C._season',
      },
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: '2019-season',
    title: '2019 season',
    period: '2010s',
    manager: 'Stephen Bradley',
    leagueFinish: 'League runners-up',
    cups: 'FAI Cup winners',
    europe: 'Europa League qualifying',
    topScorer: 'Research needed',
    stadium: 'Tallaght Stadium',
    summary:
      'The season that ended the long FAI Cup wait, with Rovers beating Dundalk on penalties in the Aviva Stadium final.',
    highlights: [
      'Won the FAI Cup for the first time since 1987.',
      'Beat Bohemians in the semi-final at Dalymount Park.',
      'Defeated Dundalk 4-2 on penalties in the final after a 1-1 draw.',
    ],
    linkedMatchIds: ['2019-fai-cup-final-dundalk'],
    tags: ['FAI Cup', 'Aviva Stadium', 'Stephen Bradley'],
    sourceLinks: [
      {
        label: '2019 FAI Cup final',
        url: 'https://en.wikipedia.org/wiki/2019_FAI_Cup_final',
      },
      {
        label: '2019 FAI Cup',
        url: 'https://en.wikipedia.org/wiki/2019_FAI_Cup',
      },
    ],
  },
  {
    id: '2020-season',
    title: '2020 season',
    period: '2020s',
    manager: 'Stephen Bradley',
    leagueFinish: 'League of Ireland champions',
    cups: 'FAI Cup runners-up',
    europe: 'Europa League qualifying',
    topScorer: 'Research needed',
    stadium: 'Tallaght Stadium',
    summary:
      'A pandemic-shortened season where Rovers won the league, were crowned champions after Bohemians lost to Finn Harps, and reached the FAI Cup final.',
    highlights: [
      'Won the 2020 League of Ireland Premier Division.',
      'League season was halted and later resumed because of COVID-19 restrictions.',
      'Reached the FAI Cup final, losing to Dundalk after extra time.',
      'Hosted AC Milan in Europa League qualifying.',
    ],
    linkedMatchIds: ['2020-ac-milan'],
    tags: ['League title', 'COVID season', 'Europa League'],
    sourceLinks: [
      {
        label: '2020 League of Ireland Premier Division',
        url: 'https://en.wikipedia.org/wiki/2020_League_of_Ireland_Premier_Division',
      },
      {
        label: '2020 FAI Cup',
        url: 'https://en.wikipedia.org/wiki/2020_FAI_Cup',
      },
    ],
  },
  {
    id: '2022-season',
    title: '2022 season',
    period: '2020s',
    manager: 'Stephen Bradley',
    leagueFinish: 'League of Ireland champions',
    cups: 'Research needed',
    europe: 'UEFA Europa Conference League group stage',
    topScorer: 'Research needed',
    stadium: 'Tallaght Stadium',
    summary:
      'Rovers won a third league title in a row and reached the group stage of the UEFA Europa Conference League.',
    highlights: [
      'Won a third consecutive league title.',
      'Qualified for the UEFA Europa Conference League group stage.',
      'Continued the modern title-winning run under Stephen Bradley.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'Conference League', 'Modern era'],
    sourceLinks: [
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
      {
        label: '2022-23 Conference League group stage',
        url: 'https://en.wikipedia.org/wiki/2022%E2%80%9323_UEFA_Europa_Conference_League_group_stage',
      },
    ],
  },
  {
    id: 'modern-title-run',
    title: 'Modern title run',
    period: '2020s',
    manager: 'Stephen Bradley',
    leagueFinish: 'Collection',
    cups: 'Collection',
    europe: 'Multiple European campaigns',
    topScorer: 'By season',
    stadium: 'Tallaght Stadium',
    summary:
      'A collection page for the title-winning period from 2020 onward, intended to link every season, squad, match, and honour in one place.',
    highlights: [
      'Rovers won four consecutive league titles from 2020 to 2023.',
      'The period included regular European qualification.',
      'This record should become an index for season-by-season detail pages.',
    ],
    linkedMatchIds: ['2020-ac-milan'],
    tags: ['Collection', 'League titles', 'Modern era'],
    sourceLinks: [
      {
        label: 'League of Ireland Premier Division history',
        url: 'https://en.wikipedia.org/wiki/League_of_Ireland_Premier_Division',
      },
      {
        label: 'Shamrock Rovers club page',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
]

export const seasonPeriods = ['All', '2010s', '2020s']
