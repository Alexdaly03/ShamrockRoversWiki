import { heritageMatches, heritageSeasonOptions } from './heritageArchive.js'

const curatedMatches = [
  {
    id: '2019-fai-cup-final-dundalk',
    title: 'Dundalk 1-1 Shamrock Rovers',
    competition: 'FAI Cup',
    date: '3 November 2019',
    venue: 'Aviva Stadium',
    result: 'Rovers won 4-2 on penalties',
    opponent: 'Dundalk',
    scoreline: '1-1 after extra time',
    scorers: ['Aaron McEneff'],
    attendance: '33,111',
    notes:
      'Shamrock Rovers ended a 32-year wait for the FAI Cup, beating Dundalk in a penalty shoot-out after a dramatic final at the Aviva Stadium.',
    timeline: [
      'Aaron McEneff scored an 89th-minute penalty for Rovers.',
      'Michael Duffy equalised for Dundalk in stoppage time.',
      "Alan Mannus saved in the shoot-out before Gary O'Neill scored the winning penalty.",
    ],
    tags: ['Final', 'FAI Cup', 'Aviva Stadium'],
    sourceLinks: [
      {
        label: '2019 FAI Cup final record',
        url: 'https://en.wikipedia.org/wiki/2019_FAI_Cup_final',
      },
      {
        label: '2019 FAI Cup competition record',
        url: 'https://en.wikipedia.org/wiki/2019_FAI_Cup',
      },
    ],
  },
  {
    id: '2011-partizan-away',
    title: 'Partizan 1-2 Shamrock Rovers',
    competition: 'UEFA Europa League',
    date: '25 August 2011',
    venue: 'Partizan Stadium',
    result: 'Rovers won 3-2 on aggregate',
    opponent: 'Partizan Belgrade',
    scoreline: '1-2 after extra time',
    scorers: ['Patrick Sullivan', "Stephen O'Donnell"],
    attendance: 'Research needed',
    notes:
      "One of the most famous European nights in the club's history, sending Rovers into the Europa League group stage.",
    timeline: [
      'Partizan took the lead through Vladimir Volkov.',
      'Patrick Sullivan equalised with a second-half volley.',
      "Stephen O'Donnell scored the decisive extra-time penalty.",
    ],
    tags: ['Europe', 'Europa League', 'Historic'],
    sourceLinks: [
      {
        label: '2011 Shamrock Rovers season',
        url: 'https://en.wikipedia.org/wiki/2011_Shamrock_Rovers_F.C._season',
      },
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: '2011-flora-home',
    title: 'Shamrock Rovers 1-0 Flora Tallinn',
    competition: 'UEFA Champions League',
    date: '12 July 2011',
    venue: 'Tallaght Stadium',
    result: 'Rovers won 1-0',
    opponent: 'Flora Tallinn',
    scoreline: '1-0',
    scorers: ['Chris Turner'],
    attendance: 'Research needed',
    notes:
      'Rovers won the first leg of their Champions League second qualifying round tie, their first win in a Champions League match.',
    timeline: [
      'Flora missed a penalty shortly before the winning goal.',
      'Chris Turner scored in the 34th minute.',
      'Rovers later advanced 1-0 on aggregate after a 0-0 draw in Estonia.',
    ],
    tags: ['Europe', 'Champions League', 'Tallaght'],
    sourceLinks: [
      {
        label: '2011 Shamrock Rovers season',
        url: 'https://en.wikipedia.org/wiki/2011_Shamrock_Rovers_F.C._season',
      },
      {
        label: 'Tallaght football history',
        url: 'https://en.wikipedia.org/wiki/Tallaght',
      },
    ],
  },
  {
    id: '2011-tottenham-home',
    title: 'Shamrock Rovers 0-4 Tottenham Hotspur',
    competition: 'UEFA Europa League',
    date: '15 December 2011',
    venue: 'Tallaght Stadium',
    result: 'Tottenham won 4-0',
    opponent: 'Tottenham Hotspur',
    scoreline: '0-4',
    scorers: [],
    attendance: '8,500',
    notes:
      'Rovers hosted Tottenham in their final 2011-12 Europa League group-stage match in front of a record European crowd at Tallaght Stadium.',
    timeline: [
      "The match was part of Rovers' first major European group-stage campaign.",
      'Tallaght Stadium hosted 8,500 supporters for the fixture.',
      "Tottenham won the match, but Rovers' group-stage run remained a landmark for Irish club football.",
    ],
    tags: ['Europe', 'Europa League', 'Tallaght'],
    sourceLinks: [
      {
        label: 'Tallaght Stadium match note',
        url: 'https://en.wikipedia.org/wiki/Tallaght_Stadium',
      },
      {
        label: '2011 Shamrock Rovers season',
        url: 'https://en.wikipedia.org/wiki/2011_Shamrock_Rovers_F.C._season',
      },
    ],
  },
  {
    id: '2020-ac-milan',
    title: 'Shamrock Rovers 0-2 AC Milan',
    competition: 'UEFA Europa League',
    date: '17 September 2020',
    venue: 'Tallaght Stadium',
    result: 'AC Milan won 2-0',
    opponent: 'AC Milan',
    scoreline: '0-2',
    scorers: [],
    attendance: 'Behind closed doors',
    notes:
      "A high-profile European qualifier at Tallaght Stadium, with Zlatan Ibrahimovic scoring Milan's opening goal.",
    timeline: [
      "Zlatan Ibrahimovic scored Milan's first goal.",
      'Hakan Calhanoglu also scored as Milan advanced.',
      'The match took place during the 2020-21 Europa League qualifying rounds.',
    ],
    tags: ['Europe', 'Europa League', 'Tallaght'],
    sourceLinks: [
      {
        label: 'Zlatan Ibrahimovic career note',
        url: 'https://en.wikipedia.org/wiki/Zlatan_Ibrahimovi%C4%87',
      },
      {
        label: 'Shamrock Rovers European record',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'tallaght-home-record',
    title: 'Tallaght Stadium home record',
    competition: 'All competitions',
    date: 'Modern era',
    venue: 'Tallaght Stadium',
    result: 'Collection',
    opponent: 'Various',
    scoreline: 'Collection',
    scorers: [],
    attendance: 'Various',
    notes:
      'A collection page for home results, attendances, milestones, and memorable nights since Rovers moved to Tallaght Stadium.',
    timeline: [
      'Rovers began playing at Tallaght Stadium in 2009.',
      'The ground has hosted domestic, European, and cup fixtures.',
      'Future entries can link each match to programmes, reports, scorers, and attendance notes.',
    ],
    tags: ['Home', 'Stadium', 'Collection'],
    sourceLinks: [
      {
        label: 'Tallaght Stadium',
        url: 'https://en.wikipedia.org/wiki/Tallaght_Stadium',
      },
      {
        label: 'Shamrock Rovers club page',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: '1928-bray-unknowns-record-win',
    title: 'Shamrock Rovers 11-0 Bray Unknowns',
    competition: 'League of Ireland',
    date: '28 October 1928',
    venue: 'Glenmalure Park',
    result: 'Rovers won 11-0',
    opponent: 'Bray Unknowns',
    scoreline: '11-0',
    scorers: ['Research needed'],
    attendance: 'Research needed',
    notes:
      "The largest victory listed in the club's competitive records.",
    timeline: [
      'Played during the early Milltown era.',
      'The eleven-goal margin remains the club record victory.',
      'Contemporary scorer and attendance details still need newspaper research.',
    ],
    tags: ['League', 'Club record', 'Glenmalure Park'],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: '1957-manchester-united-home',
    title: 'Shamrock Rovers 0-6 Manchester United',
    competition: 'European Cup',
    date: '25 September 1957',
    venue: 'Dalymount Park',
    result: 'Manchester United won 6-0',
    opponent: 'Manchester United',
    scoreline: '0-6',
    scorers: [],
    attendance: 'Research needed',
    notes:
      'The first European Cup match played by a club from the Republic of Ireland.',
    timeline: [
      'Rovers entered the European Champion Clubs Cup as Irish champions.',
      'The match was staged at Dalymount Park.',
      'It began a European record stretching across more than six decades.',
    ],
    tags: ['Europe', 'European Cup', 'Historic first'],
    sourceLinks: [
      {
        label: 'UEFA account of the historic first',
        url: 'https://www.uefa.com/uefaeuropaleague/news/01f5-0e799ecfdc26-e5110629a309-1000--the-irish-rovers-await-a-notable-first/',
      },
    ],
  },
  {
    id: '1966-spora-away',
    title: 'Spora Luxembourg 1-4 Shamrock Rovers',
    competition: "European Cup Winners' Cup",
    date: '5 October 1966',
    venue: 'Luxembourg',
    result: 'Rovers won 4-1',
    opponent: 'Spora Luxembourg',
    scoreline: '1-4',
    scorers: ['Research needed'],
    attendance: 'Research needed',
    notes:
      "Listed by UEFA as one of the club's biggest away wins in European competition.",
    timeline: [
      'Played in the European Cup Winners Cup.',
      'Rovers scored four times away from home.',
      'The result belongs to the celebrated 1960s European record.',
    ],
    tags: ['Europe', 'Cup Winners Cup', 'Away win'],
    sourceLinks: [
      {
        label: 'UEFA Shamrock Rovers facts',
        url: 'https://www.uefa.com/uefaconferenceleague/news/0278-15f65b07f84f-57fef4f5552e-1000--shamrock-rovers-facts/',
      },
    ],
  },
  {
    id: '1982-fram-home',
    title: 'Shamrock Rovers 4-0 Fram Reykjavik',
    competition: 'UEFA Cup',
    date: '30 September 1982',
    venue: 'Glenmalure Park',
    result: 'Rovers won 4-0',
    opponent: 'Fram Reykjavik',
    scoreline: '4-0',
    scorers: ['Research needed'],
    attendance: 'Research needed',
    notes:
      "UEFA lists the result as Rovers' biggest home win in European competition.",
    timeline: [
      'Rovers had won the away leg 3-0 in Iceland.',
      'The four-goal home win completed a commanding tie.',
      'The fixture was played at Glenmalure Park.',
    ],
    tags: ['Europe', 'UEFA Cup', 'Club record'],
    sourceLinks: [
      {
        label: 'UEFA Shamrock Rovers facts',
        url: 'https://www.uefa.com/uefaconferenceleague/news/0278-15f65b07f84f-57fef4f5552e-1000--shamrock-rovers-facts/',
      },
    ],
  },
  {
    id: '1985-sporting-away',
    title: 'Sporting CP 0-1 Shamrock Rovers',
    competition: 'European Cup',
    date: '16 August 1985',
    venue: 'Estadio Jose Alvalade',
    result: 'Rovers won 1-0',
    opponent: 'Sporting CP',
    scoreline: '0-1',
    scorers: ['Harry Kenny'],
    attendance: 'Research needed',
    notes:
      'A famous away victory in Lisbon during the Four in a Row era.',
    timeline: [
      'Harry Kenny scored the only goal.',
      'The win came against one of the best-known opponents in the European archive.',
      'The tie forms part of the 1980s European Cup record.',
    ],
    tags: ['Europe', 'European Cup', 'Away win'],
    sourceLinks: [
      {
        label: 'Rovers European records',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: '1986-manchester-united-testimonial',
    title: 'Shamrock Rovers 2-0 Manchester United',
    competition: 'Friendly',
    date: '14 August 1986',
    venue: 'Glenmalure Park',
    result: 'Rovers won 2-0',
    opponent: 'Manchester United',
    scoreline: '2-0',
    scorers: ['Michael Bennett', "Liam O'Brien"],
    attendance: 'Research needed',
    notes:
      'A Shay Brennan testimonial and one of the most notable friendly results at Milltown.',
    timeline: [
      'The match honoured former Rovers and Manchester United player Shay Brennan.',
      "Michael Bennett and Liam O'Brien scored.",
      'Rovers kept a clean sheet against the English visitors.',
    ],
    tags: ['Friendly', 'Glenmalure Park', 'Manchester United'],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: '1987-fai-cup-final-dundalk',
    title: 'Shamrock Rovers 3-0 Dundalk',
    competition: 'FAI Cup',
    date: '26 April 1987',
    venue: 'Dalymount Park',
    result: 'Rovers won 3-0',
    opponent: 'Dundalk',
    scoreline: '3-0',
    scorers: ['Research needed'],
    attendance: 'Research needed',
    notes:
      'The victory completed a third consecutive league and cup double and closed the Four in a Row era with another trophy.',
    timeline: [
      'Rovers entered the final as league champions.',
      'The 3-0 win secured a third consecutive FAI Cup.',
      'It became the last FAI Cup triumph before the 32-year wait ended in 2019.',
    ],
    tags: ['Final', 'FAI Cup', 'Four in a Row'],
    sourceLinks: [
      {
        label: 'Official club anniversary feature',
        url: 'https://www.shamrockrovers.ie/news/on-this-day-26-april-1987/',
      },
    ],
  },
  {
    id: '2009-sligo-tallaght-opener',
    title: 'Shamrock Rovers 2-1 Sligo Rovers',
    competition: 'League of Ireland',
    date: '13 March 2009',
    venue: 'Tallaght Stadium',
    result: 'Rovers won 2-1',
    opponent: 'Sligo Rovers',
    scoreline: '2-1',
    scorers: ['Gary Twigg', 'Dessie Baker'],
    attendance: 'Research needed',
    notes:
      'The first Shamrock Rovers match at Tallaght Stadium after more than two decades without a permanent home.',
    timeline: [
      'Gary Twigg scored the first Rovers goal at the stadium.',
      'Dessie Baker added the second.',
      'The win opened the modern Tallaght era.',
    ],
    tags: ['League', 'Tallaght', 'Stadium opening'],
    sourceLinks: [
      {
        label: 'Official club history',
        url: 'https://www.shamrockrovers.ie/history/',
      },
    ],
  },
  {
    id: '2009-real-madrid-friendly',
    title: 'Shamrock Rovers 0-1 Real Madrid',
    competition: 'Friendly',
    date: '20 July 2009',
    venue: 'Tallaght Stadium',
    result: 'Real Madrid won 1-0',
    opponent: 'Real Madrid',
    scoreline: '0-1',
    scorers: [],
    attendance: '10,900',
    notes:
      "A high-profile friendly in Tallaght remembered as Cristiano Ronaldo's first appearance for Real Madrid.",
    timeline: [
      'The match drew a listed attendance of 10,900.',
      'Rovers held Real Madrid scoreless until late in the game.',
      'Karim Benzema scored the only goal.',
    ],
    tags: ['Friendly', 'Tallaght', 'Real Madrid'],
    sourceLinks: [
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: '2024-larne-away',
    title: 'Larne 1-4 Shamrock Rovers',
    competition: 'UEFA Conference League',
    date: '24 October 2024',
    venue: 'Windsor Park',
    result: 'Rovers won 4-1',
    opponent: 'Larne',
    scoreline: '1-4',
    scorers: ['Research needed'],
    attendance: 'Research needed',
    notes:
      'The first away victory by a League of Ireland club in a UEFA group or league phase.',
    timeline: [
      'Rovers scored four times in Belfast.',
      'The result was a landmark for Irish clubs in UEFA league-stage football.',
      'It helped Rovers progress from the 2024-25 Conference League league phase.',
    ],
    tags: ['Europe', 'Conference League', 'Historic first'],
    sourceLinks: [
      {
        label: 'UEFA 2024-25 league phase results',
        url: 'https://www.uefa.com/uefaconferenceleague/news/0291-1bd1f56d94be-427c66cf03b0-1000--conference-league-league-phase-results-by-team/',
      },
    ],
  },
  {
    id: '2024-borac-home',
    title: 'Shamrock Rovers 3-0 Borac',
    competition: 'UEFA Conference League',
    date: '12 December 2024',
    venue: 'Tallaght Stadium',
    result: 'Rovers won 3-0',
    opponent: 'Borac Banja Luka',
    scoreline: '3-0',
    scorers: ['Research needed'],
    attendance: 'Research needed',
    notes:
      'A decisive league-phase win that confirmed Rovers as the first League of Ireland club to reach a UEFA knockout phase.',
    timeline: [
      'Rovers won by three goals at Tallaght Stadium.',
      'The result secured progress from the Conference League league phase.',
      'It created another first for a League of Ireland club.',
    ],
    tags: ['Europe', 'Conference League', 'Knockout qualification'],
    sourceLinks: [
      {
        label: 'UEFA 2024-25 Conference League results',
        url: 'https://www.uefa.com/uefaconferenceleague/news/0290-1bbee2bdd4c2-dac8802cf83b-1000--conference-league-all-the-results/',
      },
    ],
  },
  {
    id: '2025-molde-away',
    title: 'Molde 0-1 Shamrock Rovers',
    competition: 'UEFA Conference League',
    date: '13 February 2025',
    venue: 'Aker Stadion',
    result: 'Rovers won 1-0',
    opponent: 'Molde',
    scoreline: '0-1',
    scorers: ['Research needed'],
    attendance: 'Research needed',
    notes:
      'Rovers won the away leg of their first UEFA knockout tie before the contest was decided on penalties in Tallaght.',
    timeline: [
      'The match was the first leg of the knockout phase play-off.',
      'Rovers carried a one-goal lead back to Dublin.',
      'Molde eventually advanced 5-4 on penalties after a 1-1 aggregate draw.',
    ],
    tags: ['Europe', 'Conference League', 'Knockout phase'],
    sourceLinks: [
      {
        label: 'UEFA 2024-25 Conference League results',
        url: 'https://www.uefa.com/uefaconferenceleague/news/0290-1bbee2bdd4c2-dac8802cf83b-1000--conference-league-all-the-results/',
      },
    ],
  },
]

const featuredMatches = curatedMatches.map((match) => ({
  ...match,
  season: 'Featured',
  sortDate: match.date.match(/\d{4}/)?.[0] ?? '0000',
}))

export const matches = [...featuredMatches, ...heritageMatches]

export const matchSeasonOptions = ['Featured', ...heritageSeasonOptions]

export const matchCompetitions = [
  'All',
  ...new Set(matches.map((match) => match.competition).filter((competition) => competition !== 'All competitions')),
]
