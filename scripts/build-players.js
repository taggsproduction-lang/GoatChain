/**
 * Generates lib/players-data.json using the free MLB Stats API.
 * No downloads needed — just run: node scripts/build-players.js
 * Then rebuild: npm run build
 *
 * Fetches rosters for all 30 MLB teams for years 1990–2024.
 * ~750 API calls, runs in ~2-3 minutes.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = path.join(__dirname, "..", "lib", "players-data.json");
const START_YEAR = 1990;
const END_YEAR = 2024;
const ELITE_GAMES = 500; // flag as bookend-eligible
const CONCURRENCY = 10; // parallel requests

// All 30 MLB teams with their stable IDs
const TEAMS = [
  { id: 147, name: "New York Yankees" },
  { id: 111, name: "Boston Red Sox" },
  { id: 110, name: "Baltimore Orioles" },
  { id: 139, name: "Tampa Bay Rays" },
  { id: 141, name: "Toronto Blue Jays" },
  { id: 145, name: "Chicago White Sox" },
  { id: 114, name: "Cleveland Indians" },
  { id: 116, name: "Detroit Tigers" },
  { id: 118, name: "Kansas City Royals" },
  { id: 142, name: "Minnesota Twins" },
  { id: 117, name: "Houston Astros" },
  { id: 108, name: "Los Angeles Angels" },
  { id: 133, name: "Oakland Athletics" },
  { id: 136, name: "Seattle Mariners" },
  { id: 140, name: "Texas Rangers" },
  { id: 144, name: "Atlanta Braves" },
  { id: 146, name: "Miami Marlins" },
  { id: 121, name: "New York Mets" },
  { id: 143, name: "Philadelphia Phillies" },
  { id: 120, name: "Washington Nationals" },
  { id: 112, name: "Chicago Cubs" },
  { id: 113, name: "Cincinnati Reds" },
  { id: 158, name: "Milwaukee Brewers" },
  { id: 134, name: "Pittsburgh Pirates" },
  { id: 138, name: "St. Louis Cardinals" },
  { id: 109, name: "Arizona Diamondbacks" },
  { id: 115, name: "Colorado Rockies" },
  { id: 119, name: "Los Angeles Dodgers" },
  { id: 135, name: "San Diego Padres" },
  { id: 137, name: "San Francisco Giants" },
];

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "baseball-chain-app/1.0" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try { resolve(JSON.parse(data)); }
        catch { resolve(null); }
      });
    }).on("error", () => resolve(null));
  });
}

async function runBatch(tasks, concurrency) {
  const results = [];
  for (let i = 0; i < tasks.length; i += concurrency) {
    const batch = tasks.slice(i, i + concurrency).map((t) => t());
    results.push(...(await Promise.all(batch)));
    process.stdout.write(`\r  ${Math.min(i + concurrency, tasks.length)}/${tasks.length} requests done`);
  }
  console.log();
  return results;
}

async function main() {
  // playerID → { name, teamYears: Map<"TEAM", Set<year>> }
  const playerData = new Map();

  const years = [];
  for (let y = START_YEAR; y <= END_YEAR; y++) years.push(y);

  // Build all (team, year) fetch tasks
  const tasks = [];
  for (const team of TEAMS) {
    for (const year of years) {
      tasks.push(() =>
        fetchJSON(
          `https://statsapi.mlb.com/api/v1/teams/${team.id}/roster?season=${year}&rosterType=fullSeason`
        ).then((data) => ({ team, year, data }))
      );
    }
  }

  console.log(`Fetching ${tasks.length} rosters (${TEAMS.length} teams × ${years.length} years)...`);
  const results = await runBatch(tasks, CONCURRENCY);

  console.log("Processing roster data...");
  for (const { team, year, data } of results) {
    if (!data || !data.roster) continue;
    for (const entry of data.roster) {
      const p = entry.person;
      if (!p || !p.id || !p.fullName) continue;
      if (!playerData.has(p.id)) {
        playerData.set(p.id, { name: p.fullName, teamYears: new Map() });
      }
      const pd = playerData.get(p.id);
      if (!pd.teamYears.has(team.name)) pd.teamYears.set(team.name, new Set());
      pd.teamYears.get(team.name).add(year);
    }
  }

  console.log(`Found ${playerData.size} players. Building stints...`);

  const output = [];
  for (const [id, pd] of playerData) {
    const teams = [];
    for (const [teamName, yearSet] of pd.teamYears) {
      const sortedYears = [...yearSet].sort((a, b) => a - b);
      // Split into consecutive spans
      let start = sortedYears[0], end = sortedYears[0];
      for (let i = 1; i < sortedYears.length; i++) {
        if (sortedYears[i] <= end + 2) {
          end = sortedYears[i];
        } else {
          teams.push({ team: teamName, startYear: start, endYear: end });
          start = sortedYears[i]; end = sortedYears[i];
        }
      }
      teams.push({ team: teamName, startYear: start, endYear: end });
    }
    teams.sort((a, b) => a.startYear - b.startYear);

    // Rough career games estimate: years active × 100
    const uniqueYears = new Set([...pd.teamYears.values()].flatMap((s) => [...s]));
    const careerGames = uniqueYears.size * 100;

    output.push({
      id: String(id),
      name: pd.name,
      teams,
      careerGames,
      elite: careerGames >= ELITE_GAMES,
    });
  }

  output.sort((a, b) => b.careerGames - a.careerGames);

  console.log(`Total players: ${output.length}`);
  console.log(`Elite (bookend-eligible): ${output.filter((p) => p.elite).length}`);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 0));
  console.log(`\nDone! Written to ${OUTPUT_FILE}`);
  console.log("Now run: npm run build");
}

main().catch(console.error);
