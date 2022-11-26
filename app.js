

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {

    // user mail Input
    const emailId = document.getElementById('emailInput').value;

    // User mail password input

    const emailPassword = document.getElementById('passwordInput').value;

    // FORM validation 

    if (emailId == 'bellal@gmail.com' && emailPassword == 123456) {

        window.location.href = "banking.html"

    }

})