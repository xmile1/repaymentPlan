
function initialAnnuity(duration, nominalInterestRate, totalLoanAmount) {
    // This formula resulted in 362.35 as opposed to 219.36 in the example 
    // so i searched the internet for a different calculation that worked
    // const rate = nominalInterestRate/100
    // return rate * totalLoanAmount / (1 - Math.pow(1 + rate, -duration)).toFixed(2)

    let monthly = nominalInterestRate / 12 / 100;
    var length = 1 + monthly;
    var start = 1;
    for (i = 0; i < duration; i++) {
        start = start * length
    }
    return (totalLoanAmount * monthly / (1 - (1 / start))).toFixed(2)
}

function annuity(principal, interest) {
    return principal + interest
}


function getInterest(nominalInterestRate, initialPrincipal) {
    // the year doesnt change its 360
    // days in month is 30 constant
    return (nominalInterestRate * 30 * initialPrincipal) / (360 * 100)
}

const getPrincipal = (annuity, interest, initialOutstandingPrincipal) => {
    const principal = annuity - interest
    if (principal > initialOutstandingPrincipal) {
        return initialOutstandingPrincipal
    }
    return principal
}

function getPaymentPlanForAMonth(borrowerPaymentAmount, startDate, dateIndex, initialOutstandingPrincipal, nominalInterestRate, isLastCase ) {
    const interest = getInterest(nominalInterestRate, initialOutstandingPrincipal)
    const principal = getPrincipal(borrowerPaymentAmount, interest, initialOutstandingPrincipal)
    borrowerPaymentAmount = isLastCase ? annuity(principal, interest) :  borrowerPaymentAmount
    const date = new Date(startDate)
    date.setMonth(date.getMonth() + dateIndex)
    return {
        borrowerPaymentAmount, // this is annuity
        date,
        initialOutstandingPrincipal: initialOutstandingPrincipal.toFixed(2),
        interest: interest.toFixed(2),
        principal: principal.toFixed(2),
        remainingOutstandingPrincipal: (initialOutstandingPrincipal - principal).toFixed(2)
    }
}


function getPaymentPlanSchedule(duration, nominalInterestRate, totalLoanAmount, startDate){
    let annuity = initialAnnuity(duration, nominalInterestRate, totalLoanAmount)
    let initialOutstandingPrincipal = totalLoanAmount
    return Array(duration).fill(2).map((e, index)=> {
        const paymentPlan = getPaymentPlanForAMonth(annuity, startDate, index, initialOutstandingPrincipal, nominalInterestRate, index === duration - 1)
        initialOutstandingPrincipal = initialOutstandingPrincipal - paymentPlan.principal
        return paymentPlan
    })
}

console.log(getPaymentPlanSchedule(24, 5, 5000, "2018-01-01T00:00:01Z"))