# vue-props-vs-pinia

### Test environment

MacBook Pro M3 16Gb RAM

### How to run tests

run the project with `npm run dev`

for each test:

1. refresh the page
2. write the numbers in the input fields
3. open the dev tools on the `Performance` tab
4. click on the record button in the `Performance` tab
5. click on the `Props` or `Pinia` button, depending on the test case
6. wait for the dropdowns to rendere on the page
7. stop the recoding in the `Performance` tab
8. check the `<AppWithProps> mount` or `<AppWithPinia> mount` time in the `Timings` section

### Test results

| Number of dropdowns | Users per dropdown | Mount time with Props | Mount time with Pinia |
| ------------------: | -----------------: | --------------------: | --------------------: |
|                  10 |                 10 |               3,46 ms |               4,24 ms |
|                 100 |                100 |              30,09 ms |              28,58 ms |
|               1_000 |              1_000 |             460,12 ms |             288,48 ms |
|               5_000 |              5_000 |                6,72 s |                2,23 s |
|              10_000 |             10_000 |               23,97 s |                6,66 s |
|              10_000 |             50_000 |              2,01 min |               31,04 s |
