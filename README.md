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

