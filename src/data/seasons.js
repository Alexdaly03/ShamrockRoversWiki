import { heritageSeasons } from './heritageArchive.js'

const curatedSeasons = [
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
  {
    id: '1922-23-season',
    title: '1922-23 season',
    period: '1920s',
    manager: 'Selection committee era',
    leagueFinish: 'League of Ireland champions',
    cups: 'FAI Cup second round',
    europe: 'European competition not established',
    topScorer: 'Bob Fullam (27 league goals)',
    stadium: 'Early grounds era',
    summary:
      'Rovers won the league at the first attempt after election to the League of Ireland, scoring 77 goals in 22 matches.',
    highlights: [
      'Finished first with 18 wins, three draws, and one defeat.',
      'Scored 77 league goals and conceded 19.',
      'Bob Fullam set the club record of 27 league goals in a season.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'First league season', 'Bob Fullam'],
    sourceLinks: [
      {
        label: 'List of Shamrock Rovers seasons',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._seasons',
      },
    ],
  },
  {
    id: '1956-57-season',
    title: '1956-57 season',
    period: '1950s',
    manager: 'Paddy Coad',
    leagueFinish: 'League of Ireland champions',
    cups: 'FAI Cup runners-up; Shield winners',
    europe: 'Qualified for the European Cup',
    topScorer: 'Tommy Hamilton (15 league goals)',
    stadium: 'Glenmalure Park',
    summary:
      "A championship season for Coad's Colts that led directly to the club becoming Ireland's first European Cup entrant.",
    highlights: [
      'Won the eighth League of Ireland title.',
      'Won the League of Ireland Shield.',
      'Qualified for the 1957-58 European Cup.',
      'Lost only once in the 22-match league campaign.',
    ],
    linkedMatchIds: ['1957-manchester-united-home'],
    tags: ['League title', "Coad's Colts", 'Europe'],
    sourceLinks: [
      {
        label: 'List of Shamrock Rovers seasons',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._seasons',
      },
      {
        label: '1956-57 League of Ireland',
        url: 'https://en.wikipedia.org/wiki/1956%E2%80%9357_League_of_Ireland',
      },
    ],
  },
  {
    id: '1963-64-season',
    title: '1963-64 season',
    period: '1960s',
    manager: 'Sean Thomas / Liam Tuohy era',
    leagueFinish: 'League of Ireland champions',
    cups: 'FAI Cup winners; Shield winners',
    europe: 'European qualification',
    topScorer: 'Eddie Bailham (18 league goals)',
    stadium: 'Glenmalure Park',
    summary:
      'A domestic trophy-rich season that opened the celebrated run of six consecutive FAI Cup wins.',
    highlights: [
      'Won the League of Ireland title.',
      'Won the 1964 FAI Cup.',
      'Won the League of Ireland Shield.',
      'Began the Six in a Row FAI Cup sequence.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'FAI Cup', 'Six in a Row'],
    sourceLinks: [
      {
        label: 'Rovers honours and records',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
      {
        label: 'League top scorers',
        url: 'https://en.wikipedia.org/wiki/List_of_League_of_Ireland_top_scorers',
      },
    ],
  },
  {
    id: '1983-84-season',
    title: '1983-84 season',
    period: '1980s',
    manager: 'Jim McLaughlin',
    leagueFinish: 'League of Ireland champions',
    cups: 'Domestic cup campaigns',
    europe: 'Qualified for the European Cup',
    topScorer: 'Research needed',
    stadium: 'Glenmalure Park',
    summary:
      'The first championship of the famous Four in a Row team assembled under Jim McLaughlin.',
    highlights: [
      'Won the first of four consecutive league titles.',
      'Restored Rovers to the top of Irish league football.',
      'Established the core of the dominant mid-1980s side.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'Four in a Row', 'Jim McLaughlin'],
    sourceLinks: [
      {
        label: 'Official club history',
        url: 'https://www.shamrockrovers.ie/history/',
      },
    ],
  },
  {
    id: '1986-87-season',
    title: '1986-87 season',
    period: '1980s',
    manager: 'Dermot Keely',
    leagueFinish: 'League of Ireland champions',
    cups: 'FAI Cup winners; League Cup runners-up',
    europe: 'European Cup first round',
    topScorer: 'Mick Byrne (12 league goals)',
    stadium: 'Glenmalure Park',
    summary:
      'The fourth straight league title and third straight double, achieved in the final full season at Milltown.',
    highlights: [
      'Won the fourth consecutive league championship.',
      'Beat Dundalk 3-0 in the FAI Cup final.',
      'Finished the league with 18 wins from 22 matches.',
      'Closed one of the greatest eras in Irish club football.',
    ],
    linkedMatchIds: ['1987-fai-cup-final-dundalk', '1986-manchester-united-testimonial'],
    tags: ['League title', 'FAI Cup', 'Four in a Row'],
    sourceLinks: [
      {
        label: '1986-87 Heritage Trust archive',
        url: 'https://heritage.shamrockrovers.ie/index.php/Domestic/Season?id=1986-87',
      },
      {
        label: 'List of Shamrock Rovers seasons',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._seasons',
      },
    ],
  },
  {
    id: '1993-94-season',
    title: '1993-94 season',
    period: '1990s',
    manager: 'Ray Treacy',
    leagueFinish: 'League of Ireland champions',
    cups: 'FAI Cup first round',
    europe: 'Did not qualify',
    topScorer: 'Stephen Geoghegan (23 league goals)',
    stadium: 'RDS Arena',
    summary:
      'Rovers won their first league championship since leaving Glenmalure Park, powered by Stephen Geoghegan goals.',
    highlights: [
      'Won the league with 66 points from 32 matches.',
      'Scored 62 league goals.',
      'Stephen Geoghegan scored 23 league goals.',
      'Delivered a major success during the homeless years.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'RDS Arena', 'Stephen Geoghegan'],
    sourceLinks: [
      {
        label: 'List of Shamrock Rovers seasons',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._seasons',
      },
    ],
  },
  {
    id: '2006-season',
    title: '2006 season',
    period: '2000s',
    manager: 'Pat Scully',
    leagueFinish: 'First Division champions',
    cups: 'Domestic cup campaigns',
    europe: 'Did not qualify',
    topScorer: 'Research needed',
    stadium: 'Tolka Park',
    summary:
      'The supporter-owned club won promotion at the first attempt after the financial crisis and relegation of 2005.',
    highlights: [
      'Won the League of Ireland First Division.',
      'Returned immediately to the Premier Division.',
      'Recorded the club 1,000th league win against Kilkenny City.',
      'Marked a decisive recovery under supporter ownership.',
    ],
    linkedMatchIds: [],
    tags: ['First Division', 'Promotion', 'Supporter ownership'],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: '2009-season',
    title: '2009 season',
    period: '2000s',
    manager: "Michael O'Neill",
    leagueFinish: 'League runners-up',
    cups: 'Domestic cup campaigns',
    europe: 'Did not qualify from previous season',
    topScorer: 'Gary Twigg (24 league goals)',
    stadium: 'Tallaght Stadium',
    summary:
      'The first season in Tallaght brought a second-place league finish, European qualification, and a record scoring campaign from Gary Twigg.',
    highlights: [
      'Beat Sligo Rovers in the first match at Tallaght Stadium.',
      'Finished second in the league.',
      'Gary Twigg scored 24 league goals.',
      'Hosted Real Madrid in a summer friendly.',
    ],
    linkedMatchIds: ['2009-sligo-tallaght-opener', '2009-real-madrid-friendly'],
    tags: ['Tallaght opening', 'League runners-up', 'Gary Twigg'],
    sourceLinks: [
      {
        label: 'Official club history',
        url: 'https://www.shamrockrovers.ie/history/',
      },
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: '2010-season',
    title: '2010 season',
    period: '2010s',
    manager: "Michael O'Neill",
    leagueFinish: 'League of Ireland champions',
    cups: 'FAI Cup runners-up',
    europe: 'Europa League qualifying',
    topScorer: 'Research needed',
    stadium: 'Tallaght Stadium',
    summary:
      'Rovers won their first league title since 1994 and the first championship of the Tallaght Stadium era.',
    highlights: [
      'Won the League of Ireland title.',
      'Reached the FAI Cup final.',
      'Beat Bnei Yehuda in Europe before facing Juventus.',
      'Began a run of back-to-back championships.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'Tallaght', 'Europa League'],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: '2021-season',
    title: '2021 season',
    period: '2020s',
    manager: 'Stephen Bradley',
    leagueFinish: 'League of Ireland champions',
    cups: 'Domestic cup campaigns',
    europe: 'Conference League qualifying play-off',
    topScorer: 'Research needed',
    stadium: 'Tallaght Stadium',
    summary:
      'Rovers retained the title, finishing 16 points clear and lifting the trophy in front of a full Tallaght Stadium.',
    highlights: [
      'Won a second consecutive league title.',
      'Finished 16 points ahead of St Patricks Athletic.',
      'Reached the Conference League qualifying play-off.',
      'Continued a club-record unbeaten league run that had begun in 2019.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'Back to back', 'Tallaght'],
    sourceLinks: [
      {
        label: 'History of Shamrock Rovers',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
      {
        label: 'UEFA Shamrock Rovers facts',
        url: 'https://www.uefa.com/uefaconferenceleague/news/0278-15f65b07f84f-57fef4f5552e-1000--shamrock-rovers-facts/',
      },
    ],
  },
  {
    id: '2023-season',
    title: '2023 season',
    period: '2020s',
    manager: 'Stephen Bradley',
    leagueFinish: 'League of Ireland champions',
    cups: 'Domestic cup campaigns',
    europe: 'Conference League qualifying',
    topScorer: 'Research needed',
    stadium: 'Tallaght Stadium',
    summary:
      'The fourth consecutive championship matched the Four in a Row achievement of the 1980s.',
    highlights: [
      'Won a fourth consecutive league title.',
      'Matched the championship streak achieved from 1983-84 to 1986-87.',
      'Extended the Stephen Bradley era trophy record.',
    ],
    linkedMatchIds: [],
    tags: ['League title', 'Four in a Row', 'Modern era'],
    sourceLinks: [
      {
        label: 'Official club history',
        url: 'https://www.shamrockrovers.ie/history/',
      },
    ],
  },
  {
    id: '2024-season',
    title: '2024 season',
    period: '2020s',
    manager: 'Stephen Bradley',
    leagueFinish: 'League runners-up',
    cups: 'Domestic cup campaigns',
    europe: 'Conference League league phase and knockout qualification',
    topScorer: 'Research needed',
    stadium: 'Tallaght Stadium',
    summary:
      'A landmark European campaign took Rovers through the Conference League league phase and into UEFA knockout football for the first time.',
    highlights: [
      'Qualified for a third major UEFA league or group phase.',
      'Beat Larne 4-1 away and Borac 3-0 at home.',
      'Became the first League of Ireland club to reach a UEFA knockout phase.',
      'Finished second in the domestic league.',
    ],
    linkedMatchIds: ['2024-larne-away', '2024-borac-home', '2025-molde-away'],
    tags: ['Conference League', 'Knockout phase', 'European history'],
    sourceLinks: [
      {
        label: 'UEFA 2024-25 Conference League results',
        url: 'https://www.uefa.com/uefaconferenceleague/news/0290-1bbee2bdd4c2-dac8802cf83b-1000--conference-league-all-the-results/',
      },
      {
        label: 'List of Shamrock Rovers seasons',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._seasons',
      },
    ],
  },
]

const curatedById = new Map(curatedSeasons.map((season) => [season.id, season]))

export const seasons = [
  ...heritageSeasons.map((season) => {
    const curated = curatedById.get(season.id)
    if (!curated) return season

    return {
      ...season,
      ...curated,
      linkedMatchIds: [...new Set([...season.linkedMatchIds, ...curated.linkedMatchIds])],
      sourceLinks: [...season.sourceLinks, ...curated.sourceLinks],
    }
  }),
  ...curatedSeasons.filter((season) => !heritageSeasons.some((record) => record.id === season.id)),
]

export const seasonPeriods = [
  'All',
  ...new Set(seasons.map((season) => season.period).filter(Boolean).sort()),
]
