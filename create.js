/* eslint-disable import/no-extraneous-dependencies */
const stringComparison = require('string-comparison');
const fs = require('fs-extra');
const qs = require('qs');

// use by cosine
const cos = stringComparison.cosine;

/* eslint-disable no-underscore-dangle */
const json = require('./kibana-logs-deps.json');

const { hits } = json.hits;

const threads = hits.map((h) => ({ api: h._source.kubernetes.name, url: h._source.path || '', qs: h._source?.query_string || '' }));

// const threads = hits.map((h) => `${h._source.kubernetes.name} | ${h._source?.thread_name?.split(' - ')[1].replace('GET ', '')}`);

const unique = [...new Set(threads.map((t) => JSON.stringify(t)))].sort();

const checkMatch = unique.map((u, i) => {
//   console.log(u, ((i + 1) < unique.length) ? unique[i + 1] : 'x');

  //   console.log(cos.similarity(u, ((i + 1) < unique.length) ? unique[i + 1] : 'x'));
  if (cos.similarity(u, ((i + 1) < unique.length) ? unique[i + 1] : 'x') < 0.85) {
    return u;
  }

  return false;
});

const cleanList = checkMatch.filter(Boolean).filter((f) => !f.includes('undefined'));
// console.log(JSON.stringify(cleanList, null, 2));

const writeData = cleanList.map((thre) => {
  const threa = JSON.parse(thre);
  const data = `group('${threa?.url.slice(0, 150)}', () => {
        const url = new URL('${threa.url}');

        ${Object.entries(qs.parse(threa.qs)).map((t) => {
    const [k, v] = t;
    return `url.searchParams.append('${k}', '${v}');`;
  }).join('\n')}

        const response = http.get(url.toString());
        sleep(Math.random() * 5);
        check(response, {
          'is status 200': (r) => r.status === 200,
        });
      }); \n`;
  return data;
});

console.log(writeData.length);

fs.outputFileSync('./generated-tests.js', writeData.join('\n'));
