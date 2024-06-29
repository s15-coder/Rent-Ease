
const users = new Users();
const user = users.getCurrentUser();
document.getElementById('email').value = user.email;
document.getElementById('firstName').value = user.firstName;
document.getElementById('lastName').value = user.lastName;
document.getElementById('birthDate').value = user.birthDate;

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDate = document.getElementById('birthDate').value;
    const isValidData = validateFields();
    if (!isValidData) return;
    const usersController = new Users();
    usersController.updateUser({ email, firstName, lastName, birthDate });
    alert('Profile updated successfully');
    window.location.href = '../home/index.html';


});
function validateFields() {

    const validations = new Validations();
    if (!validations.isValidEmail(email)) {
        alert('Please enter a valid email address');
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