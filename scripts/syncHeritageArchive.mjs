import { writeFile } from 'node:fs/promises'

const baseUrl = 'https://heritage.shamrockrovers.ie'
const indexUrl = `${baseUrl}/index.php/Domestic/Index`
const outputUrl = new URL('../src/data/heritageArchive.js', import.meta.url)

const decode = (value = '') =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&#39;', "'")
    .replaceAll('&#039;', "'")
    .replaceAll('&#x27;', "'")
    .replaceAll('&quot;', '"')
    .replaceAll('&ndash;', '-')
    .replaceAll('&mdash;', '-')
    .replaceAll('&nbsp;', ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const normaliseCompetition = (value) => {
  const names = {
    League: 'League of Ireland',
    'F.A.I. Cup': 'FAI Cup',
    Shield: 'League of Ireland Shield',
    'League Cup': 'League of Ireland Cup',
    "L.F.A. President's Cup": "LFA President's Cup",
    'Leinster Senior Cup': 'Leinster Senior Cup',
    'Dublin City Cup': 'Dublin City Cup',
    'Top Four': 'Top Four Cup',
    Friendly: 'Friendly',
    Testimonial: 'Testimonial',
  }

  return names[value] ?? value
}

const teamAcronyms = new Set(['AC', 'AFC', 'AIK', 'APOEL', 'AS', 'AZ', 'CSKA', 'FC', 'FK', 'HJK', 'IFK', 'KR', 'OGC', 'PAOK', 'PSV', 'RUC', 'SK', 'UCD', 'YMCA'])

const formatTeamName = (name) => {
  if (name !== name.toUpperCase()) return name

  return name
    .split(' ')
    .map((word) => {
      const bareWord = word.replace(/[^A-Z]/g, '')
      if (teamAcronyms.has(bareWord)) return word
      return word
        .toLowerCase()
        .replace(/(^|[-'\u2019])([a-z])/g, (_, prefix, letter) => `${prefix}${letter.toUpperCase()}`)
        .replace(/(['\u2019])S$/, '$1s')
    })
    .join(' ')
}

const fullDate = (shortDate, season) => {
  const parts = shortDate.split(' ')
  const startYear = Number.parseInt(season.slice(0, 4), 10)
  const endYear = season.includes('-')
    ? Number.parseInt(`${season.slice(0, 2)}${season.slice(-2)}`, 10)
    : startYear
  const month = parts.at(-1)
  if (parts.length < 3 || !month) {
    return { label: 'Date not recorded', sort: `${endYear}-00-00` }
  }
  const year = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].includes(month) ? startYear : endYear
  const months = {
    Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June',
    Jul: 'July', Aug: 'August', Sep: 'September', Oct: 'October', Nov: 'November', Dec: 'December',
  }
  const day = parts.at(-2)
  const monthNumber = Object.keys(months).indexOf(month) + 1

  return {
    label: `${day} ${months[month]} ${year}`,
    sort: `${year}-${String(monthNumber).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
  }
}

const sortableLongDate = (date, fallbackYear) => {
  const [day, month, year] = date.split(' ')
  const monthNumbers = {
    January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
    July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
  }
  if (!day || !monthNumbers[month] || !year) return `${fallbackYear}-00-00`
  return `${year}-${String(monthNumbers[month]).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

const fetchText = async (url) => {
  const response = await fetch(url, { headers: { 'user-agent': 'ShamrockRoversWiki/1.0' } })
  if (!response.ok) throw new Error(`${response.status} ${url}`)
  return response.text()
}

const parseSeason = (html, season) => {
  const tokens = /<h2 class="euro-campaign-h">([\s\S]*?)<\/h2>|<a class="euro-match euro-r-([wdl])"\s+href="\/index\.php\/Detail\/occurrences\/(\d+)">([\s\S]*?)<\/a>/g
  const rows = []
  let competition = 'Other'
  let match

  while ((match = tokens.exec(html))) {
    if (match[1]) {
      competition = normaliseCompetition(
        decode(match[1].match(/class="euro-campaign-season"[^>]*>([\s\S]*?)<\/span>/)?.[1]),
      )
      continue
    }

    const [, , resultCode, occurrenceId, body] = match
    const shortDate = decode(body.match(/class="euro-m-date">([\s\S]*?)<\/span>/)?.[1])
    const teamBlock = body.match(/class="euro-m-teams">([\s\S]*?)<\/span>\s*<span class="euro-m-meta">/)?.[1] ?? ''
    const teams = [...teamBlock.matchAll(/<span class="(?:euro-us)?">([^<]+)<\/span>/g)]
      .map((item) => formatTeamName(decode(item[1])))
    const score = decode(body.match(/class="euro-m-score">([^<]+)<\/span>/)?.[1])
    const homeAway = decode(body.match(/class="euro-m-ha">([^<]+)<\/span>/)?.[1])
    const venue = decode(body.match(/class="euro-m-ha">[^<]+<\/span>\s*<span>([\s\S]*?)<\/span>/)?.[1])
    const scorers = decode(body.match(/class="euro-m-scorers">([\s\S]*?)<\/span>/)?.[1])
    const opponent = teams.find((team) => team !== 'Shamrock Rovers') ?? 'Unknown opponent'
    const date = fullDate(shortDate, season)
    const result = resultCode === 'w' ? 'Win' : resultCode === 'd' ? 'Draw' : 'Defeat'

    rows.push([
      occurrenceId, season, competition, date.label, date.sort, teams[0] ?? 'Shamrock Rovers',
      teams[1] ?? opponent, opponent, homeAway, score, result, venue || 'Venue not recorded', scorers, '',
    ])
  }

  return rows
}

const indexHtml = await fetchText(indexUrl)
const seasons = [
  ...new Set(
    [...indexHtml.matchAll(/Domestic\/Season\?id=([^"&]+)/g)].map((match) => decodeURIComponent(match[1])),
  ),
]

const allRows = []
for (let index = 0; index < seasons.length; index += 8) {
  const batch = seasons.slice(index, index + 8)
  const pages = await Promise.all(
    batch.map(async (season) => {
      const url = `${baseUrl}/index.php/Domestic/Season?id=${encodeURIComponent(season)}`
      return parseSeason(await fetchText(url), season)
    }),
  )
  allRows.push(...pages.flat())
  console.log(`Fetched ${Math.min(index + batch.length, seasons.length)}/${seasons.length} seasons`)
}

const europeanHtml = await fetchText(`${baseUrl}/index.php/Europe/Browse`)
const europeanTokens = /<h2 class="euro-campaign-h">([\s\S]*?)<\/h2>|<a class="euro-match euro-r-([wdl])"\s+href="\/index\.php\/Detail\/occurrences\/(\d+)">([\s\S]*?)<\/a>/g
let europeanSeason = ''
let europeanCompetition = ''
let europeanMatch

while ((europeanMatch = europeanTokens.exec(europeanHtml))) {
  if (europeanMatch[1]) {
    const campaign = europeanMatch[1]
    const campaignSeason = decode(campaign.match(/class="euro-campaign-season"[^>]*>([\s\S]*?)<\/span>/)?.[1])
    const startYear = Number.parseInt(campaignSeason.slice(0, 4), 10)
    europeanSeason = startYear >= 2003 ? String(startYear) : campaignSeason.replace('/', '-')
    europeanCompetition = decode(campaign.match(/class="euro-campaign-comp"[^>]*>([\s\S]*?)<\/span>/)?.[1])
    continue
  }

  const [, , resultCode, occurrenceId, body] = europeanMatch
  const date = decode(body.match(/class="euro-m-date">([\s\S]*?)<\/span>/)?.[1])
  const sortDate = sortableLongDate(date, europeanSeason)
  const teamBlock = body.match(/class="euro-m-teams">([\s\S]*?)<\/span>\s*<span class="euro-m-meta">/)?.[1] ?? ''
  const teams = [...teamBlock.matchAll(/<span class="(?:euro-us)?">([^<]+)<\/span>/g)]
    .map((item) => formatTeamName(decode(item[1])))
  const score = decode(body.match(/class="euro-m-score">([^<]+)<\/span>/)?.[1])
  const homeAway = decode(body.match(/class="euro-m-ha">([^<]+)<\/span>/)?.[1])
  const venue = decode(body.match(/class="euro-m-venue[^>]*>([\s\S]*?)<\/span>/)?.[1])
  const attendance = decode(body.match(/class="euro-m-att">([\s\S]*?)<\/span>/)?.[1])
  const opponent = teams.find((team) => team !== 'Shamrock Rovers') ?? 'Unknown opponent'
  const result = resultCode === 'w' ? 'Win' : resultCode === 'd' ? 'Draw' : 'Defeat'

  allRows.push([
    occurrenceId, europeanSeason, europeanCompetition, date, sortDate, teams[0] ?? 'Shamrock Rovers',
    teams[1] ?? opponent, opponent, homeAway, score, result, venue || 'Venue not recorded', '', attendance,
  ])
}

console.log(`Added ${allRows.length - allRows.filter((row) => !row[13]).length} European attendance records`)

const source = `// Generated from the Shamrock Rovers Heritage Trust archive. Run npm run sync:heritage to refresh.\nconst rows = ${JSON.stringify(allRows)}\n\nconst seasonOrder = ${JSON.stringify(seasons)}\n\nexport const heritageMatches = rows.map(([occurrenceId, season, competition, date, sortDate, homeTeam, awayTeam, opponent, homeAway, scoreline, outcome, venue, scorerText, attendanceText]) => ({\n  id: \`heritage-\${occurrenceId}\`,\n  title: \`\${homeTeam} \${scoreline} \${awayTeam}\`,\n  season, competition, date, sortDate, venue,\n  result: \`\${outcome}: \${scoreline}\`,\n  opponent, homeAway, scoreline,\n  scorers: scorerText ? scorerText.split(', ') : [],\n  attendance: attendanceText || 'Not recorded',\n  notes: \`\${competition} match from the \${season} season.\`,\n  timeline: [],\n  tags: [season, competition, homeAway === 'H' ? 'Home' : homeAway === 'A' ? 'Away' : 'Neutral'],\n  sourceLinks: [\n    { label: 'Heritage Trust match record', url: \`https://heritage.shamrockrovers.ie/index.php/Detail/occurrences/\${occurrenceId}\` },\n    { label: \`\${season} season archive\`, url: \`https://heritage.shamrockrovers.ie/index.php/Domestic/Season?id=\${encodeURIComponent(season)}\` },\n  ],\n}))\n\nconst seasonMatches = heritageMatches.reduce((groups, match) => {\n  const group = groups.get(match.season) ?? []\n  group.push(match)\n  groups.set(match.season, group)\n  return groups\n}, new Map())\n\nexport const heritageSeasons = seasonOrder.map((season) => {\n  const matches = seasonMatches.get(season) ?? []\n  const wins = matches.filter((match) => match.result.startsWith('Win')).length\n  const draws = matches.filter((match) => match.result.startsWith('Draw')).length\n  const defeats = matches.length - wins - draws\n  const competitions = [...new Set(matches.map((match) => match.competition))]\n  const startYear = Number.parseInt(season.slice(0, 4), 10)\n  const decade = \`\${Math.floor(startYear / 10) * 10}s\`\n\n  return {\n    id: \`\${season}-season\`, title: \`\${season} season\`, period: decade,\n    manager: 'See individual match and club records', leagueFinish: 'Complete match record',\n    cups: competitions.filter((competition) => competition !== 'League of Ireland').join(', ') || 'No cup fixtures recorded',\n    europe: competitions.filter((competition) => /European|UEFA|Fairs Cup|Champions League|Conference League/.test(competition)).join(', ') || 'No European fixtures',\n    topScorer: 'See season match scorers', stadium: 'See individual match venues',\n    summary: \`\${matches.length} recorded matches: \${wins} wins, \${draws} draws, and \${defeats} defeats across \${competitions.length} competitions.\`,\n    highlights: [\`\${matches.length} matches recorded.\`, \`Record: W\${wins} D\${draws} L\${defeats}.\`, ...competitions],\n    linkedMatchIds: matches.map((match) => match.id), tags: [season, decade, ...competitions],\n    sourceLinks: [{ label: 'Official Heritage Trust season archive', url: \`https://heritage.shamrockrovers.ie/index.php/Domestic/Season?id=\${encodeURIComponent(season)}\` }],\n  }\n})\n\nexport const heritageSeasonOptions = seasonOrder\n`

await writeFile(outputUrl, source)
console.log(`Wrote ${allRows.length} matches across ${seasons.length} seasons`)
