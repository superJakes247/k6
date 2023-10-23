/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { check, group, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    documentStoreRampUp: {
      executor: 'ramping-vus',
      startVUs: 10,
      stages: [
        { duration: '1m', target: 40 },
        { duration: '1m', target: 100 },
      ],
      gracefulRampDown: '3s',
    },
  },
};

const dataFile = new SharedArray('filesInMongoOnly', (() => JSON.parse(open('./files-in-mongo-only.json'))));

export default function test() {
  group('api-document-store-go | get document file stored in Mongo', () => {
    const varDoc = randomIntBetween(1, 2000);

    const url = `https://api.uat.gray.net/document-store/documents/document/${dataFile[varDoc].documentid}`;

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
