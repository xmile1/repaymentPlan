
function initialAnnuity({ duration, nominalInterestRate, totalLoanAmount }) {
    // does not change
    return duration * nominalInterestRate * totalLoanAmount

}

function annuity(principal, interest) {
    // it might change at the end
    return principal + interest
}


function getInterest(nominalInterestRate, initialPrincipal) {
    // the year doesnt change its 360
    // days in month is 30 constant
    return (nominalInterestRate * 30 * initialPrincipal) / 360
}

const getPrincipal = (annuity, interest, initialOutstandingPrincipal) => {

    if (interest > initialOutstandingPrincipal) {
        return initialOutstandingPrincipal
    }
    return annuity - interest
}

function getPaymentPlanForAMonth(borrowerPaymentAmount, startDate, dateIndex, initialOutstandingPrincipal, nominalInterestRate ) {
    
    const interest = getInterest(nominalInterestRate, initialOutstandingPrincipal)
    const principal = getPrincipal(borrowerPaymentAmount, interest, initialOutstandingPrincipal)
    borrowerPaymentAmount = borrowerPaymentAmount || principal + interest
    const date = new Date(startDate)
    date.setMonth(date.getMonth() + dateIndex)
    return {
        borrowerPaymentAmount: borrowerPaymentAmount, // this is annuity
        date: date, // this is the month
        initialOutstandingPrincipal,
        interest,
        principal,
        remainingOutstandingPrincipal: initialOutstandingPrincipal - principal
    }
}


function getPaymentPlanSchedule(duration, nominalInterestRate, totalLoanAmount, startDate){
    const annuity = initialAnnuity(duration, nominalInterestRate, totalLoanAmount)
    let initialOutstandingPrincipal = totalLoanAmount
    return Array(duration).fill(2).map((e, index)=> {
        const paymentPlan = getPaymentPlanForAMonth(annuity, startDate, index, initialOutstandingPrincipal, nominalInterestRate)
        initialOutstandingPrincipal = initialOutstandingPrincipal - paymentPlan.principal
        return paymentPlan
    })
}

console.log(getPaymentPlanSchedule(24, 5, 5000, "2018-01-01T00:00:01Z"))

function loan() {
    var monthly = document.interest.rate.value / 12 / 100;
    var start = 1;
    var length = 1 + monthly;
    for (i = 0; i < document.interest.months.value; i++) {
        start = start * length
    }
    var payment = document.interest.payment.value = Number(document.interest.amount.value * monthly / (1 - (1 / start)))
    document.interest.payment.value = payment.toFixed(2);
    var totrepay = Number(document.interest.payment.value) * i;
    document.interest.totrepay.value = totrepay.toFixed(2);
    var totint = totrepay - document.interest.amount.value;
    document.interest.totint.value = totint.toFixed(2);
}