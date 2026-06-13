export const timelineEvents = [
  {
    id: 'foundation',
    year: '1899',
    title: 'Earliest known club reference',
    category: 'Foundation',
    summary:
      'Research by the Shamrock Rovers Heritage Trust found an Evening Herald report from April 1899, establishing that the club existed by that date.',
    links: [],
    sourceLinks: [
      {
        label: 'Shamrock Rovers history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'first-senior-league-title',
    year: '1922-23',
    title: 'First League of Ireland title',
    category: 'Honours',
    summary:
      'Rovers won the League of Ireland for the first time in the 1922-23 season, beginning a long record in the national league.',
    links: [{ label: 'League of Ireland honour', type: 'honours', id: 'league-of-ireland' }],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: 'hoops-kit',
    year: '1927',
    title: 'Green and white hoops adopted',
    category: 'Identity',
    summary:
      'The club adopted the green and white hooped strip, which became one of the most recognisable identities in Irish football.',
    links: [],
    sourceLinks: [
      {
        label: 'Shamrock Rovers club colours',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'coads-colts',
    year: '1949-1960',
    title: "Coad's Colts",
    category: 'Era',
    summary:
      "Paddy Coad's youth-focused side became one of the defining teams in Irish football, winning league and cup honours with a technical passing style.",
    links: [
      { label: 'Paddy Coad', type: 'players', id: 'paddy-coad' },
      { label: 'Paddy Ambrose', type: 'players', id: 'paddy-ambrose' },
    ],
    sourceLinks: [
      {
        label: "Coad's Colts history",
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'six-in-a-row',
    year: '1964-1969',
    title: 'Six in a Row',
    category: 'Honours',
    summary:
      'Rovers won six consecutive FAI Cups, creating one of the great cup records in Irish football history.',
    links: [
      { label: 'FAI Cup honour', type: 'honours', id: 'fai-cup' },
      { label: 'Johnny Fullam', type: 'players', id: 'johnny-fullam' },
      { label: 'Liam Tuohy', type: 'players', id: 'liam-tuohy' },
    ],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: 'four-in-a-row',
    year: '1983-84 to 1986-87',
    title: 'Four league titles in a row',
    category: 'Honours',
    summary:
      'Under Jim McLaughlin, Rovers won four consecutive League of Ireland titles in the 1980s.',
    links: [{ label: 'League of Ireland honour', type: 'honours', id: 'league-of-ireland' }],
    sourceLinks: [
      {
        label: 'Four in a row history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'tallaght-stadium',
    year: '2009',
    title: 'Tallaght Stadium era begins',
    category: 'Stadium',
    summary:
      'After the long road to Tallaght, Rovers began playing at Tallaght Stadium, giving the club a permanent modern home.',
    links: [
      { label: 'Tallaght Stadium', type: 'stadiums', id: 'tallaght-stadium' },
      { label: 'Tallaght home record', type: 'matches', id: 'tallaght-home-record' },
    ],
    sourceLinks: [
      {
        label: 'Tallaght Stadium',
        url: 'https://en.wikipedia.org/wiki/Tallaght_Stadium',
      },
    ],
  },
  {
    id: 'europa-league-group-stage',
    year: '2011',
    title: 'First Irish club in a major European group stage',
    category: 'Europe',
    summary:
      'Rovers beat Partizan Belgrade in qualifying and reached the UEFA Europa League group stage.',
    links: [
      { label: '2011 season', type: 'seasons', id: '2011-season' },
      { label: 'Partizan away', type: 'matches', id: '2011-partizan-away' },
    ],
    sourceLinks: [
      {
        label: '2011 Shamrock Rovers season',
        url: 'https://en.wikipedia.org/wiki/2011_Shamrock_Rovers_F.C._season',
      },
    ],
  },
  {
    id: 'fai-cup-2019',
    year: '2019',
    title: 'FAI Cup wait ends',
    category: 'Honours',
    summary:
      'Rovers beat Dundalk on penalties in the FAI Cup final, winning the trophy for the first time since 1987.',
    links: [
      { label: '2019 season', type: 'seasons', id: '2019-season' },
      { label: '2019 FAI Cup final', type: 'matches', id: '2019-fai-cup-final-dundalk' },
    ],
    sourceLinks: [
      {
        label: '2019 FAI Cup final',
        url: 'https://en.wikipedia.org/wiki/2019_FAI_Cup_final',
      },
    ],
  },
  {
    id: 'modern-title-run',
    year: '2020-2025',
    title: 'Modern title run',
    category: 'Era',
    summary:
      'The Stephen Bradley era brought repeated league titles, European group-stage football, and another FAI Cup win.',
    links: [
      { label: 'Modern title run', type: 'seasons', id: 'modern-title-run' },
      { label: 'League of Ireland honour', type: 'honours', id: 'league-of-ireland' },
    ],
    sourceLinks: [
      {
        label: 'Shamrock Rovers honours',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
]

export const timelineCategories = ['All', 'Foundation', 'Identity', 'Era', 'Honours', 'Stadium', 'Europe']
