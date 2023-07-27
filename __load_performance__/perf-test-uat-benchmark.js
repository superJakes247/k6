/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';

export const options = {
  scenarios: {
    one_hundred_hits: {
      executor: 'shared-iterations',
      vus: 15,
      iterations: 100,
      maxDuration: '1h',
    },
  },
};

const params = {
  headers: {
    Accept: 'application/pdf',
  },
};

export default function test() {
  group('https://api.uat.gray.net/instrument/instruments', () => {
    const url = new URL('https://api.uat.gray.net/instrument/instruments');

    url.searchParams.append('codes', 'BIPF,BLTGFA,CSIB4,CSTCB,CTTB4,FEPA2,IDICH,MA0548,MA0549,MA0550,MA0551,MA0552,MHYB5,MNECD,NEIFB,NGEMB2,NICBCC,NICPC,OMGB1,PCBA2,PIPFB5,RSVIB,SBGFFA,SEQFSA,SEYB1,SGBFB2,SLAFB1,SLIB1,SPFA2,SSPB2,STRTB1,SWEB2');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/instrument/instruments/999/allocations', () => {
    const url = new URL('https://api.uat.gray.net/instrument/instruments/999/allocations');

    url.searchParams.append('effectiveDate', '2023-07-24');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/instrument/instruments/999/children', () => {
    const url = new URL('https://api.uat.gray.net/instrument/instruments/999/children');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/instrument/instruments/children', () => {
    const url = new URL('https://api.uat.gray.net/instrument/instruments/children');

    url.searchParams.append('instrumentIds', '3507,3510,3511,3512');
    url.searchParams.append('type', 'Fund');
    url.searchParams.append('effectiveDate', '2023-07-24');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('https://api.uat.gray.net/api/v1/security/authorization/model', () => {
  //   const url = new URL('https://api.uat.gray.net/api/v1/security/authorization/model');

  //   const response = http.get(url.toString());
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  // group('https://api.uat.gray.net/api/v1/tax/final-certificates/646f165a8a906206f315f203', () => {
  //   const url = new URL('https://api.uat.gray.net/api/v1/tax/final-certificates/646f165a8a906206f315f203');

  //   const response = http.get(url.toString());
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('https://api.uat.gray.net/api/v1/tax/final-certificates/allowed-values', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/tax/final-certificates/allowed-values');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/tax/provisional-certificates/allowed-values', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/tax/provisional-certificates/allowed-values');

    url.searchParams.append('accountNumbers', 'AGUT1026570');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/tax/tax-years', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/tax/tax-years');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/tax/tax-years/', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/tax/tax-years/');

    url.searchParams.append('date', '2023-07-17');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/transaction-history/transactions/reporting', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-history/transactions/reporting');

    url.searchParams.append('dateFrom', '1900-01-01');
    url.searchParams.append('dateTo', '2023-07-24');
    url.searchParams.append('sortDirection', 'asc');
    url.searchParams.append('offset', '0');
    url.searchParams.append('limit', '20');
    url.searchParams.append('accountNumber', 'AGTF712369');
    url.searchParams.append('includeReversed', 'true');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/transaction-history/transactions/reporting/price-dates', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-history/transactions/reporting/price-dates');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-up', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-up');

    url.searchParams.append('accountNumbers', 'AGUT856559');
    url.searchParams.append('excludeZeroBalanceFunds', 'true');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/account/accounts/AGUT986690', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/account/accounts/AGUT986690');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/client-interaction/interactions', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/interactions');

    url.searchParams.append('externalContactId', '1-HNCG9');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/client-interaction/service-requests', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/service-requests');

    url.searchParams.append('partyId', '1-HNCG9');
    url.searchParams.append('startDate', '2023-07-24T00:00:00');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/client-interaction/surveys/1-3JR03TZ', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/surveys/1-3JR03TZ');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('https://api.uat.gray.net/document-store/documents/document/1-3QZPBYV', () => {
  //   const url = new URL('https://api.uat.gray.net/document-store/documents/document/1-3QZPBYV');

  //   url.searchParams.append('entityType', 'serviceRequestNumber');

  //   const response = http.get(url.toString());
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  // group('https://api.uat.gray.net/document-store/tax-certs/644da59d0d7226480295ef05', () => {
  //   const url = new URL('https://api.uat.gray.net/document-store/tax-certs/644da59d0d7226480295ef05');

  //   const response = http.get(url.toString());
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('https://api.uat.gray.net/instrument/instruments', () => {
    const url = new URL('https://api.uat.gray.net/instrument/instruments');

    url.searchParams.append('codes', 'GEFF,GLOH,NISA,PGCD,PWMD,ZAGMF');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/instrument/instruments/996/children', () => {
    const url = new URL('https://api.uat.gray.net/instrument/instruments/996/children');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/organisations/1-XQK3N1', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/organisations/1-XQK3N1');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-1553UQC/related-people', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-1553UQC/related-people');

    url.searchParams.append('relationshipType', 'PVT_CLNT_CONSULT');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-1SGTXAK/related-organisations/', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-1SGTXAK/related-organisations/');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-2WX8SG', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-2WX8SG');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-3851E2L', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-3851E2L');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-3HK4CH7', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-3HK4CH7');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-3J2JN2/related-people/', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-3J2JN2/related-people/');

    url.searchParams.append('offset', '0');
    url.searchParams.append('limit', '9999');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-3KB8ZXV', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-3KB8ZXV');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/parties/1-W6ZLH2/servicing-notes', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/parties/1-W6ZLH2/servicing-notes');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/people/1-YF2QW8', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/people/1-YF2QW8');

    url.searchParams.append('includeRestricted', 'true');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/people/1-ZW2YSC/roles', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/people/1-ZW2YSC/roles');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/people/search', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/people/search');

    url.searchParams.append('searchPhrase', 'jpmonty16@gmail.com');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/siebel-eai/users', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/siebel-eai/users');

    url.searchParams.append('login', 'TUMELOMA');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/transaction-history/total-platform-market-value', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-history/total-platform-market-value');

    url.searchParams.append('investorNumber', '563403');
    url.searchParams.append('platformCode', 'OS');
    url.searchParams.append('asAtDate', '2023-03-21');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('https://wde-bff.uat.gray.net/advisers/1-XIVPXF/adviser-assistant-details', () => {
  //   const url = new URL('https://wde-bff.uat.gray.net/advisers/1-XIVPXF/adviser-assistant-details');

  //   const response = http.get(url.toString());
  //   console.log(response);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  // group('https://wde-bff.uat.gray.net/voice-biometrics/verify/64502/5214', () => {
  //   const url = new URL('https://wde-bff.uat.gray.net/voice-biometrics/verify/64502/5214');

  //   const response = http.get(url.toString());
  //   console.log(response);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('https://api.uat.gray.net/api/v1/account/accounts/AGUT69526', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/account/accounts/AGUT69526');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/report-generator/adviser/A027/adviser-fee-statement', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/report-generator/adviser/A027/adviser-fee-statement');

    url.searchParams.append('dateFrom', '2023-06-02');
    url.searchParams.append('dateTo', '2023-06-30');
    url.searchParams.append('statementType', 'Local');
    url.searchParams.append('groupingLevel', 'Account');
    url.searchParams.append('generatingEntity', 'AG-SA');

    const response = http.get(url.toString(), params);
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/adviser-reporting/upcoming-dates', () => {
    const url = new URL('https://api.uat.gray.net/adviser-reporting/upcoming-dates');

    url.searchParams.append('adviserCodes', 'D4136,D4669,D4859,D4860,D4861,D527,D7064,D7065,D9742,D9743,Z231');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/voice-biometrics/people/1-16SMCA', () => {
    const url = new URL('https://api.uat.gray.net/voice-biometrics/people/1-16SMCA');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/risk-profile/profiles/bulk-profiles', () => {
    const url = new URL('https://api.uat.gray.net/risk-profile/profiles/bulk-profiles');

    url.searchParams.append('profileIds', '733765');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/transaction-approval/summaries', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-approval/summaries');

    url.searchParams.append('submittedByContactIdentifier', '');
    url.searchParams.append('submittedForAdviserCode', 'D7535');
    url.searchParams.append('skip', '0');
    url.searchParams.append('take', '20');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/bff/v1/appian/dow-jones/profile/profile-summary', () => {
    const url = new URL('https://api.uat.gray.net/bff/v1/appian/dow-jones/profile/profile-summary');

    url.searchParams.append('firstName', 'Johanna ');
    url.searchParams.append('lastName', 'Terblanche');
    url.searchParams.append('middleNames', 'Jacoba ');
    url.searchParams.append('countriesOfInterest', 'SOUTH AFRICA');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('https://wde-bff.uat.gray.net/party/1-3EFQC8D/full-details', () => {
  //   const url = new URL('https://wde-bff.uat.gray.net/party/1-3EFQC8D/full-details');

  //   const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphY3F1ZXN2ZHciLCJleHAiOjQwNzA5MDg4MDB9.C7fLFrHKacM6baXuWO9ZZGwFjX2ykB3YCbrScUM8Bec';
  //   const requestHeaders = {
  //     headers: {
  //       Authorization: `Bearer ${apiToken}`,
  //     },
  //   };

  //   const response = http.get(url.toString(), requestHeaders);
  //   console.log(response);
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  // group('https://wde-bff.uat.gray.net/media-routing', () => {
  //   const url = new URL('https://wde-bff.uat.gray.net/media-routing');

  //   url.searchParams.append('email', 'tania.herman@southerncharter.co.za');

  //   const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphY3F1ZXN2ZHciLCJleHAiOjQwNzA5MDg4MDB9.C7fLFrHKacM6baXuWO9ZZGwFjX2ykB3YCbrScUM8Bec';
  //   const requestHeaders = {
  //     headers: {
  //       Authorization: `Bearer ${apiToken}`,
  //     },
  //   };

  //   const response = http.get(url.toString(), requestHeaders);
  //   console.log(response);
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('/document-store/accounts', () => {
    const url = new URL('https://api.uat.gray.net/document-store/accounts');

    url.searchParams.append('fileId', '64a53d07d78b6f9fce8656cf');
    url.searchParams.append('entityId', '64a53d07d78b6f9fce8656cf');
    url.searchParams.append('includeStaffConfidential', 'true');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/siebel-eai/instructions/2-036707442/transaction-summary-report-url', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/siebel-eai/instructions/2-036707442/transaction-summary-report-url');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/instrument/currencies/ZAR/rates', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/instrument/currencies/ZAR/rates');

    url.searchParams.append('startDate', '2023-07-05');
    url.searchParams.append('endDate', '2023-07-05');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/client-interaction/interaction-reasons/', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/interaction-reasons/');

    url.searchParams.append('interactionId', '0005HaJ1W5AKXRT9');
    url.searchParams.append('interactionType', 'CustomerInteraction');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/client-interaction/interaction-reasons/search', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/interaction-reasons/search');

    url.searchParams.append('instructionNumber', '3-037713066');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/client-interaction/consolidated-history', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/consolidated-history');

    url.searchParams.append('instructionNumber', '2-038504412');
    url.searchParams.append('startDate', '1970-01-01T00:00:00');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('https://api.uat.gray.net/api/v1/client-interaction/interactions/0005HaJ1W5AKWY11', () => {
  //   const url = new URL('https://api.uat.gray.net/api/v1/client-interaction/interactions/0005HaJ1W5AKWY11');

  //   const response = http.get(url.toString());
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  // group('https://api.uat.gray.net/document-store/documents/document/1-3QFNHEW', () => {
  //   const url = new URL('https://api.uat.gray.net/document-store/documents/document/1-3QFNHEW');

  //   url.searchParams.append('entityType', 'serviceRequestNumber');

  //   const response = http.get(url.toString());
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  // group('https://api.uat.gray.net/ebtax/request-status', () => {
  //   const url = new URL('https://api.uat.gray.net/ebtax/request-status');

  //   url.searchParams.append('agReferenceNumber', 'e787aef3-44fa-46cd-bb70-a60345223a85');
  //   url.searchParams.append('formType', 'SARSROTTransfer');

  //   const response = http.get(url.toString());
  //   console.log(response);
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('https://api.uat.gray.net/api/v1/investor/investors', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/investor/investors');

    url.searchParams.append('investorNumbers', '624580');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/model-delink/accounts', () => {
    const url = new URL('https://api.uat.gray.net/model-delink/accounts');

    url.searchParams.append('modelCode', 'MA0001');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/model-portfolio/models/access-overrides/vnext', () => {
    const url = new URL('https://api.uat.gray.net/model-portfolio/models/access-overrides/vnext');

    url.searchParams.append('modelCodes', 'MA0548,MA0549,MA0550,MA0551,MA0552,MA0778');
    url.searchParams.append('productCode', 'AGRA');
    url.searchParams.append('userType', 'IFA');
    url.searchParams.append('operationCode', 'NDO');
    url.searchParams.append('effectiveDate', '2023-07-06');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/organisations', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/organisations');

    url.searchParams.append('investorNumber', '65857');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/people/1-ZQ47FZ', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/people/1-ZQ47FZ');

    url.searchParams.append('includeRestricted', 'true');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/party/people/search/', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/party/people/search/');

    url.searchParams.append('searchPhrase', 'r PAUL ABRAHAMS');
    url.searchParams.append('offset', '0');
    url.searchParams.append('limit', '50');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/regulation-28-compliance/AGRA664976', () => {
    const url = new URL('https://api.uat.gray.net/regulation-28-compliance/AGRA664976');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/report-generator/investor/94448/portfolio-summary', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/report-generator/investor/94448/portfolio-summary');

    url.searchParams.append('dateFrom', '2023-03-14');
    url.searchParams.append('dateTo', '2023-04-14');
    url.searchParams.append('displayZeroBalances', 'False');
    url.searchParams.append('offshoreReportingCurrency', 'ZAR');
    url.searchParams.append('generatingEntity', 'AG-SA');

    const response = http.get(url.toString(), params);
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/report-generator/account/AGTF875230/transaction-history', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/report-generator/account/AGTF875230/transaction-history');

    url.searchParams.append('dateFrom', '2022-05-13');
    url.searchParams.append('dateTo', '2023-05-12');
    url.searchParams.append('displayZeroBalances', 'false');
    url.searchParams.append('offshoreReportingCurrency', 'ZAR');
    url.searchParams.append('displayReversedTransactions', 'false');

    const response = http.get(url.toString(), params);
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/report-generator/account/AGLA1025739/account-statement', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/report-generator/account/AGLA1025739/account-statement');

    url.searchParams.append('dateFrom', '2023-05-10');
    url.searchParams.append('dateTo', '2023-05-12');
    url.searchParams.append('displayZeroBalances', 'false');
    url.searchParams.append('offshoreReportingCurrency', 'ZAR');

    const response = http.get(url.toString(), params);
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/user-preference/user/1-9MQIBI/website-preference', () => {
    const url = new URL('https://api.uat.gray.net/user-preference/user/1-9MQIBI/website-preference');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // uat broken
  // group('https://wde-bff.uat.gray.net/party/1-3JZXQ55/sphere-of-influence', () => {
  //   const url = new URL('https://wde-bff.uat.gray.net/party/1-3JZXQ55/sphere-of-influence');

  //   url.searchParams.append('role', 'contact');

  //   const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphY3F1ZXN2ZHciLCJleHAiOjQwNzA5MDg4MDB9.C7fLFrHKacM6baXuWO9ZZGwFjX2ykB3YCbrScUM8Bec';
  //   const requestHeaders = {
  //     headers: {
  //       Authorization: `Bearer ${apiToken}`,
  //     },
  //   };

  //   const response = http.get(url.toString(), requestHeaders);
  //   console.log(response);
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('https://api.uat.gray.net/risk-profile/profiles/915783', () => {
    const url = new URL('https://api.uat.gray.net/risk-profile/profiles/915783');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/tax/provisional-certificates/687034_AGLP1002993_2023-01-01_2023-04-17_ITcLocal', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/tax/provisional-certificates/687034_AGLP1002993_2023-01-01_2023-04-17_ITcLocal');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-up', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/transaction-history/instrument-holdings/rolled-up');

    url.searchParams.append('accountNumbers', 'AGLP34765');
    url.searchParams.append('excludeZeroBalanceFunds', 'true');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/account/accounts', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/account/accounts');

    url.searchParams.append('adviserCode', 'D6276,F1548,D6505,F2663,D5020,D081,D082,D219,D1431,D2393,D4916,D5332,D5447,D4074,D6820,D4276,D4918,D4757,D4973,D5040');
    url.searchParams.append('limit', '99999');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/unprocessed-transaction/transactions', () => {
    const url = new URL('https://api.uat.gray.net/unprocessed-transaction/transactions');

    url.searchParams.append('accountNumbers', 'AGUT222703');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/api/v1/user/users/1-ZXC2T', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/user/users/1-ZXC2T');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/user-preference/user/1-ZQ47FZ/website-setting', () => {
    const url = new URL('https://api.uat.gray.net/user-preference/user/1-ZQ47FZ/website-setting');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('https://api.uat.gray.net/value-sheet/AGLA802597/annuity-income', () => {
    const url = new URL('https://api.uat.gray.net/value-sheet/AGLA802597/annuity-income');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('https://wde-bff.uat.gray.net/voice-biometrics/verify/58147/5935', () => {
  //   const url = new URL('https://wde-bff.uat.gray.net/voice-biometrics/verify/58147/5935');

  //   const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImphY3F1ZXN2ZHciLCJleHAiOjQwNzA5MDg4MDB9.C7fLFrHKacM6baXuWO9ZZGwFjX2ykB3YCbrScUM8Bec';
  //   const requestHeaders = {
  //     headers: {
  //       Authorization: `Bearer ${apiToken}`,
  //     },
  //   };

  //   const response = http.get(url.toString(), requestHeaders);
  //   sleep(Math.random() * 2);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('/api/v1/account-performance/daily-market-values', () => {
    const url = new URL('https://api.uat.gray.net/api/v1/account-performance/daily-market-values');

    url.searchParams.append('accountNumbers', 'AGLP54564');
    url.searchParams.append('benchmarkCodes', 'CPI_B');
    url.searchParams.append('fromDate', '2006-02-21');
    url.searchParams.append('toDate', '2023-06-30');
    url.searchParams.append('reportingCurrencyCode', 'ZAR');

    const response = http.get(url.toString());
    sleep(Math.random() * 2);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });
}

export function handleSummary(data) {
  return {
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
