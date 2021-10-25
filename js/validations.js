// FORM VALIDATIONS JS

// Counter
var counterOk = 0;

// Principal object
var formObj = {
    fullName : null,
    email : null,
    password : null,
    confirmPassword : null,
    age : null,
    phone : null,
    adress : null,
    city : null,
    postcode : null,
    id : null
}

// Error object for modal
var errorObj = {
    fullName : null,
    email : null,
    password : null,
    confirmPassword : null,
    age : null,
    phone : null,
    adress : null,
    city : null,
    postcode : null,
    id : null
}

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
        formObj.fullName = 0;
        errorObj.fullName = '<li>' + '-Error in Full Name.' + '</li>';
    } else {
        formObj.fullName = '<li>' + 'Full Name: ' + input + '</li>';
        counterOk += 1;
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
        formObj.email = 0;
        errorObj.email = '<li>' + '-Error in Email.' + '</li>';
    } else {
        formObj.email = '<li>' + 'Email: ' + input + '</li>';
        counterOk += 1;
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
        formObj.password = 0;
        errorObj.password = '<li>' + '-Error in Password.' + '</li>';
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0) {
        invalidPassword.innerHTML = 'The Password must have letters and numbers.';
        formObj.password = 0;
        errorObj.password = '<li>' + '-Error in Password.' + '</li>';
    } else if (input.length >= 8) {
        formObj.password = '<li>' + 'Password: ' + input + '</li>';
        counterOk += 1;
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
        formObj.confirmPassword = 0;
        errorObj.confirmPassword = '<li>' + '-Error in Confirm Password.' + '</li>';
    } else {
        formObj.confirmPassword = '<li>' + 'Confirm Password: ' + input + '</li>';
        counterOk += 1;
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
        formObj.age = 0;
        errorObj.age = '<li>' + '-Error in Age.' + '</li>';
    }
    if (!Number.isInteger(input)) {
        invalidAge.innerHTML = 'The Age must be an integer number.';
        formObj.age = 0;
        errorObj.age = '<li>' + '-Error in Age.' + '</li>';
    }
    if (input >= 18 && Number.isInteger(input)){
        formObj.age = '<li>' + 'Age: ' + input + '</li>';
        counterOk += 1;
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
        formObj.phone = 0;
        errorObj.phone = '<li>' + '-Error in Phone Number.' + '</li>';
    }
    if (isNaN(inputNumber)) {
        invalidPhone.innerHTML = 'Only numbers are allowed.';
        formObj.phone = 0;
        errorObj.phone = '<li>' + '-Error in Phone Number.' + '</li>';
    }
    if (input.length >= 7 && !isNaN(inputNumber)) {
        formObj.phone = '<li>' + 'Phone Number: ' + input + '</li>';
        counterOk += 1;
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
        formObj.adress = 0;
        errorObj.adress = '<li>' + '-Error in Adress.' + '</li>';
    }
    if (input.search(/[a-z]/i) < 0 || input.search(/[0-9]/) < 0 || input.indexOf(' ') == -1) {
        invalidAdress.innerHTML = 'The Adress must have letters, numbers and at least 1 space.';
        formObj.adress = 0;
        errorObj.adress = '<li>' + '-Error in Adress.' + '</li>';
    } else if (input.length >= 5) {
        formObj.adress = '<li>' + 'Adress: ' + input + '</li>';
        counterOk += 1;
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
        formObj.city = 0;
        errorObj.city = '<li>' + '-Error in City.' + '</li>';
    } else {
        formObj.city = '<li>' + 'City: ' + input + '</li>';
        counterOk += 1;
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
        formObj.postcode = 0;
        errorObj.postcode = '<li>' + '-Error in Postcode.' + '</li>';
    } else {
        formObj.postcode = '<li>' + 'Postcode: ' + input + '</li>';
        counterOk += 1;
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
        formObj.id = '<li>' + 'ID: ' + input + '</li>';
        counterOk += 1;
    } else {
        invalidId.innerHTML = 'The Id must have 7 or 8 numbers.';
        formObj.id = '-Error in Id: The Id must have 7 or 8 numbers.';
        errorObj.id = '<li>' + formObj.id + '</li>';
    }
}

