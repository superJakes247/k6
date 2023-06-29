/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export const options = {
  vus: 100,
  iterations: 1000, // run each endpoint 1000 times
};

export default function test() {
  // group('api-asset-allocation-reporting | /api/v1/asset-allocation-reporting/asset-allocation?accountNumbers=AGUT744616&asAtDate=2023-06-28&percentagePrecision', () => {
  //   const url = 'https://api.uat.gray.net/api/v1/asset-allocation-reporting/asset-allocation?accountNumbers=AGUT744616&asAtDate=2023-06-28&percentagePrecision=2';

  //   const response = http.get(url);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('api-campaign | /api/v1/campaign/campaigns?partyId=1-ZX4VIL&appKey=APP_ADVISER', () => {
    const url = 'https://api.uat.gray.net/api/v1/campaign/campaigns?partyId=1-ZX4VIL&appKey=APP_ADVISER';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('api-client-interaction | /api/v1/client-interaction/interactions/0005WaJ9DKE06MXS/contact', () => {
  //   const url = 'https://api.uat.gray.net/api/v1/client-interaction/interactions/0005WaJ9DKE06MXS/contact';

  //   const response = http.get(url);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('api-debit-order | /debit-order/debit-orders/rolled-up?accountNumber=AGRA946895%2CAGPR947801%2CAGRA948837%2CAGRA949297%2CAGRA949579%2CAGRA851461%2CAGRA', () => {
    const url = 'https://api.uat.gray.net/debit-order/debit-orders/rolled-up?accountNumber=AGRA946895%2CAGPR947801%2CAGRA948837%2CAGRA949297%2CAGRA949579%2CAGRA851461%2CAGRA271317%2CAGRA951925%2CAGPR690986%2CAGLP965017%2CAGLP566189%2CAGRA900861%2CAGRA184337%2CAGRA992763%2CAGLP993714%2CAGRA511151%2CAGRA410224%2CAGRA255967%2CAGRA1010698%2CAGLA1021955%2CAGLP1022836%2CAGRA786135%2CAGPR102980%2CAGLA672288%2CAGLP186535%2CAGRA902402%2CAGRA669966%2CAGRA162722%2CAGLP925056%2CAGLP870914%2CAGPE525435%2CAGPE652336%2CAGRA731630%2CAGRA836388%2CAGRA967625%2CAGPR758784%2CAGLP971125%2CAGLP575258%2CAGLP423895%2CAGRA991462%2CAGLA1017571%2CAGPE1018958%2CAGPR1019954%2CAGLP768390%2CAGRA890878%2CAGPE1021023%2CAGRA873067%2CAGRA433632%2CAGRA418279%2CAGLP229477%2CAGLA937967%2CAGPR939641%2CAGRA955034%2CAGLP398618%2CAGRA456867%2CAGLP958936%2CAGLP78389%2CAGRA84657%2CAGEN302491%2CAGRA998879%2CAGRA999263%2CAGLP812794%2CAGLP926266%2CAGLP138573%2CAGRA1002315%2CAGRA1004219%2CAGRA459699%2CAGRA784195%2CAGRA806740%2CAGLP1007199%2CAGLA1007631%2CAGPR1027975%2CAGRA1027206%2CAGLP1030025%2CAGRA1031463%2CAGRA675471%2CAGRA349758%2CAGLA932579%2CAGLA934824%2CAGPE225619%2CAGRA372182%2CAGRA670907%2CAGLP984305%2CAGLP222358%2CAGLP986995%2CAGRA1008798%2CAGLP1015514%2CAGRA45222%2CAGRA511278%2CAGRA234057%2CAGRA749700%2CAGPE276950%2CAGLP926468%2CAGPR931039%2CAGRA577680%2CAGRA251806%2CAGPR948958%2CAGLP798397%2CAGLP804277%2CAGRA195599';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('api-ebtax | /ebtax/request-status?agReferenceNumber=acb9de3e-74a7-4ada-b9bf-e9ec96be423a&formType=SARSROTTransfer', () => {
  //   const url = 'https://api.uat.gray.net/ebtax/request-status?agReferenceNumber=acb9de3e-74a7-4ada-b9bf-e9ec96be423a&formType=SARSROTTransfer';

  //   const response = http.get(url);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('api-fee-reporting | /api/v1/fee-reporting/fees/effective-annual-cost?investorNumber=94175&accountNumber=AGLP220781', () => {
    const url = 'https://api.uat.gray.net/api/v1/fee-reporting/fees/effective-annual-cost?investorNumber=94175&accountNumber=AGLP220781';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-instrument-access-control | /api/v1/instrument-access-control/rules/general-access?productCode=AGPR&fundCodes=MSFFC%2CMRGCFC%2CMHYB5%2CAYEF%2CCGEM', () => {
    const url = 'https://api.uat.gray.net/api/v1/instrument-access-control/rules/general-access?productCode=AGPR&fundCodes=MSFFC%2CMRGCFC%2CMHYB5%2CAYEF%2CCGEMB4%2CCGRE%2CCGSIF%2CCWEB4%2CFEPA2%2CGLOH%2CMGMF%2CRSVIB%2CSSPB2%2CSWEB2%2CSXIB1%2CTRGEC%2CCFPPA%2CBSEAF&flowType=In';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-intermediary | /api/v1/intermediary/advisers?search=michael%20shield&offset=0&limit=50', () => {
    const url = 'https://api.uat.gray.net/api/v1/intermediary/advisers?search=michael%20shield&offset=0&limit=50';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-investor | /api/v1/investor/investors?investorNumbers=698443', () => {
    const url = 'https://api.uat.gray.net/api/v1/investor/investors?investorNumbers=698443';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('api-model-delink | /model-delink/accounts?modelCode=830', () => {
  //   const url = 'https://api.uat.gray.net/model-delink/accounts?modelCode=830';

  //   const response = http.get(url);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('api-model-rebalance | /model-rebalance/accounts?modelCode=MA0769', () => {
    const url = 'https://api.uat.gray.net/model-rebalance/accounts?modelCode=MA0769';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-regulation-28-compliance | /regulation-28-compliance/AGRA999884/debit-order?includeAllocationExposures=false', () => {
    const url = 'https://api.uat.gray.net/regulation-28-compliance/AGRA999884/debit-order?includeAllocationExposures=false';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-risk-profile | /risk-profile/profiles/3135157', () => {
    const url = 'https://api.uat.gray.net/risk-profile/profiles/3135157';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-risk-profile | /risk-profile/profiles/bulk-profiles?profileIds=634911', () => {
    const url = 'https://api.uat.gray.net/risk-profile/profiles/bulk-profiles?profileIds=634911';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-siebel-eai | /api/v1/siebel-eai/server-monitor/metrics', () => {
    const url = 'https://api.uat.gray.net/api/v1/siebel-eai/server-monitor/metrics';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-transaction-history | /api/v1/transaction-history/transactions?accountNumber=AGUT36587&remarks=DIGI-145045246&fromDateParam=2023-06-22', () => {
    const url = 'https://api.uat.gray.net/api/v1/transaction-history/transactions?accountNumber=AGUT36587&remarks=DIGI-145045246&fromDateParam=2023-06-22';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('api-voice-biometrics | /voice-biometrics/people/1-99VQB2', () => {
    const url = 'https://api.uat.gray.net/voice-biometrics/people/1-99VQB2';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('api-voice-biometrics | /voice-biometrics/voice-prints?callId=55688&agentId=5940&agentExtension=5940', () => {
  //   const url = 'https://api.uat.gray.net/voice-biometrics/voice-prints?callId=55688&agentId=5940&agentExtension=5940';

  //   const response = http.get(url);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('bff-appian | /bff/v1/appian/advisers/1-O32RV1/primary-adviser-assistant', () => {
    const url = 'https://api.uat.gray.net/bff/v1/appian/advisers/1-O32RV1/primary-adviser-assistant';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('bff-appian | /bff/v1/appian/bank-deposit/deposit-search?productCodeLong=AGRA&minAmount=4275.00&maxAmount=4725.00&limit=10000', () => {
    const url = 'https://api.uat.gray.net/bff/v1/appian/bank-deposit/deposit-search?productCodeLong=AGRA&minAmount=4275.00&maxAmount=4725.00&limit=10000';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  // group('bff-appian | /bff/v1/appian/documents/serviceRequestNumber/1-3Q8S6J5', () => {
  //   const url = 'https://api.uat.gray.net/bff/v1/appian/documents/serviceRequestNumber/1-3Q8S6J5';

  //   const response = http.get(url);
  //   sleep(Math.random() * 5);
  //   check(response, {
  //     'is status 200': (r) => r.status === 200,
  //   });
  // });

  group('bff-appian | /bff/v1/appian/interactions/interaction-details?instructionNumber=8-041168200&sortResult=true&interactionType=Email-Inbound', () => {
    const url = 'https://api.uat.gray.net/bff/v1/appian/interactions/interaction-details?instructionNumber=8-041168200&sortResult=true&interactionType=Email-Inbound';

    const response = http.get(url);
    sleep(Math.random() * 5);
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  });

  group('bff-appian | /bff/v1/appian/people?taxNumbers=0194022018%2C2743298149%2C0334012010', () => {
    const url = 'https://api.uat.gray.net/bff/v1/appian/people?taxNumbers=0194022018%2C2743298149%2C0334012010';

    const response = http.get(url);
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
