// FORM VALIDATIONS

// Full Name
var fullName = document.querySelector('input[id="name"]');
var validationName = document.getElementById('validationName');
fullName.addEventListener('blur', invalidName);
fullName.addEventListener('focus', focusName);
function invalidName() {
    let input = fullName.value;
    if (input.length < 6 || input.indexOf(' ') == -1) {
        validationName.innerHTML = 'The Name must be more than 6 letters and at least have 1 space.';
    }
}
function focusName() {
    validationName.innerHTML = '';
}

// Email
var email = document.querySelector('input[id="email"]');
var validationEmail = document.getElementById('validationEmail');
email.addEventListener('blur', invalidEmail);
email.addEventListener('focus', focusEmail);
function invalidEmail() {
    let input = email.value;
    if (input.indexOf('@') == -1) {
        validationEmail.innerHTML = 'Invalid email.';
    }
}
function focusEmail() {
    validationEmail.innerHTML = '';
}

// Password
var password = document.querySelector('input[id="password"]');
var validationPassword = document.getElementById('validationPassword');
password.addEventListener('blur', invalidPassword);
password.addEventListener('focus', focusPassword);
function invalidPassword() {
    let input = password.value;
    if (input.length < 8) {
        validationPassword.innerHTML = 'The Password must have 8 characters ore more.';
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0) {
        validationPassword.innerHTML = 'The Password must have letters and numbers.';
    }
}
function focusPassword() {
    validationPassword.innerHTML = '';
}