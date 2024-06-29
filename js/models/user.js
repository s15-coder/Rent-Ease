class User {
    constructor(email, password, firstName, lastName, birthDate) {
        this.email = email.toLowerCase();
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.favorites = [];
    }
}

