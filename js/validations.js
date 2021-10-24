// FORM VALIDATIONS JS

// Array Error & Array Ok -- ConcatenateOk & ConcatenateErrors
var arrayError = [];
var concatenateOk = '';
var concatenateErrors = '';

// Full Name
var fullName = document.querySelector('input[id="name"]');
var invalidName = document.getElementById('invalidName');
fullName.addEventListener('focus', focusName);
fullName.addEventListener('blur', nameValidator);
function focusName() {
    invalidName.innerHTML = '';
}
function nameValidator() {
    let input = fullName.value;
    if (input.length < 6 || input.indexOf(' ') == -1) {
        invalidName.innerHTML = 'The Name must be more than 6 letters and at least have 1 space.';
        arrayError[0] = '-Error in Full Name: The Name must be more than 6 letters and at least have 1 space.';
        concatenateErrors += '<li>' + arrayError[0] + '</li>';
    } else {
        concatenateOk += '<li>' + 'Full Name: ' + input + '</li>';
    }
}

// Email
var email = document.querySelector('input[id="email"]');
var invalidEmail = document.getElementById('invalidEmail');
email.addEventListener('focus', focusEmail);
email.addEventListener('blur', emailValidator);
function focusEmail() {
    invalidEmail.innerHTML = '';
}
function emailValidator() {
    let input = email.value;
    if (input.indexOf('@') == -1 || input.indexOf('.') == -1) {
        invalidEmail.innerHTML = 'Invalid email. It must have @ and at least 1 point.';
        arrayError[1] = '-Error in Email: The Email must have @ and at least 1 point.';
        concatenateErrors += '<li>' + arrayError[1] + '</li>';
    } else {
        concatenateOk += '<li>' + 'Email: ' + input + '</li>';
    }
}

// Password
var password = document.querySelector('input[id="password"]');
var invalidPassword = document.getElementById('invalidPassword');
password.addEventListener('focus', focusPassword);
password.addEventListener('blur', passwordValidator);
function focusPassword() {
    invalidPassword.innerHTML = '';
}
function passwordValidator() {
    let input = password.value;
    if (input.length < 8) {
        invalidPassword.innerHTML = 'The Password must have 8 characters ore more.';
        arrayError[2] = '-Error in Password: The Password must have 8 characters ore more.';
        concatenateErrors += '<li>' + arrayError[2] + '</li>';
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0) {
        invalidPassword.innerHTML = 'The Password must have letters and numbers.';
        arrayError[3] = '-Error in Password: The Password must have letters and numbers.';
        concatenateErrors += '<li>' + arrayError[3] + '</li>';
    } else if (input.length >= 8) {
        concatenateOk += '<li>' + 'Password: ' + input + '</li>';
    }
}

// Confirm Password
var confirmPassword = document.querySelector('input[id="confirm"]');
var invalidConfirm = document.getElementById('invalidConfirm');
confirmPassword.addEventListener('focus', focusConfirm);
confirmPassword.addEventListener('blur', confirmValidator);
function focusConfirm() {
    invalidConfirm.innerHTML = '';
}
function confirmValidator() {
    let input = confirmPassword.value;
    if (input != password.value || input === '') {
        invalidConfirm.innerHTML = 'The Passwords do not match.';
        arrayError[4] = '-Error in Confirm Password: The Passwords do not match.';
        concatenateErrors += '<li>' + arrayError[4] + '</li>';
    } else {
        concatenateOk += '<li>' + 'Confirm Password: ' + input + '</li>';
    }
}

// Age
var age = document.querySelector('input[id="age"]');
var invalidAge = document.getElementById('invalidAge');
age.addEventListener('focus', focusAge);
age.addEventListener('blur', ageValidator);
function focusAge() {
    invalidAge.innerHTML = '';
}
function ageValidator() {
    let input = parseFloat(age.value);
    if (input < 18) {
        invalidAge.innerHTML = 'The Age must be greater or equal than 18.';
        arrayError[5] = '-Error in Age: The Age must be greater or equal than 18.';
        concatenateErrors += '<li>' + arrayError[5] + '</li>';
    }
    if (!Number.isInteger(input)) {
        invalidAge.innerHTML = 'The Age must be an integer number.';
        arrayError[6] = '-Error in Age: The Age must be an integer number.';
        concatenateErrors += '<li>' + arrayError[6] + '</li>';
    }
    if (input >= 18 && Number.isInteger(input)){
        concatenateOk += '<li>' + 'Age: ' + input + '</li>';
    }
}

// Phone Number
var phone = document.querySelector('input[id="phone"]');
var invalidPhone = document.getElementById('invalidPhone');
phone.addEventListener('focus', focusPhone);
phone.addEventListener('blur', phoneValidator);
function focusPhone() {
    invalidPhone.innerHTML = '';
}
function phoneValidator() {
    let input = phone.value;
    let inputNumber = parseFloat(phone.value);
    if (input.length < 7) {
        invalidPhone.innerHTML = 'The Phone must have at least 7 numbers.';
        arrayError[7] = '-Error in Phone Number: The Phone must have at least 7 numbers.';
        concatenateErrors += '<li>' + arrayError[7] + '</li>';
    }
    if (isNaN(inputNumber)) {
        invalidPhone.innerHTML = 'Only numbers are allowed.';
        arrayError[8] = '-Error in Phone Number: Only numbers are allowed.';
        concatenateErrors += '<li>' + arrayError[8] + '</li>';
    }
    if (input.length >= 7 && !isNaN(inputNumber)) {
        concatenateOk += '<li>' + 'Phone Number: ' + input + '</li>';
    }
}

