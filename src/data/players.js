import { currentSquadPlayers } from './currentSquad.js'
import { historicalPlayers } from './historicalPlayers.js'

export const players = [
  {
    id: 'johnny-fullam',
    name: 'Johnny Fullam',
    position: 'Midfielder',
    era: '1961-1969, 1976-1979',
    appearances: '228 league apps',
    goals: '24 league goals',
    honours: ['FAI Cup', 'League of Ireland Shield', 'Six in a Row era'],
    summary:
      'A key figure in the great 1960s Rovers side who later returned for a second spell.',
    biography:
      'John Rowan Fullam joined Shamrock Rovers in 1961 after time with Preston North End. He became part of the Six in a Row cup-winning era, played in European competition, and later returned to Rovers in the late 1970s.',
    seasons: ['1961-1969', '1976-1979'],
    notableMatches: ['1960s FAI Cup finals', 'European fixtures', 'Boston Rovers 1967'],
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Johnny_Fullam.png',
    sourceLinks: [
      {
        label: 'Johnny Fullam player record',
        url: 'https://en.wikipedia.org/wiki/Johnny_Fullam',
      },
      {
        label: 'Six in a Row club history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'paddy-ambrose',
    name: 'Paddy Ambrose',
    position: 'Forward',
    era: '1949-1965',
    appearances: '211 league apps',
    goals: '109 league goals',
    honours: ['League of Ireland', 'FAI Cup', 'European appearances'],
    summary:
      "One of the club's greatest goalscorers and a central player across the Coad's Colts era.",
    biography:
      'Patrick Ambrose was a prolific forward for Shamrock Rovers and is listed with 109 league goals for the club. His honours include multiple League of Ireland and FAI Cup wins, along with European appearances.',
    seasons: ['1949-1965'],
    notableMatches: ['1950s league campaigns', 'FAI Cup finals', 'European fixtures'],
    sourceLinks: [
      {
        label: 'Paddy Ambrose player record',
        url: 'https://en.wikipedia.org/wiki/Paddy_Ambrose',
      },
      {
        label: "Coad's Colts club history",
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'paddy-coad',
    name: 'Paddy Coad',
    position: 'Forward',
    era: '1942-1960',
    appearances: 'Research needed',
    goals: '104 league goals',
    honours: ['League of Ireland', 'FAI Cup', "Coad's Colts manager"],
    summary:
      "Player-manager of Coad's Colts and one of the most important figures in Rovers history.",
    biography:
      "Paddy Coad signed for Shamrock Rovers in 1942 and later became player-manager. His Coad's Colts side won major honours in the 1950s and helped define one of the club's golden periods.",
    seasons: ['1940s', '1950s'],
    notableMatches: ['1957 European Cup debut', '1950s league campaigns', 'FAI Cup finals'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2020/04/01234019/Paddy-Coad-.jpg',
    photoAlt: 'Paddy Coad pictured during his Shamrock Rovers career',
    sourceLinks: [
      {
        label: 'Paddy Coad player record',
        url: 'https://en.wikipedia.org/wiki/Paddy_Coad',
      },
      {
        label: 'Club records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: 'liam-tuohy',
    name: 'Liam Tuohy',
    position: 'Forward',
    era: '1950s-1960s',
    appearances: 'Research needed',
    goals: 'Research needed',
    honours: ['League of Ireland', 'FAI Cup', 'Player-manager'],
    summary:
      "A major player and later player-manager during the club's 1960s cup dominance.",
    biography:
      "Liam Tuohy returned to Shamrock Rovers in 1963 and later became player-manager. He was central to the club's run of FAI Cup wins in the 1960s and also scored in European competition.",
    seasons: ['1950s', '1960s'],
    notableMatches: ['Valencia 1963', 'Bayern Munich 1966', '1960s FAI Cup finals'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2020/05/01233551/1966-Top-Four-Final.png',
    photoAlt: 'The 1966 Shamrock Rovers side featuring Liam Tuohy',
    sourceLinks: [
      {
        label: 'Liam Tuohy player record',
        url: 'https://en.wikipedia.org/wiki/Liam_Tuohy_(footballer)',
      },
      {
        label: 'Six in a Row club history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'jack-byrne',
    name: 'Jack Byrne',
    position: 'Midfielder',
    era: '2019-2020, 2022-present',
    appearances: '153 league apps',
    goals: '27 league goals',
    honours: ['League of Ireland', 'FAI Cup', "PFAI Players' Player of the Year"],
    summary:
      'A creative midfielder and one of the standout modern Rovers players.',
    biography:
      'Jack Dylan Byrne joined Shamrock Rovers in 2019, helped the club win the FAI Cup that year, and was part of multiple league-winning squads across his Rovers spells.',
    seasons: ['2019', '2020', '2022-present'],
    notableMatches: ['2019 FAI Cup final', 'European fixtures', 'League title campaigns'],
    photoUrl: 'https://widgets.shamrockrovers.ie/api/squads/photos/jack_byrne_wp',
    sourceLinks: [
      {
        label: 'Jack Byrne player record',
        url: 'https://en.wikipedia.org/wiki/Jack_Byrne_(footballer,_born_1996)',
      },
    ],
  },
  {
    id: 'roberto-lopes',
    name: 'Roberto Lopes',
    position: 'Defender',
    era: '2017-present',
    appearances: '263 league apps',
    goals: '20 league goals',
    honours: ['League of Ireland', 'FAI Cup', 'Cape Verde international'],
    summary:
      'A long-serving centre-back and Cape Verde international known to supporters as Pico.',
    biography:
      'Roberto Carlos Lopes joined Shamrock Rovers from Bohemians in 2017. He has become a senior defensive figure for the club and represents Cape Verde internationally.',
    seasons: ['2017-present'],
    notableMatches: ['European fixtures', 'League title campaigns', 'Cape Verde internationals'],
    photoUrl: 'https://widgets.shamrockrovers.ie/api/squads/photos/roberto_lopes_wp',
    sourceLinks: [
      {
        label: 'Roberto Lopes player record',
        url: 'https://en.wikipedia.org/wiki/Roberto_Lopes_(footballer,_born_1992)',
      },
    ],
  },
  {
    id: 'graham-burke',
    name: 'Graham Burke',
    position: 'Forward',
    era: '2017-2018, 2019-present',
    appearances: '210 league apps',
    goals: '75 league goals',
    honours: ['League of Ireland', 'Republic of Ireland international', 'European goalscorer'],
    summary:
      'A prolific modern Rovers forward with important domestic and European goals.',
    biography:
      'Graham Dylan Burke first joined Shamrock Rovers in 2017, later returned on loan, and then rejoined permanently. He has represented the Republic of Ireland and is noted for his European goals for Rovers.',
    seasons: ['2017-2018', '2019-present'],
    notableMatches: ['European fixtures', 'Derby fixtures', 'League title campaigns'],
    photoUrl: 'https://widgets.shamrockrovers.ie/api/squads/photos/graham_burke_wp',
    sourceLinks: [
      {
        label: 'Graham Burke player record',
        url: 'https://en.wikipedia.org/wiki/Graham_Burke',
      },
    ],
  },
  {
    id: 'lee-grace',
    name: 'Lee Grace',
    position: 'Defender',
    era: '2017-present',
    appearances: '215 league apps',
    goals: '11 league goals',
    honours: ['League of Ireland', 'FAI Cup', 'Player of the Year'],
    summary:
      'A consistent modern-era defender and part of several successful Rovers sides.',
    biography:
      'Lee Grace joined Shamrock Rovers in 2017 after spells with Wexford and Galway United. He has become a regular defender in the modern title-winning period.',
    seasons: ['2017-present'],
    notableMatches: ['League title campaigns', 'European fixtures', 'Derby fixtures'],
    photoUrl: 'https://widgets.shamrockrovers.ie/api/squads/photos/lee_grace_wp',
    sourceLinks: [
      {
        label: 'Lee Grace player record',
        url: 'https://en.wikipedia.org/wiki/Lee_Grace',
      },
    ],
  },
  {
    id: 'rory-gaffney',
    name: 'Rory Gaffney',
    position: 'Forward',
    era: '2020-2024, 2025-present',
    appearances: '142 league apps',
    goals: '36 league goals',
    honours: ['League of Ireland', "PFAI Players' Player of the Year", 'European goalscorer'],
    summary:
      'A forward who played a major role in the modern title-winning period.',
    biography:
      'Rory Nicholas Gaffney signed for Shamrock Rovers in 2020 after leaving Salford City. He scored in European competition and was recognised with major individual awards after the 2022 season.',
    seasons: ['2020-2024', '2025-present'],
    notableMatches: ['European fixtures', '2022 league campaign', 'Tallaght Stadium fixtures'],
    photoUrl: 'https://images.shamrockrovers.ie/3283026.webp',
    photoAlt: 'Rory Gaffney in Shamrock Rovers colours',
    sourceLinks: [
      {
        label: 'Rory Gaffney player record',
        url: 'https://en.wikipedia.org/wiki/Rory_Gaffney',
      },
    ],
  },
  {
    id: 'ronan-finn',
    name: 'Ronan Finn',
    position: 'Midfielder',
    era: '2011-2014, 2017-2023',
    appearances: '292 league apps',
    goals: '46 league goals',
    honours: ['League of Ireland', 'FAI Cup', 'European group stages'],
    summary:
      'A decorated midfielder and captain across two spells with Shamrock Rovers.',
    biography:
      'Ronan Michael Finn had two spells with Shamrock Rovers and was part of the 2011 Europa League group-stage side as well as later league-winning teams.',
    seasons: ['2011-2014', '2017-2023'],
    notableMatches: ['2011 Europa League group stage', '2019 FAI Cup final', '2020-2023 title campaigns'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2026/01/24164012/IMG-20260124-WA00151.jpg',
    photoAlt: 'Ronan Finn following his appointment as Shamrock Rovers director of football',
    sourceLinks: [
      {
        label: 'Ronan Finn player record',
        url: 'https://en.wikipedia.org/wiki/Ronan_Finn',
      },
    ],
  },
  {
    id: 'gary-twigg',
    name: 'Gary Twigg',
    position: 'Forward',
    era: '2009-2012',
    appearances: 'Research needed',
    goals: '24 league goals in 2009',
    honours: ['League of Ireland', 'Setanta Sports Cup', "PFAI Players' Player of the Year"],
    summary:
      'A key goalscorer in the early Tallaght Stadium years and the 2010-2011 title sides.',
    biography:
      'Gary Twigg signed for Shamrock Rovers in 2009 and scored the first goal at Tallaght Stadium. He finished the 2009 league season as top scorer and won major individual awards.',
    seasons: ['2009', '2010', '2011', '2012'],
    notableMatches: ['First Tallaght Stadium goal', '2010 league campaign', '2011 league campaign'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2020/04/01233840/Gary-Twigg.jpg',
    photoAlt: 'Gary Twigg in Shamrock Rovers kit',
    sourceLinks: [
      {
        label: 'Gary Twigg player record',
        url: 'https://en.wikipedia.org/wiki/Gary_Twigg',
      },
    ],
  },
  {
    id: 'dylan-watts',
    name: 'Dylan Watts',
    position: 'Midfielder',
    era: '2018-present',
    appearances: '193 league apps',
    goals: '20 league goals',
    honours: ['League of Ireland', 'FAI Cup', 'Player of the Year'],
    summary:
      "A modern-era midfielder who has been part of the club's recent success.",
    biography:
      'Dylan Billy Watts joined Shamrock Rovers in 2018 after spells with UCD, Leicester City, and Bohemians. He has become a regular in the modern Rovers midfield.',
    seasons: ['2018-present'],
    notableMatches: ['League title campaigns', 'European fixtures', 'Derby fixtures'],
    photoUrl: 'https://widgets.shamrockrovers.ie/api/squads/photos/dylan_watts_wp',
    sourceLinks: [
      {
        label: 'Dylan Watts player record',
        url: 'https://en.wikipedia.org/wiki/Dylan_Watts',
      },
    ],
  },
  {
    id: 'derek-treacy',
    name: 'Derek Treacy',
    position: 'Defender',
    era: '1989-2006',
    appearances: '392 league apps',
    goals: 'Research needed',
    honours: ['League of Ireland', 'Club appearance record'],
    summary:
      "The club's record league appearance holder and a link between the RDS, Tolka Park, and early Tallaght-project eras.",
    biography:
      'Derek Treacy made a club-record 392 League of Ireland appearances for Shamrock Rovers between 1989 and 2006. His long service covered the 1993-94 title and much of the difficult homeless period.',
    seasons: ['1989-2006', '1993-94'],
    notableMatches: ['1993-94 title campaign', 'RDS era fixtures', 'Tolka Park fixtures'],
    sourceLinks: [
      {
        label: 'Official club history and records',
        url: 'https://www.shamrockrovers.ie/history/',
      },
    ],
  },
  {
    id: 'bob-fullam',
    name: 'Bob Fullam',
    position: 'Forward',
    era: '1920s-1930s',
    appearances: 'Research needed',
    goals: '92 league goals',
    honours: ['League of Ireland', 'FAI Cup', 'League goals record'],
    summary:
      'A founding-era star who scored 27 league goals in the first title-winning season.',
    biography:
      'Bob Fullam led the scoring in 1922-23 with 27 league goals, still listed as the club record for a league season. He later managed Rovers from 1942 to 1945.',
    seasons: ['1922-23', '1920s', '1930s'],
    notableMatches: ['1922-23 title campaign', 'Early FAI Cup finals'],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: 'stephen-geoghegan',
    name: 'Stephen Geoghegan',
    position: 'Forward',
    era: '1992-1996',
    appearances: 'Research needed',
    goals: '23 league goals in 1993-94',
    honours: ['League of Ireland', 'League top scorer'],
    summary:
      "The leading scorer in Rovers' 1993-94 league championship season.",
    biography:
      'Stephen Geoghegan scored 23 league goals in the 1993-94 campaign as Rovers won their first league title since leaving Milltown.',
    seasons: ['1992-1996', '1993-94'],
    notableMatches: ['1993-94 title campaign', 'RDS Arena fixtures'],
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: 'alan-mannus',
    name: 'Alan Mannus',
    position: 'Goalkeeper',
    era: '2009-2011, 2018-2023',
    appearances: 'Research needed',
    goals: '0',
    honours: ['League of Ireland', 'FAI Cup', 'Setanta Sports Cup'],
    summary:
      'A title-winning goalkeeper across two spells and a central figure in the 2011 European breakthrough.',
    biography:
      'Alan Mannus played in the early Tallaght years, the 2010 and 2011 title wins, and the Europa League group stage before returning for the modern championship run.',
    seasons: ['2009-2011', '2018-2023'],
    notableMatches: ['2011 Partizan away', '2019 FAI Cup final', 'Modern title campaigns'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2023/11/02134524/Am2update.png',
    photoAlt: 'Alan Mannus during his Shamrock Rovers career',
    sourceLinks: [
      {
        label: 'Alan Mannus European match record',
        url: 'https://heritage.shamrockrovers.ie/index.php/Europe/Browse?player=alan-mannus',
      },
    ],
  },
  {
    id: 'liam-obrien',
    name: "Liam O'Brien",
    position: 'Midfielder',
    era: '1980s',
    appearances: 'Research needed',
    goals: 'Research needed',
    honours: ['League of Ireland', 'FAI Cup', 'Republic of Ireland international'],
    summary:
      'A creative midfielder from the Four in a Row era who went on to play international football.',
    biography:
      "Liam O'Brien was part of the outstanding Rovers side of the mid-1980s and scored in the 1986 testimonial victory over Manchester United at Glenmalure Park.",
    seasons: ['1980s', 'Four in a Row'],
    notableMatches: ['Manchester United testimonial 1986', 'European Cup campaigns'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2020/04/01233756/1987.png',
    photoAlt: "Shamrock Rovers' Four in a Row squad from Liam O'Brien's era",
    sourceLinks: [
      {
        label: 'Rovers records and statistics',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  {
    id: 'mick-byrne',
    name: 'Mick Byrne',
    position: 'Forward',
    era: '1980s',
    appearances: 'Research needed',
    goals: 'Research needed',
    honours: ['League of Ireland', 'FAI Cup', 'Four in a Row'],
    summary:
      'A leading forward in the dominant four-title run of the 1980s.',
    biography:
      'Mick Byrne was a regular scorer in the Four in a Row side and finished as the leading Rovers league scorer in the 1986-87 championship season.',
    seasons: ['1983-84', '1984-85', '1985-86', '1986-87'],
    notableMatches: ['1986-87 title campaign', '1987 FAI Cup final'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2020/04/01233756/1987.png',
    photoAlt: 'The 1987 Shamrock Rovers squad featuring Mick Byrne',
    sourceLinks: [
      {
        label: '1986-87 Heritage Trust season archive',
        url: 'https://heritage.shamrockrovers.ie/index.php/Domestic/Season?id=1986-87',
      },
    ],
  },
  {
    id: 'frank-oneill',
    name: "Frank O'Neill",
    position: 'Midfielder',
    era: '1960s-1970s',
    appearances: 'Research needed',
    goals: 'Research needed',
    honours: ['FAI Cup', 'Six in a Row', 'Player-manager'],
    summary:
      'A gifted member of the Six in a Row team who later managed the club.',
    biography:
      "Frank O'Neill was part of the celebrated 1960s side and moved into management after his playing career, taking charge from 1969 to 1971.",
    seasons: ['1960s', '1969-1971'],
    notableMatches: ['Six in a Row FAI Cup finals', 'European fixtures'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2020/05/01233551/1966-Top-Four-Final.png',
    photoAlt: "Shamrock Rovers' 1966 cup-winning side featuring Frank O'Neill",
    sourceLinks: [
      {
        label: 'Shamrock Rovers manager list',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._managers',
      },
    ],
  },
  {
    id: 'harry-kenny',
    name: 'Harry Kenny',
    position: 'Defender',
    era: '1980s',
    appearances: 'Research needed',
    goals: 'Research needed',
    honours: ['League of Ireland', 'FAI Cup', 'Four in a Row'],
    summary:
      'A defender from the Four in a Row era and scorer of a famous European winner in Lisbon.',
    biography:
      'Harry Kenny was part of the dominant 1980s side and scored when Rovers beat Sporting CP 1-0 in Lisbon in August 1985.',
    seasons: ['1980s', 'Four in a Row'],
    notableMatches: ['Sporting CP away 1985', 'European Cup campaigns'],
    photoUrl:
      'https://cdn.shamrockrovers.ie/wp-content/uploads/2020/04/01233756/1987.png',
    photoAlt: 'The 1987 Shamrock Rovers squad featuring Harry Kenny',
    sourceLinks: [
      {
        label: 'Rovers European records',
        url: 'https://en.wikipedia.org/wiki/List_of_Shamrock_Rovers_F.C._records_and_statistics',
      },
    ],
  },
  ...historicalPlayers,
  ...currentSquadPlayers,
]

export const playerPositions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward']
