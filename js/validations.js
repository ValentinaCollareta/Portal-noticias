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