// Button -> JSON
var button = document.getElementById('button');
var showError;
var setDataBoolean;
button.addEventListener('click', sendData);
function sendData() {
    showModal();
    var url = "https://curso-dev-2021.herokuapp.com/newsletter?name=" + fullName.value + "&email=" + email.value
    + "&password=" + password.value + "&confirmPassword=" + confirmPassword.value + "&age=" + age.value
    + "&phone=" + phone.value + "&adress=" + adress.value + "&city=" + city.value + "&postcode=" + postcode.value
    + "&id=" + id.value;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setData();
            console.log(data);
        })
        .catch(function(error) {
            showError = error;
            var newElement = document.createElement('p');
            var newContent = document.createTextNode(showError);
            newElement.appendChild(newContent);
            var currentElement = document.getElementById('fail-msg');
            var parentElement = document.getElementById('fail-modal');
            parentElement.insertBefore(newElement, currentElement);
            return setDataBoolean = false;
        });
}

// LocalStorage
function setData() {
    localStorage.setItem('name', fullName.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('confirmPassword', confirmPassword.value);
    localStorage.setItem('age', age.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('adress', adress.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('postcode', postcode.value);
    localStorage.setItem('id', id.value);
    return setDataBoolean = true;
}

// Button -> Send
var modalHidden = document.getElementsByClassName('modal-hidden');
var successModal = document.getElementById('success-modal');
var successModalMsg = document.getElementById('success-msg');
var failModal = document.getElementById('fail-modal');
var failModalMsg = document.getElementById('fail-msg');
var valuesOfErrorObj = Object.values(errorObj);
function showModal() {
    // if (counterOk < 10) {
    //     return alert('Please, complete the form.');
    // }
    if (errorObj.fullName != null) {
        modalHidden[0].classList.remove('modal-hidden');
        successModal.style.display = 'none';
        failModal.style.display = 'block';
        failModalMsg.innerHTML = '<ul class="modal-list">' + 'hola' + '</ul>';
    } else {
        modalHidden[0].classList.remove('modal-hidden');
        failModal.style.display = 'none';
        successModal.style.display = 'block';
        successModalMsg.innerHTML = '<ul class="modal-list">'
        + formObj.fullName + formObj.email + formObj.password + formObj.confirmPassword
        + formObj.age + formObj.phone + formObj.adress + formObj.city + formObj.postcode + formObj.id
        + '</ul>';
        // clearOption();
    }
}

// Modal Button -> close
var buttonX = document.getElementsByClassName('close-modal');
var modalHiddenID = document.getElementById('modal');
for (let i = 0; i < buttonX.length; i++) {
    buttonX[i].addEventListener('click', closeModal);
}
function closeModal() {
    modalHiddenID.classList.add('modal-hidden');
}

// ONLOAD
window.onload = function() {
    if (setDataBoolean != false) {
        fullName.value = localStorage.getItem('name');
        email.value = localStorage.getItem('email');
        password.value = localStorage.getItem('password');
        confirmPassword.value = localStorage.getItem('confirmPassword');
        age.value = localStorage.getItem('age');
        phone.value = localStorage.getItem('phone');
        adress.value = localStorage.getItem('adress');
        city.value = localStorage.getItem('city');
        postcode.value = localStorage.getItem('postcode');
        id.value = localStorage.getItem('id');
    }
}

// var buttonToChange = document.getElementById('send');
// buttonToChange.addEventListener('click', () => alert('You are already subscribed.'));

// Clear Option
function clearOption() {
    var newButtonChange = document.createElement('p');
    var newTextButton = document.createTextNode('Clear values');
    newButtonChange.appendChild(newTextButton);
    var currentButton = document.getElementById('send');
    var parentButton = document.getElementById('button');
    parentButton.insertBefore(newButtonChange, currentButton);
    newButtonChange.addEventListener('click', () => localStorage.clear());
    newButtonChange.addEventListener('click', () => location.reload());
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