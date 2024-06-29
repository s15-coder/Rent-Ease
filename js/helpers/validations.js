class Validations {
    isValidEmail(email) {
        const emailValue = email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            return false;
        }
        return true;
    }
    validatePassword(password) {
        const passwordValue = password.value.trim();
        if (passwordValue.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;
        if (!passwordRegex.test(passwordValue)) {
            return 'Password must contain at least one letter, one number, and one special character';
        }
        return false
    }
    validateBirthDate(birthDate) {
        const birthDateValue = birthDate.value;
        const currentDate = new Date();
        const age = currentDate.getFullYear() - new Date(birthDateValue).getFullYear();
        if (age < 18 || age > 120) {
            return false;
        }
        return true;
    }
}