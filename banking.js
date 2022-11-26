
// Deposit button event handler

const depositBtn = document.getElementById('depositBtn');

depositBtn.addEventListener('click', function () {

    const depositInput = document.getElementById('depositInput');
    const depositInputValue = depositInput.value;
    const depositInputValueNumber = parseFloat(depositInputValue)

    if (depositInputValueNumber > 0) {

        const currentDepositBalance = document.getElementById('currentDepositBalance');
        const currentDepositBalanceText = currentDepositBalance.innerText;
        const currentDepositBalanceTextNumber = parseFloat(currentDepositBalanceText);
        const totalDepositBalance = currentDepositBalanceTextNumber + depositInputValueNumber;
        currentDepositBalance.innerText = totalDepositBalance;

        // Event handler on Balance

        const currentBalance = document.getElementById('currentBalance');
        const currentBalanceText = currentBalance.innerText;
        const currentBalanceTextNumber = parseFloat(currentBalanceText);
        const totalBalanceAmount = currentBalanceTextNumber + depositInputValueNumber;
        currentBalance.innerText = totalBalanceAmount;

    } else {
        alert('Please Enter Positive and Large than 0 Number');
    }

    depositInput.value = ' ';

})

// Event handler on Withdraw Button 

document.getElementById('withdrawBtn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawInput');

    console.log('clicked it');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputValueNumber = parseFloat(withdrawInputValue);

    if (withdrawInputValueNumber > 0) {
        const currentWithdrawAmount = document.getElementById('currentWithdrawAmount');
        const currentWithdrawAmountText = currentWithdrawAmount.innerText;
        const currentWithdrawAmountTextNumber = parseFloat(currentWithdrawAmountText);
        const totalWithdrawAmount = currentWithdrawAmountTextNumber + withdrawInputValueNumber;
        currentWithdrawAmount.innerText = totalWithdrawAmount;

        // Event handler on Balance

        const currentBalance = document.getElementById('currentBalance');
        const currentBalanceText = currentBalance.innerText;
        const currentBalanceTextNumber = parseFloat(currentBalanceText);
        const totalBalanceAmount = currentBalanceTextNumber - withdrawInputValueNumber;
        currentBalance.innerText = totalBalanceAmount;

    } else {
        alert('Please Enter Positive and Large than 0 Number');

    }
    withdrawInput.value = ' ';
})