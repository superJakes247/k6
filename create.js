/* eslint-disable import/no-extraneous-dependencies */
const stringComparison = require('string-comparison');
const fs = require('fs-extra');

// use by cosine
const cos = stringComparison.cosine;

/* eslint-disable no-underscore-dangle */
const json = require('./kibana-logs.json');

const { hits } = json.hits;

const threads = hits.map((h) => `${h._source.kubernetes.name} | ${h._source?.thread_name?.split(' - ')[1].replace('GET ', '')}`);

const unique = [...new Set(threads)].filter((f) => f !== undefined).sort();

const checkMatch = unique.map((u, i) => {
//   console.log(u, ((i + 1) < unique.length) ? unique[i + 1] : 'x');

  //   console.log(cos.similarity(u, ((i + 1) < unique.length) ? unique[i + 1] : 'x'));
  if (cos.similarity(u, ((i + 1) < unique.length) ? unique[i + 1] : 'x') < 0.75) {
    return u;
  }

  return false;
});

const cleanList = checkMatch.filter(Boolean).filter((f) => !f.includes('undefined'));
console.log(JSON.stringify(cleanList, null, 2));

const writeData = cleanList.map((url) => {
  const data = `group('${url.slice(0, 150)}', () => {
        const url = 'https://api.uat.gray.net${url.split('|')[1].replace(' ', '')}';
    
        const response = http.get(url);
        sleep(Math.random() * 5);
        check(response, {
          'is status 200': (r) => r.status === 200,
        });
      }); \n`;
  return data;
});

fs.outputFileSync('./generated-tests.js', writeData.join('\n'));
