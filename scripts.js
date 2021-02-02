const acctBalanceLbl = document.getElementById("acctBalanceLbl");
const deposits = [];
const withdrawals = [];
let totalBalance = 25;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

// accept deposits from user, store deposits in array
btnDeposit.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userDeposit.value)) {
        alert("Please enter a number.");
        return userDeposit.value = '';
    } else {

    // checks if deposit meets parameters
        if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit.value = '';
        } else {
    
        // push deposit to array
        deposits.push(Number(userDeposit.value));
        // calculate Total Balance
        totalBalance += (Number(userDeposit.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    // print deposit to console to verify success
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
    
});

// accept withdrawals from user, store withdrawals in array
btnWithdraw.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {

        // checks if withdrawal meets parameters
        if (userWithdraw.value > totalBalance - 5) {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw.value = '';
        } else {

        // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));
        // calculate Total Balance
        totalBalance -= (Number(userWithdraw.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;

    // print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});

// format TotalBalance to show $ XX.XX (2 decimal places)

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;


// Second account
const acctBalanceLbl2 = document.getElementById("acctBalanceLbl2");
const deposits2 = [];
const withdrawals2 = [];
let totalBalance2 = 25;
const userDeposit2 = document.getElementById("userDeposit2");
const btnDeposit2 = document.getElementById("btnDeposit2");
const userWithdraw2 = document.getElementById("userWithdraw2");
const btnWithdraw2 = document.getElementById("btnWithdraw2");

// Create our number formatter.
const formatter2 = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });

// accept deposits from user, store deposits in array
btnDeposit2.addEventListener('click', () => {

    // checks if deposit is a number
    if (isNaN(userDeposit2.value)) {
        alert("Please enter a number.");
        return userDeposit2.value = '';
    } else {

    // checks if deposit meets parameters
        if (userDeposit2.value < 0.01 || userDeposit2.value > 10000) {
            alert("You can only deposit between $0.01 and $10,000.")
            return userDeposit2.value = '';
        } else {
    
        // push deposit to array
        deposits.push(Number(userDeposit2.value));
        // calculate Total Balance
        totalBalance2 += (Number(userDeposit2.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted2 = formatter2.format(totalBalance2);
        document.getElementById("acctBalanceLbl2").innerHTML = totalBalanceFormatted2;

    // print deposit to console to verify success
    console.log("$" + userDeposit2.value);
    return userDeposit2.value = '';
    }
}
    
});

// accept withdrawals from user, store withdrawals in array
btnWithdraw2.addEventListener('click', () => {

    // checks if withdrawal is a number
    if (isNaN(userWithdraw2.value)) {
        alert("Please enter a number.");
        return userWithdraw2.value = '';
    } else {

        // checks if withdrawal meets parameters
        if (userWithdraw2.value > totalBalance2 - 5) {
            alert("Your total balance cannot drop below $5.");
            return userWithdraw2.value = '';
        } else {

        // push withdrawal to array
        withdrawals2.push(Number(userWithdraw2.value));
        // calculate Total Balance
        totalBalance2 -= (Number(userWithdraw2.value));

        // format TotalBalance to show $ XX.XX (2 decimal places)
        let totalBalanceFormatted2 = formatter2.format(totalBalance2);
        document.getElementById("acctBalanceLbl2").innerHTML = totalBalanceFormatted2;

    // print withdrawal to console to verfify success
    console.log("$" + userWithdraw2.value);
    return userWithdraw2.value = '';
    }
}
});

// format TotalBalance to show $ XX.XX (2 decimal places)

let totalBalanceFormatted2 = formatter2.format(totalBalance2);
document.getElementById("acctBalanceLbl2").innerHTML = totalBalanceFormatted2;