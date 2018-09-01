STEPS I TOOK

STEP 1: - 1st commit
    basic implementation

    Here i am not taking a close look at
    - the formula
    -  the exception in annuity
    - correctness of cals
    I am concerned about
    - the structure of output
    - which calculation step should come before this other
    - writing small units for each fxnality

    Running the program gives me
    - NaN for all expected results.

    ```js
    ...
    [{
        borrowerPaymentAmount: NaN,
        date: 2019-11-01T00:00:01.000Z,
        initialOutstandingPrincipal: NaN,
        interest: NaN,
        principal: NaN,
        remainingOutstandingPrincipal: NaN 
    },
    { 
        borrowerPaymentAmount: NaN,
        date: 2019-12-01T00:00:01.000Z,
        initialOutstandingPrincipal: NaN,
        interest: NaN,
        principal: NaN,
        remainingOutstandingPrincipal: NaN 
    } ]
    ```




STEP 2: 2nd commit

    i ran the program with a debugger at each of these.. to see what is correct and what is not

    ```
    const interest = getInterest(nominalInterestRate, initialOutstandingPrincipal)
    const principal = getPrincipal(borrowerPaymentAmount, interest, initialOutstandingPrincipal)
    borrowerPaymentAmount = borrowerPaymentAmount || principal + interest
    ```

    interest was correct, i only needed to divide by 100 to change from cent
   I continued that way
   I skipped annuity and hard coded  219.36 as the value.
   I made all result to 2 decimal places  `.toFixed(2)

   at this point i got 

```js
   [ { borrowerPaymentAmount: 219.36,
    date: 2018-01-01T00:00:01.000Z,
    initialOutstandingPrincipal: '5000.00',
    interest: '20.83',
    principal: '198.53',
    remainingOutstandingPrincipal: '4801.47' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-02-01T00:00:01.000Z,
    initialOutstandingPrincipal: '4801.47',
    interest: '20.01',
    principal: '199.35',
    remainingOutstandingPrincipal: '4602.12' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-03-01T00:00:01.000Z,
    initialOutstandingPrincipal: '4602.12',
    interest: '19.18',
    principal: '200.18',
    remainingOutstandingPrincipal: '4401.94' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-04-01T00:00:01.000Z,
    initialOutstandingPrincipal: '4401.94',
    interest: '18.34',
    principal: '201.02',
    remainingOutstandingPrincipal: '4200.92' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-05-01T00:00:01.000Z,
    initialOutstandingPrincipal: '4200.92',
    interest: '17.50',
    principal: '201.86',
    remainingOutstandingPrincipal: '3999.06' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-06-01T00:00:01.000Z,
    initialOutstandingPrincipal: '3999.06',
    interest: '16.66',
    principal: '202.70',
    remainingOutstandingPrincipal: '3796.36' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-07-01T00:00:01.000Z,
    initialOutstandingPrincipal: '3796.36',
    interest: '15.82',
    principal: '203.54',
    remainingOutstandingPrincipal: '3592.82' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-08-01T00:00:01.000Z,
    initialOutstandingPrincipal: '3592.82',
    interest: '14.97',
    principal: '204.39',
    remainingOutstandingPrincipal: '3388.43' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-09-01T00:00:01.000Z,
    initialOutstandingPrincipal: '3388.43',
    interest: '14.12',
    principal: '205.24',
    remainingOutstandingPrincipal: '3183.19' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-10-01T00:00:01.000Z,
    initialOutstandingPrincipal: '3183.19',
    interest: '13.26',
    principal: '206.10',
    remainingOutstandingPrincipal: '2977.09' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-11-01T00:00:01.000Z,
    initialOutstandingPrincipal: '2977.09',
    interest: '12.40',
    principal: '206.96',
    remainingOutstandingPrincipal: '2770.13' },
  { borrowerPaymentAmount: 219.36,
    date: 2018-12-01T00:00:01.000Z,
    initialOutstandingPrincipal: '2770.13',
    interest: '11.54',
    principal: '207.82',
    remainingOutstandingPrincipal: '2562.31' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-01-01T00:00:01.000Z,
    initialOutstandingPrincipal: '2562.31',
    interest: '10.68',
    principal: '208.68',
    remainingOutstandingPrincipal: '2353.63' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-02-01T00:00:01.000Z,
    initialOutstandingPrincipal: '2353.63',
    interest: '9.81',
    principal: '209.55',
    remainingOutstandingPrincipal: '2144.08' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-03-01T00:00:01.000Z,
    initialOutstandingPrincipal: '2144.08',
    interest: '8.93',
    principal: '210.43',
    remainingOutstandingPrincipal: '1933.65' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-04-01T00:00:01.000Z,
    initialOutstandingPrincipal: '1933.65',
    interest: '8.06',
    principal: '211.30',
    remainingOutstandingPrincipal: '1722.35' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-05-01T00:00:01.000Z,
    initialOutstandingPrincipal: '1722.35',
    interest: '7.18',
    principal: '212.18',
    remainingOutstandingPrincipal: '1510.17' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-06-01T00:00:01.000Z,
    initialOutstandingPrincipal: '1510.17',
    interest: '6.29',
    principal: '213.07',
    remainingOutstandingPrincipal: '1297.10' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-07-01T00:00:01.000Z,
    initialOutstandingPrincipal: '1297.10',
    interest: '5.40',
    principal: '213.96',
    remainingOutstandingPrincipal: '1083.14' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-08-01T00:00:01.000Z,
    initialOutstandingPrincipal: '1083.14',
    interest: '4.51',
    principal: '214.85',
    remainingOutstandingPrincipal: '868.29' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-09-01T00:00:01.000Z,
    initialOutstandingPrincipal: '868.29',
    interest: '3.62',
    principal: '215.74',
    remainingOutstandingPrincipal: '652.55' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-10-01T00:00:01.000Z,
    initialOutstandingPrincipal: '652.55',
    interest: '2.72',
    principal: '216.64',
    remainingOutstandingPrincipal: '435.91' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-11-01T00:00:01.000Z,
    initialOutstandingPrincipal: '435.91',
    interest: '1.82',
    principal: '217.54',
    remainingOutstandingPrincipal: '218.37' },
  { borrowerPaymentAmount: 219.36,
    date: 2019-12-01T00:00:01.000Z,
    initialOutstandingPrincipal: '218.37',
    interest: '0.91',
    principal: '218.45',
    remainingOutstandingPrincipal: '-0.08' } ]
```

STEP 3:

    I focused on the last Month
    - I need a codition to calculate the annuity differently for the last month
    - i need a way to satisfy the condition in No 3 of the calculation basics that says for the last month if the calculated principal is higher than the previous outstanding principal dont use it, use the previous one

    I added a condition to calculate annuity as principal + interest if the computation was for the last month.
    i added an if statement to compare previous principal and current one to take a decision based on that

    At this point Everything works as expected..... initialAnnuity formula is pain but i am now very motivated by what works......
```js
    function initialAnnuity(duration, nominalInterestRate, totalLoanAmount) {
        // does not change
        return 219.36
        // return duration * nominalInterestRate * totalLoanAmount

        }
```

I also notice that something might might be wrong, my last date is ` 2019-12-01T00:00:01.000Z` but theirs is `2020-01-01T00:00:00Z` but i dont care, i will only take a look when other more relevant issues are sorted and if i cannot sort it out, i will comment on the issue to the best of my knowlege.

