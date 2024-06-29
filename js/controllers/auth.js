const userController = new Users()
const currentUser = userController.getCurrentUser();
if (!currentUser) {
    window.location.href = '../../index.html';
}
const userInfo = document.querySelector('.user-info span');
userInfo.textContent = `Hello - ${currentUser.firstName} `;

document.querySelector('.logout-btn').addEventListener('click', () => {
    userController.logout();
    window.location.href = '../../index.html';

});