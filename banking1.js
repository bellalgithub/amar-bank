

// Deposit Event Handler

document.getElementById('depositBtn').addEventListener('click', function () {

    if (inputField('depositInput') > 0) {
        const totalDepositAmount = innerTextDashboard('currentDepositBalance') + inputField('depositInput');
        document.getElementById('currentDepositBalance').innerText = totalDepositAmount;

    } else {
        alert('Please put positive and larger than 0 number');
    }

    document.getElementById('depositInput').value = ' ';

})


// Withdraw Event Handler

document.getElementById('withdrawBtn').addEventListener('click', function () {

    const totalWithdrawAmount = innerTextDashboard('currentWithdrawAmount') + inputField('withdrawInput');
    if (inputField('withdrawInput') > 0) {
        document.getElementById('currentWithdrawAmount').innerText = totalWithdrawAmount;

    } else {
        alert('Please put positive and larger than 0 number');
    }
    document.getElementById('withdrawInput').value = ' ';

})

// Input field function get input and conversion to number

function inputField(id) {

    const input = document.getElementById(id);
    const inputValue = input.value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;

}

// Inner Text field function string to number 

function innerTextDashboard(id) {

    const dashBoardId = document.getElementById(id);
    const dashBoardIdText = dashBoardId.innerText;
    const dashBoardIdTextNumber = parseFloat(dashBoardIdText);
    return dashBoardIdTextNumber;
}


