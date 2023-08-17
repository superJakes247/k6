/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const fs = require('fs-extra');
const percentile = require('percentile');
const { table } = require('table');

const json = fs.readFileSync('./test_results.json', 'utf-8');
const clean = json.split('\n').slice(0, -1);

const arrayJson = clean.map((m) => JSON.parse(m)).filter((f) => f.type === 'Point' && f.metric === 'http_req_duration' && f.data.tags.expected_response === 'true').map((d) => ({
  url: d.data.tags.url, value: d.data.value, scenario: d.data.tags.scenario, testRun: d.data.tags.run,
}));

const uniqueURLs = [...new Set(arrayJson.map((a) => a.url))];
const uniqueScenarios = [...new Set(arrayJson.map((a) => a.scenario))];
const result = uniqueScenarios.map((scenario) => uniqueURLs.map((url) => percentile(
  [0, 100, 90, 95],
  arrayJson.filter((aj) => aj.url === url && aj.scenario === scenario),
  // function to extract a value from an object
  (item) => item.value,
)));

const config = {
  columns: {
    0: { width: 20 },
    1: { width: 100 },
  },
};

const resPerScenario = uniqueScenarios.map((u, i) => result[i].map((r) => [r[0].scenario, r[0].url, ...r.map((rr) => rr.value)]));
const formattedResult = uniqueScenarios.map((u, i) => result[i].map((r) => `${r[0].scenario} | ${r[0].url} | ${r.map((rr) => rr.value).join(' | ')}`)).join('\n');

const formattedResultColoured = resPerScenario;
formattedResultColoured.map((t) => console.log(table([['Scenario', 'URL', 'Min', 'Max', '90 percentile ', '95 percentile'], ...t], config)));

fs.writeFileSync('./results.txt', formattedResult);
