/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';

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
    // http_req_failed: ['rate < 0.001'], // http errors should be less than 1%
    // http_req_duration: ['p(90) < 30000', 'p(95) < 60000'], // 90% of requests must finish within 800ms, 95% within 1000ms
  },
};

export default function test() {
  group('GET https://api.uat.gray.net/benchmark/benchmarks', () => {
    const response = http.get('https://api.uat.gray.net/benchmark/benchmarks');
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('GET https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-down', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-down');
    url.searchParams.append('accountNumbers', 'AGLP394232,AGLP459765,AGRA395263,AGLP281790,AGRA161647,AGLP261536,AGRA521334,AGRA408543,AGLP209578,AGRA353526,AGUT157524,AGLP459784,AGLP394090,AGLP182027,AGLP333142,AGLP264807,AGRA173869,AGRA957327,AGLP394228,AGRA588442,AGEN170835,AGLP230118,AGLP344890,AGPE177226,AGEN168939,AGLP264118,AGUT166163,AGLP333145,AGTF507700,AGLP264134,AGRA833477,AGLP459802');
    url.searchParams.append('asAtDate', '2022-03-08');
    url.searchParams.append('excludeZeroBalanceFunds', 'true');

    const response = http.get(url.toString());
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('GET https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-up', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-up');
    url.searchParams.append('accountNumbers', 'AGLP750606,AGLP764823,AGLP768000,AGLP774134,AGLP785501,AGLP793481,AGLP801746,AGLP819249,AGLP827931,AGRA878952,AGLP879091,AGPE904247,AGRA904972,AGLP923989,AGLP922236,AGRA950041,AGRA998369,AGLP448518,AGLP562351,AGLP837299,AGLP851423,AGRA863849,AGLP604068,AGLP897032,AGRA916114,AGLP936691,AGLP935858,AGLP986647,AGRA832883,AGRA830820,AGRA703333,AGRA851797,AGRA862689,AGRA410671,AGRA891434,AGLP902804,AGRA911385,AGRA928429,AGRA964476,AGLP1008122,AGLP1011017,AGLP1016262,AGRA631524');

    const response = http.get(url.toString());
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('GET https://api.uat.gray.net/api/v1/client-interaction/consolidated-history', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/consolidated-history');
    url.searchParams.append('externalContactId', '1-3L9TA27');
    url.searchParams.append('startDate', '2022-09-11T00:00:00');

    const response = http.get(url.toString());
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('GET https://api.uat.gray.net/api/v1/client-interaction/consolidated-interactions', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/consolidated-interactions');
    url.searchParams.append('instructionNumber', '2-036624151');

    const response = http.get(url.toString());
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('GET https://api.uat.gray.net/api/v1/account-performance/daily-market-values', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/account-performance/daily-market-values');
    url.searchParams.append('accountNumbers', 'AGEN265766,AGEN459491,AGEN981848,AGLP265715,AGPE769746,AGRA244039,AGRA295438,AGRA306204,AGTF733233');
    url.searchParams.append('benchmarkCodes', 'CPI_B');
    url.searchParams.append('fromDate', '2011-12-09');
    url.searchParams.append('toDate', '2023-01-09');
    url.searchParams.append('reportingCurrencyCode', 'ZAR');

    const response = http.get(url.toString());
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('GET https://api.uat.gray.net/api/v1/party/organisations', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/organisations');
    url.searchParams.append('search', 'CHURCH OF ENGLAND IN SOU');
    url.searchParams.append('role', 'GRP_RA_EMP');
    url.searchParams.append('role', 'UF_EMP');

    const response = http.get(url.toString());
    sleep(Math.random() * 5);
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
