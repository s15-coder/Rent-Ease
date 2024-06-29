const userController = new Users();

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const hasLoggedIn = userController.login(email, password);
    if (hasLoggedIn) {
        window.location.href = '../pages/home/index.html';
    } else {
        alert('Invalid email or password');
    }
});
document.querySelector('.secondary-button').addEventListener('click', () => {
    window.location.href = '../pages/register/index.html';
});