// Adress
var adress = document.querySelector('input[id="adress"]');
var invalidAdress = document.getElementById('invalidAdress');
adress.addEventListener('focus', focusAdress);
adress.addEventListener('blur', adressValidator);
function focusAdress() {
    invalidAdress.innerHTML = '';
}
function adressValidator() {
    let input = adress.value;
    if (input.length < 5) {
        invalidAdress.innerHTML = 'The Adress must have at least 5 characters.';
        arrayError[9] = '-Error in Adress: The Adress must have at least 5 characters.';
        concatenateErrors += '<li>' + arrayError[9] + '</li>';
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0 || input.indexOf(' ') == -1) {
        invalidAdress.innerHTML = 'The Adress must have letters, numbers and at least 1 space.';
        arrayError[10] = '-Error in Adress: The Adress must have letters, numbers and at least 1 space.';
        concatenateErrors += '<li>' + arrayError[10] + '</li>';
    } else if (input.length >= 5) {
        concatenateOk += '<li>' + 'Adress: ' + input + '</li>';
    }
}

// City
var city = document.querySelector('input[id="city"]');
var invalidCity = document.getElementById('invalidCity');
city.addEventListener('focus', focusCity);
city.addEventListener('blur', cityValidator);
function focusCity() {
    invalidCity.innerHTML = '';
}
function cityValidator() {
    let input = city.value;
    if (input.length < 3) {
        invalidCity.innerHTML = 'The City must have at least 3 characters.';
        arrayError[11] = '-Error in City: The City must have at least 3 characters.';
        concatenateErrors += '<li>' + arrayError[11] + '</li>';
    } else {
        concatenateOk += '<li>' + 'City: ' + input + '</li>';
    }
}

// Postcode
var postcode = document.querySelector('input[id="postcode"]');
var invalidPostcode = document.getElementById('invalidPostcode');
postcode.addEventListener('focus', focusPost);
postcode.addEventListener('blur', postcodeValidator);
function focusPost() {
    invalidPostcode.innerHTML = '';
}
function postcodeValidator() {
    let input = postcode.value;
    if (input.length < 3) {
        invalidPostcode.innerHTML = 'The Postcode must have at least 3 characters.';
        arrayError[12] = '-Error in Postcode: The Postcode must have at least 3 characters.';
        concatenateErrors += '<li>' + arrayError[12] + '</li>';
    } else {
        concatenateOk += '<li>' + 'Postcode: ' + input + '</li>';
    }
}

// ID
var id = document.querySelector('input[id="id"]');
var invalidId = document.getElementById('invalidId');
id.addEventListener('focus', focusId);
id.addEventListener('blur', idValidator);
function focusId() {
    invalidId.innerHTML = '';
}
function idValidator() {
    let input = id.value;
    if (input.length >= 7 && input.length <=8) {
        concatenateOk += '<li>' + 'ID: ' + input + '</li>';
    } else {
        invalidId.innerHTML = 'The Id must have 7 or 8 numbers.';
        arrayError[13] = '-Error in Id: The Id must have 7 or 8 numbers.';
        concatenateErrors += '<li>' + arrayError[13] + '</li>';
    }
}

// Button -> Send
var button = document.getElementById('button');
button.addEventListener('click', showModal);
var modalHidden = document.getElementsByClassName('modal-hidden');
var successModal = document.getElementById('success-modal');
var successModalMsg = document.getElementById('success-msg');
var failModal = document.getElementById('fail-modal');
var failModalMsg = document.getElementById('fail-msg');
function showModal() {
    if(arrayError.length > 0) {
        modalHidden[0].classList.remove('modal-hidden');
        successModal.style.display = 'none';
        failModal.style.display = 'block';
        failModalMsg.innerHTML = '<ul class="modal-list">' + concatenateErrors + '</ul>';
    } else if (concatenateOk.length >= 10) {
        modalHidden[0].classList.remove('modal-hidden');
        failModal.style.display = 'none';
        successModal.style.display = 'block';
        successModalMsg.innerHTML = '<ul class="modal-list">' + concatenateOk + '</ul>';
    } else {
        alert('Please, complete the form.');
    }
}

// Button -> close
var buttonX = document.getElementsByClassName('close-modal');
var modalHiddenID = document.getElementById('modal');
for (let i = 0; i < buttonX.length; i++) {
    buttonX[i].addEventListener('click', closeModal);
}
function closeModal() {
    modalHiddenID.classList.add('modal-hidden');
}

//BONUS
var bonus = document.getElementById('hello');
fullName.addEventListener('keyup', completeHello);
// We have to use 'keydown' but I added 'keyup' because if I didn't do that the
// last character I typed in the Full Name Input was not showing.
fullName.addEventListener('keydown', completeHello);
function completeHello(e) {
    bonus.innerHTML = 'Hello ' + e.target.value + '!';
}