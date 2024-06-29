
class Users {

    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }


    addUser(user) {
        const existingUser = this.users.find(u => u.email === user.email);
        if (existingUser) {
            return false;
        }
        const encryptedPassword = this.encryptPassword(user.password);
        const newUser = { ...user, password: encryptedPassword, flats: [] };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));

        return true;
    }

    encryptPassword(password) {
        return password.split('').reverse().join('');
    }

    decryptPassword(encryptedPassword) {
        return encryptedPassword.split('').reverse().join('');
    }

    login(email, password) {
        const user = this.users.find(u => u.email === email.toLowerCase());
        if (!user) {
            return false;
        }

        const decryptedPassword = this.decryptPassword(user.password);
        const isLoggedIn = decryptedPassword === password;
        if (isLoggedIn) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return isLoggedIn
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    addFavoriteFlat(flatId) {
        let flatAdded = false;
        const currentUser = this.getCurrentUser();

        if (this.isFavoriteFlat(flatId)) {
            currentUser.flats = currentUser.flats.filter(f => f !== flatId);
            flatAdded = false;
        } else {
            currentUser.flats.push(flatId);
            flatAdded = true;
        }
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.users = this.users.map(u => u.email === currentUser.email ? currentUser : u);
        localStorage.setItem('users', JSON.stringify(this.users));
        return flatAdded;
    }
    removeFavoriteFlat(flatId) {
        const currentUser = this.getCurrentUser();
        currentUser.flats = currentUser.flats.filter(f => f !== flatId);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.users = this.users.map(u => u.email === currentUser.email ? currentUser : u);
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    isFavoriteFlat(flatId) {
        const currentUser = this.getCurrentUser();
        return currentUser.flats.includes(flatId.toString());
    }
    getFavorites() {
        const currentUser = this.getCurrentUser();
        return currentUser.flats;
    }
    updateUser(user) {
        const currentUser = this.getCurrentUser();
        const newUser = { ...currentUser, ...user };
        this.users = this.users.map(u => u.email === currentUser.email ? newUser : u);
        localStorage.setItem('users', JSON.stringify(this.users));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
    }
}