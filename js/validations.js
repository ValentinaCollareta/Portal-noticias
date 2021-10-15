// FORM VALIDATIONS

// Array Error & Array Ok
var arrayOk = [];
var arrayError = [];

// Full Name
var fullName = document.querySelector('input[id="name"]');
var validationName = document.getElementById('validationName');
fullName.addEventListener('blur', invalidName);
fullName.addEventListener('focus', focusName);
function invalidName() {
    let input = fullName.value;
    if (input.length < 6 || input.indexOf(' ') == -1) {
        validationName.innerHTML = 'The Name must be more than 6 letters and at least have 1 space.';
        arrayError.push('-Error in Full Name: '
        + 'The Name must be more than 6 letters and at least have 1 space.' + '\n');
    } else {
        arrayOk.push('Full Name: ' + input + '\n');
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
    if (input.indexOf('@') == -1 || input.indexOf('.') == -1) {
        validationEmail.innerHTML = 'Invalid email. It must have @ and at least 1 point.';
        arrayError.push('-Error in Email: '
        + 'The Email must have @ and at least 1 point.' + '\n');
    } else {
        arrayOk.push('Email: ' + input + '\n');
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
        arrayError.push('-Error in Password: '
        + 'The Password must have 8 characters ore more.' + '\n');
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0) {
        validationPassword.innerHTML = 'The Password must have letters and numbers.';
        arrayError.push('-Error in Password: '
        + 'The Password must have letters and numbers.' + '\n');
    } else {
        if (input.length >= 8) {
            arrayOk.push('Password: ' + input + '\n');
        }
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
        arrayError.push('-Error in Confirm Password: '
        + 'The Passwords do not match.' + '\n');
    } else {
        arrayOk.push('Confirm Password: ' + input + '\n');
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
        arrayError.push('-Error in Age: '
        + 'The Age must be greater or equal than 18.' + '\n');
    }
    if (!Number.isInteger(input)) {
        validationAge.innerHTML = 'The Age must be an integer number.';
        arrayError.push('-Error in Age: '
        + 'The Age must be an integer number.' + '\n');
    }
    if (input >= 18 && Number.isInteger(input)){
        arrayOk.push('Age: ' + input + '\n');
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
    let inputNumber = parseFloat(phone.value);
    if (input.length < 7) {
        validationPhone.innerHTML = 'The Phone must have at least 7 numbers.';
        arrayError.push('-Error in Phone Number: '
        + 'The Phone must have at least 7 numbers.' + '\n');
    }
    if (isNaN(inputNumber)) {
        validationPhone.innerHTML = 'Only numbers are allowed.';
        arrayError.push('-Error in Phone Number: '
        + 'Only numbers are allowed.' + '\n');
    }
    if (input.length >= 7 && !isNaN(inputNumber)) {
        arrayOk.push('Phone Number: ' + input + '\n');
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
        arrayError.push('-Error in Adress: '
        + 'The Adress must have at least 5 characters.' + '\n');
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0 || input.indexOf(' ') == -1) {
        validationAdress.innerHTML = 'The Adress must have letters, numbers and at least 1 space.';
        arrayError.push('-Error in Adress: '
        + 'The Adress must have letters, numbers and at least 1 space.' + '\n');
    } else {
        if (input.length >= 5) {
            arrayOk.push('Adress: ' + input + '\n');
        }
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
        arrayError.push('-Error in City: '
        + 'The City must have at least 3 characters.' + '\n');
    } else {
        arrayOk.push('City: ' + input + '\n');
    }
}
function focusCity() {
    validationCity.innerHTML = '';
}

// Postcode
var postcode = document.querySelector('input[id="postcode"]');
var validationPostcode = document.getElementById('validationPostcode');
postcode.addEventListener('blur', invalidPostcode);
postcode.addEventListener('focus', focusPost);
function invalidPostcode() {
    let input = postcode.value;
    if (input.length < 3) {
        validationPostcode.innerHTML = 'The Postcode must have at least 3 characters.';
        arrayError.push('-Error in Postcode: '
        + 'The Postcode must have at least 3 characters.' + '\n');
    } else {
        arrayOk.push('Postcode: ' + input + '\n');
    }
}
function focusPost() {
    validationPostcode.innerHTML = '';
}

// DNI
var dni = document.querySelector('input[id="dni"]');
var validationDni = document.getElementById('validationDni');
dni.addEventListener('blur', invalidDni);
dni.addEventListener('focus', focusDni);
function invalidDni() {
    let input = dni.value;
    if (input.length >= 7 && input.length <=8) {
        validationDni.innerHTML = '';
        arrayOk.push('DNI: ' + input);
    } else {
        validationDni.innerHTML = 'The Dni must have 7 or 8 numbers.';
        arrayError.push('-Error in Dni: '
        + 'The Dni must have 7 or 8 numbers.');
    }
}
function focusDni() {
    validationDni.innerHTML = '';
}

// Button -> Send
var button = document.getElementById('button');
button.addEventListener('click', alertButton);
function alertButton() {
    if(arrayError.length > 0) {
        let setArray = new Set(arrayError);
        let result = [...setArray]
        alert(result.join(''));
    } else {
        alert(arrayOk.join(''));
    }
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