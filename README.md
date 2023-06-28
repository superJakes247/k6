# tool-api-performance-test

repo to try out K6 testing 


## Run tests

```shell
docker-compose run performance run /scripts/perf-test.js 
```

## Run with CSV results

```shell
 docker-compose run performance run  --out csv=/results/test_results.csv /scripts/perf-test.js 
```