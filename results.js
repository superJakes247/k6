/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
const fs = require('fs-extra');
const percentile = require('percentile');
const { table } = require('table');
const chalk = require('chalk');

chalk.enabled = true;
chalk.level = 3;

const json = fs.readFileSync('./test_results.json', 'utf-8');
const clean = json.split('\n').slice(0, -1);

const arrayJson = clean.map((m) => JSON.parse(m)).filter((f) => f.type === 'Point' && f.metric === 'http_req_duration' && f.data.tags.expected_response === 'true').map((d) => ({
  url: d.data.tags.url, value: d.data.value, time: d.data.time, scenario: d.data.tags.scenario, testRun: d.data.tags.run,
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
    1: { width: 90 },
    2: { alignment: 'center' },
    3: { alignment: 'center' },
    4: { alignment: 'center' },
    5: { alignment: 'center' },
    6: { alignment: 'center' },
  },
};

const count = uniqueScenarios.map((scenario) => uniqueURLs.map((url) => arrayJson.filter((aj) => aj.url === url && aj.scenario === scenario).length));

function minMax(items) {
  return items.reduce((acc, val) => {
    acc[0] = (acc[0] === undefined || val.time < acc[0]) ? val.time : acc[0];
    acc[1] = (acc[1] === undefined || val.time > acc[1]) ? val.time : acc[1];
    return acc;
  }, []);
}
const runTime = uniqueScenarios
  .map((scenario) => uniqueURLs
    .map((url) => {
      const [min, max] = minMax(arrayJson.filter((aj) => aj.url === url && aj.scenario === scenario));
      const diff = Math.abs(new Date(max) - new Date(min));
      const minutes = Math.floor((diff / 1000) / 60);
      console.log([min, max]);
      return minutes;
    }));

const resPerScenario = uniqueScenarios.map((u, i) => result[i].map((r, index) => [r[0].scenario, r[0].url, ...r.map((rr) => rr.value), JSON.stringify(count[i][index]), JSON.stringify(runTime[i][index])]));
const formattedResult = uniqueScenarios.map((u, i) => result[i].map((r) => `${r[0].scenario} | ${r[0].url} | ${r.map((rr) => rr.value).join(' | ')}`)).join('\n');

const formattedResultColoured = resPerScenario;
formattedResultColoured.map((t) => console.log(table([[
  chalk.bold.magentaBright('Scenario'),
  chalk.bold.magentaBright('URL'),
  chalk.bold.magentaBright('Min (ms)'),
  chalk.bold.magentaBright('Max (ms)'),
  chalk.bold.magentaBright('90 percentile (ms)'),
  chalk.bold.magentaBright('95 percentile (ms)'),
  chalk.bold.magentaBright('Interations'),
  chalk.bold.magentaBright('Run time (minutes)'),
], ...t], config)));

fs.writeFileSync('./results.txt', formattedResult);
