/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { check, group, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { scenario } from 'k6/execution';

const Mainlist = JSON.parse(open('./files-pdf.json'));
const dataFile = new SharedArray('PDFFiles', function () {
  const list = JSON.parse(open('./files-pdf.json'));
  const requests = [];
  list.forEach(filePath => {
    requests.push(open(`./PDFs/${filePath.fileLocation}`, 'b'))
  });
  return requests;
});
//const fileName = open('./PDFs/Ad hoc Savings Gray Issue Feb 2007.pdf', 'b');

export const options = {
  scenarios: {
    linearTest: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 3,
      maxDuration: '6m',
    },
  },
};

export default function test() {
  
  group('api-document-store-go | get document file stored in Siebel', () => {
    
    const data = {
      filename: 'regressionTestCreateMetadataOnlyFile.pdf',
      mimeContentType: 'application/octet-stream',
      category: 'Test Cat',
      subCategory: 'Test Sub Cat',
      entityType: 'serviceRequestNumber',
      entityId: 'LoadDocumentPOST',
      externalId: 'Test',
      expiryDate: '2033-11-30T18:46:19.123',
      isConfidential: 'false',
      isStaffConfidential: 'false',
      sourceSystem: 'regression-suite',
      lastUpdatedBy: 'JUSTINMAJ',
      status: 'ACTIVE',
      file: http.file(dataFile[scenario.iterationInTest], Mainlist[scenario.iterationInTest].fileLocation, 'application/pdf'),
    };

    const headers = {
      'accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    };

    const response = http.post('https://api.uat.gray.net/document-store/documents/document', data, headers);

    sleep(2);
    console.log(response.body);
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
