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

// Confirm Password
var confirmPassword = document.querySelector('input[id="confirm"]');
var validationConfirm = document.getElementById('validationConfirm');
confirmPassword.addEventListener('blur', invalidConfirm);
confirmPassword.addEventListener('focus', focusConfirm);
function invalidConfirm() {
    let input = confirmPassword.value;
    if (input != password.value) {
        validationConfirm.innerHTML = 'The Passwords do not match.';
    }
}
function focusConfirm() {
    validationConfirm.innerHTML = '';
}

// Age
var age = document.querySelector('input[id="age"]');
var validationAge = document.getElementById('validationAge');
age.addEventListener('blur', invalidAge);
age.addEventListener('focus', focusAge);
function invalidAge() {
    let input = parseFloat(age.value);
    if (input < 18) {
        validationAge.innerHTML = 'The Age must be greater or equal than 18.';
    }
    if (!Number.isInteger(input)) {
        validationAge.innerHTML = 'The Age must be an integer number.';
    }
}
function focusAge() {
    validationAge.innerHTML = '';
}

// Phone Number
var phone = document.querySelector('input[id="phone"]');
var validationPhone = document.getElementById('validationPhone');
phone.addEventListener('blur', invalidPhone);
phone.addEventListener('focus', focusPhone);
function invalidPhone() {
    let input = phone.value;
    if (input.length < 7) {
        validationPhone.innerHTML = 'The Phone must have at least 7 numbers.';
    }
    if (input.indexOf('-') != -1 || input.indexOf(' ') != -1 ||
        input.indexOf('(') != -1 || input.indexOf(')') != -1) {
        validationPhone.innerHTML = 'Only numbers are allowed.';
    }
}
function focusPhone() {
    validationPhone.innerHTML = '';
}

// Adress
var adress = document.querySelector('input[id="adress"]');
var validationAdress = document.getElementById('validationAdress');
adress.addEventListener('blur', invalidAdress);
adress.addEventListener('focus', focusAdress);
function invalidAdress() {
    let input = adress.value;
    if (input.length < 5) {
        validationAdress.innerHTML = 'The Adress must have at least 5 characters.';
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0 || input.indexOf(' ') == -1) {
        validationAdress.innerHTML = 'The Adress must have letters, numbers and at least 1 space.';
    }
}
function focusAdress() {
    validationAdress.innerHTML = '';
}

// City
var city = document.querySelector('input[id="city"]');
var validationCity = document.getElementById('validationCity');
city.addEventListener('blur', invalidCity);
city.addEventListener('focus', focusCity);
function invalidCity() {
    let input = city.value;
    if (input.length < 3) {
        validationCity.innerHTML = 'The City must have at least 3 characters.';
    }
}
function focusCity() {
    validationCity.innerHTML = '';
}