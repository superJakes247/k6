/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const fs = require('fs-extra');
const percentile = require('percentile');

const json = fs.readFileSync('./test_results.json', 'utf-8');
const clean = json.split('\n').slice(0, -1);

const arrayJson = clean.map((m) => JSON.parse(m)).filter((f) => f.type === 'Point' && f.metric === 'http_req_duration' && f.data.tags.expected_response === 'true').map((d) => ({
  url: d.data.tags.url, value: d.data.value,
}));

const uniqueURLs = [...new Set(arrayJson.map((a) => a.url))];

const result = uniqueURLs.map((url) => percentile(
  [0, 100, 90, 95],
  arrayJson.filter((aj) => aj.url === url),
  // function to extract a value from an object
  (item) => item.value,
));

const formattedResultColoured = result.map((r) => `${r[0].url} | \x1b[93m${r.map((rr) => rr.value).join(' | ')} \x1b[0m`).join('\n');
const formattedResult = result.map((r) => `${r[0].url} | ${r.map((rr) => rr.value).join(' | ')}`).join('\n');
console.log(`\x1b[33mURL | Min | Max | 90 percentile | 95 percentile | Average\x1b[0m \n${formattedResultColoured}`);

fs.writeFileSync('./results.txt', formattedResult);
