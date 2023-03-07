/* eslint-disable import/no-unresolved */
import sql from 'k6/x/sql';
import { check, group } from 'k6';

// The second argument is a MS SQL connection string, e.g.
// Server=my_db_instance,port;Database=myDB;User=myUser;Password=myPassword

// eslint-disable-next-line no-undef
const db = sql.open('sqlserver', __ENV.K6_DB_TEST);

export const options = {
  stages: [
    { target: 10, duration: '5s' },
    { target: 10, duration: '10s' },
    { target: 0, duration: '5s' },
  ],

  // stages - user ramp up
  // 10 users   ______________________
  //          /|                      |\
  //         / |                      | \
  //        /  |                      |  \
  //       /   |                      |   \
  //        5s          10s            5s

  thresholds: {
    iteration_duration: ['p(90) < 50', 'p(95) < 100'], // 90% of requests must finish within 50ms, 95% within 100ms
  },
};

// export function setup() {
//   db.exec(``);
// }

export function teardown() {
  db.close();
}

export default function test() {
  group('Can select data from dbo.DimSector', () => {
    const results = sql.query(db, `
      SELECT
        sectorCategoryDescription,
        sectorTypeDescription COLLATE DATABASE_DEFAULT  + IIF(sectorCategoryComment IS NULL,'', ' - ' + sectorCategoryComment) AS sectorTypeDescription,
        sectorDescription,
        sectorCode
      FROM dbo.DimSector
      WHERE sectorValidToDate = '2050-01-01'
      AND sectorLocalOffshore <> 'AGUF'
      ORDER BY
        sectorCategoryDescription,
        sectorTypeDescription,
        sectorDescription,
        sectorCode
    `);

    check(results, {
      'result length is 85': (r) => r.length === 85,
    });
  });
}
