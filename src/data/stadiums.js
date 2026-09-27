export const stadiums = [
  {
    id: 'ringsend-park',
    name: 'Ringsend Park',
    location: 'Ringsend, Dublin',
    era: 'Early years',
    status: 'Historic ground',
    capacity: 'Research needed',
    summary:
      'Rovers originated in Ringsend and played early football in the area before the move toward Milltown.',
    notes: [
      'The club name derives from Shamrock Avenue in Ringsend.',
      'Rovers were resurrected in 1914 and played at Ringsend Park.',
      'This entry should eventually collect early newspaper references and junior football records.',
    ],
    linkedMatchIds: [],
    sourceLinks: [
      {
        label: 'Shamrock Rovers early history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
      {
        label: 'History of Shamrock Rovers',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'glenmalure-park',
    name: 'Glenmalure Park',
    location: 'Milltown, Dublin',
    era: '1926-1987',
    status: 'Former home',
    capacity: 'About 20,000',
    summary:
      "Known simply as Milltown to many supporters, Glenmalure Park was Rovers' long-term home until 1987.",
    notes: [
      'Officially opened in September 1926 with a friendly against Belfast Celtic.',
      'Largest recorded attendance listed as 28,000 against Waterford in 1968.',
      'Sold in 1987 and demolished in 1990.',
    ],
    linkedMatchIds: [],
    sourceLinks: [
      {
        label: 'Glenmalure Park',
        url: 'https://en.wikipedia.org/wiki/Glenmalure_Park',
      },
      {
        label: 'Shamrock Rovers stadium history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'tolka-park',
    name: 'Tolka Park',
    location: 'Drumcondra, Dublin',
    era: 'Homeless years',
    status: 'Temporary home',
    capacity: 'Research needed',
    summary:
      'One of the grounds associated with the long period between leaving Milltown and finally moving to Tallaght.',
    notes: [
      'Rovers used multiple venues during the homeless years.',
      "Tolka Park is important to the archive as part of the club's survival period.",
      'Future research should map seasons, home fixtures, and attendances by ground.',
    ],
    linkedMatchIds: [],
    sourceLinks: [
      {
        label: 'Homeless years history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'rds-arena',
    name: 'RDS Arena',
    location: 'Ballsbridge, Dublin',
    era: 'Homeless years',
    status: 'Temporary home',
    capacity: 'Research needed',
    summary:
      'Another key venue from the years when Rovers were moving between temporary homes before Tallaght.',
    notes: [
      'The RDS belongs in the ground-by-ground archive for the homeless years.',
      'This record should eventually link to seasons and major home fixtures played there.',
    ],
    linkedMatchIds: [],
    sourceLinks: [
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'tallaght-stadium',
    name: 'Tallaght Stadium',
    location: 'Tallaght, South Dublin',
    era: '2009-present',
    status: 'Current home',
    capacity: 'Over 10,000',
    summary:
      "Rovers' modern home, opened in 2009 and central to the club's recent domestic and European success.",
    notes: [
      'First match held on 13 March 2009, a 2-1 win over Sligo Rovers.',
      'Gary Twigg scored the first Rovers goal at the stadium.',
      'A north stand opened in 2024, bringing capacity to over 10,000 seats.',
    ],
    linkedMatchIds: [
      '2011-flora-home',
      '2011-tottenham-home',
      '2020-ac-milan',
      'tallaght-home-record',
    ],
    sourceLinks: [
      {
        label: 'Tallaght Stadium',
        url: 'https://en.wikipedia.org/wiki/Tallaght_Stadium',
      },
      {
        label: 'Tallaght era club history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'dalymount-park',
    name: 'Dalymount Park',
    location: 'Phibsborough, Dublin',
    era: 'European and temporary fixtures',
    status: 'Temporary home',
    capacity: 'Varied by era',
    summary:
      "A recurring venue in Rovers history, including the club's first European Cup match in 1957.",
    notes: [
      'Hosted the European Cup match against Manchester United on 25 September 1957.',
      'Rovers also used Dalymount during parts of the homeless era.',
      'The ground is central to the Dublin derby archive.',
    ],
    linkedMatchIds: ['1957-manchester-united-home'],
    sourceLinks: [
      {
        label: 'UEFA account of the 1957 European debut',
        url: 'https://www.uefa.com/uefaeuropaleague/news/01f5-0e799ecfdc26-e5110629a309-1000--the-irish-rovers-await-a-notable-first/',
      },
    ],
  },
  {
    id: 'richmond-park',
    name: 'Richmond Park',
    location: 'Inchicore, Dublin',
    era: 'Homeless years',
    status: 'Temporary home',
    capacity: 'Research needed',
    summary:
      'One of the Dublin grounds used by Rovers during the long period without a permanent home.',
    notes: [
      'Belongs in the season-by-season map of the homeless years.',
      'Match and attendance records still need to be linked from the Heritage Trust archive.',
    ],
    linkedMatchIds: [],
    sourceLinks: [
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'morton-stadium',
    name: 'Morton Stadium',
    location: 'Santry, Dublin',
    era: 'Homeless years',
    status: 'Temporary home',
    capacity: 'Research needed',
    summary:
      'A temporary Rovers venue during the period between Milltown and Tallaght.',
    notes: [
      'Used for home fixtures during the homeless era.',
      'Future research should add exact seasons, fixtures, and crowd records.',
    ],
    linkedMatchIds: [],
    sourceLinks: [
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
  {
    id: 'whitehall-stadium',
    name: 'Whitehall Stadium',
    location: 'Whitehall, Dublin',
    era: 'Homeless years',
    status: 'Temporary home',
    capacity: 'Research needed',
    summary:
      'Another ground used during the club journey through temporary Dublin homes.',
    notes: [
      'Part of the ground-by-ground record of the homeless period.',
      'Primary match records and programme references remain to be added.',
    ],
    linkedMatchIds: [],
    sourceLinks: [
      {
        label: 'Shamrock Rovers club history',
        url: 'https://en.wikipedia.org/wiki/History_of_Shamrock_Rovers_F.C.',
      },
    ],
  },
]

export const stadiumStatuses = ['All', 'Current home', 'Former home', 'Temporary home', 'Historic ground']
