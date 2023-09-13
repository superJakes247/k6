/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { check, group, sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import { scenario } from 'k6/execution';
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js';

// const dataFile = new SharedArray('filesInMongoOnly', function () {
//   return JSON.parse(open('./files-in-siebel-only.json'));
// });

export const options = {
  scenarios: {
    linearTest: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: dataFile.length,
      maxDuration: "6m",
    },
  },
};

export default function test() {
  
  group('api-document-store-go | get document file stored in Siebel', () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "multipart/form-data");
    myHeaders.append("Accept", "application/json");

    var form = new FormData();
    form.append("entityType", "organisationId");
    form.append("entityId", "justinUnitTest" + [scenario.iterationInTest]);
    form.append("file", fileInput.files[0], "/media/sf_VMShare/PDFs/Ad hoc Savings Gray Issue Feb 2007.pdf");
    form.append("mimeContentType", "application/octet-stream");
    form.append("category", "TestFile");
    form.append("subCategory", "TestFileSubType");
    form.append("externalId", "");
    form.append("sourceSystem", "tool-api-performance-test");
    form.append("expiryDate", "");
    form.append("isSiebel", "false");
    form.append("isConfidential", "false");
    form.append("isStaffConfidential", "false");
    form.append("status", "ACTIVE");
    form.append("lastUpdatedBy", "tool-api-performance-test");

    const response = http.post("https://api.uat.gray.net/document-store//documents/document", 
      FormData.body(),
      {headers: { 'Content-Type': 'multipart/form-data; boundary=' + FormData.boundary }
    });
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
