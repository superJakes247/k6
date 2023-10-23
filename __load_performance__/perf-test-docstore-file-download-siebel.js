/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { check, group, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { scenario } from 'k6/execution';

const dataFile = new SharedArray('filesInMongoOnly', (() => JSON.parse(open('./files-in-siebel-only.json'))));

export const options = {
  scenarios: {
    linearTest: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: dataFile.length,
      maxDuration: '6m',
    },
  },
};

export default function test() {
  group('api-document-store-go | get document file stored in Siebel', () => {
    const { url } = dataFile[scenario.iterationInTest];

    const response = http.get(url);
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: ' ', enableColors: true }), // Show the text summary to stdout...
  };
}
