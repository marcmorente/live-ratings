import * as cheerio from 'cheerio';
import { writeFile } from 'node:fs/promises';
import players from '/db/players.json';

export function writeDBFile(dbName, data) {
  return writeFile(`${DB_PATH}/${dbName}.json`, JSON.stringify(data, null, 2), 'utf-8')
}

export async function scrape(url) {
  const res = await fetch(url)
  const html = await res.text()
  return cheerio.load(html)
}

export function getSortedPlayersData() {
  return players.sort((a, b) => {
    if ((a.elo + a.eloChange) < (b.elo + b.eloChange)) {
      return 1;
    } else {
      return -1;
    }
  });
}