
function initialAnnuity(duration, nominalInterestRate, totalLoanAmount) {

    const rate = nominalInterestRate/100

    return rate * totalLoanAmount / (1 - Math.pow(1 + rate, -duration)).toFixed(2)
    
}

function annuity(principal, interest) {
    // it might change at the end
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



















// function loan() {
//     var monthly = document.interest.rate.value / 12 / 100;
//     var start = 1;
//     var length = 1 + monthly;
//     for (i = 0; i < document.interest.months.value; i++) {
//         start = start * length
//     }
//     var payment = document.interest.payment.value = Number(document.interest.amount.value * monthly / (1 - (1 / start)))
//     document.interest.payment.value = payment.toFixed(2);
//     var totrepay = Number(document.interest.payment.value) * i;
//     document.interest.totrepay.value = totrepay.toFixed(2);
//     var totint = totrepay - document.interest.amount.value;
//     document.interest.totint.value = totint.toFixed(2);
// }