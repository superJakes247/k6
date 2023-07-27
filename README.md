# tool-api-performance-test

repo to try out K6 testing 


## Run tests

```shell
docker-compose run performance k6 run /scripts/perf-test.js 
```

## Reporting

95 percentile of all successfull results
```
docker-compose run testtools node results.js 
docker-compose run performance node ./results.js  
```

## Run with CSV results

```shell
 docker-compose run performance k6 run  --out csv=/results/test_results.csv /scripts/perf-test.js 
 docker-compose run performance k6 run  --out csv=/results/test_results-slow-endpoints-uat-onprem.csv --tag run=uat-onprem /scripts/perf-test-slow-endpoints.js 
```