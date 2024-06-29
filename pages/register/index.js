const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const birthDate = document.querySelector('#birthDate');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValidData = validateFields();
    if (!isValidData) return;
    const users = new Users()
    const user = new User(
        email.value,
        password.value,
        firstName.value,
        lastName.value,
        birthDate.value
    );
    const userCreated = users.addUser(user);

    if (userCreated) {
        alert('User created successfully');
        window.location.href = '../home/index.html';
    }
    else {
        alert('User already exists');
    }

});


function validateFields() {
    const validations = new Validations();
    if (!validations.isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    const passwordError = validations.validatePassword(password);
    if (passwordError) {
        alert(passwordError);
        return false;
    }

    const confirmPasswordValue = confirmPassword.value.trim();
    const passwordValue = password.value.trim();

    if (passwordValue !== confirmPasswordValue) {
        alert('Password and confirm password do not match');
        return false;
    }

    const firstNameValue = firstName.value.trim();
    if (firstNameValue.length < 2) {
        alert('First name must be at least 2 characters long');
        return false;
    }

    const lastNameValue = lastName.value.trim();
    if (lastNameValue.length < 2) {
        alert('Last name must be at least 2 characters long');
        return false;
    }

    if (!validations.validateBirthDate(birthDate)) {
        alert('You must be between 18 and 120 years old to register');
        return false;
    }
    return true;
}