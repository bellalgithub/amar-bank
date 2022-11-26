


// Deposit button event handler
const depositBtn = document.getElementById('depositBtn');

depositBtn.addEventListener('click', function () {

    const depositInput = document.getElementById('depositInput');
    const depositInputValue = depositInput.value;
    const depositInputValueNumber = parseFloat(depositInputValue)
    console.log(depositInputValueNumber);


})
