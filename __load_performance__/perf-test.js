/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, group } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export const options = {
  stages: [
    { target: 50, duration: '10s' },
    { target: 50, duration: '40s' },
    { target: 0, duration: '10s' },
  ],

  // stages - user ramp up
  // 50 users   ______________________
  //          /|                      |\
  //         / |                      | \
  //        /  |                      |  \
  //       /   |                      |   \
  //        10s          40s           10s

  thresholds: {
    http_req_failed: ['rate < 0.0001'], // http errors should be less than 1%
    http_req_duration: ['p(90) < 800', 'p(95) < 1000'], // 90% of requests must finish within 800ms, 95% within 1000ms
  },
};

export default function test() {
  group('GET https://api.uat.gray.net/benchmark/benchmarks', () => {
    const response = http.get('https://api.uat.gray.net/benchmark/benchmarks');

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
