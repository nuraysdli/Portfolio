document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let form = document.querySelector("form");
    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmpassword");
    let passwordCheck = document.querySelector("#passwordCheck");

    // Şifrə güclü olduqda ✅ və ya ❌ göstər
    password.addEventListener("input", () => {
        if (isStrongPassword(password.value)) {
            passwordCheck.textContent = "✅";
            passwordCheck.style.color = "green";
        } else {
            passwordCheck.textContent = "❌";
            passwordCheck.style.color = "red";
        }
    });

    // Username yoxlaması
    function isValidUsername(username) {
        if (username.length < 3 || username.length > 20) return false;

        for (let i = 0; i < username.length; i++) {
            const char = username[i];
            const isLetter = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
            const isDigit = char >= '0' && char <= '9';
            const isUnderscoreOrDash = char === '_' || char === '-';
            if (!isLetter && !isDigit && !isUnderscoreOrDash) return false;
        }
        return true;
    }

    // Email yoxlaması
    function isValidEmail(email) {
        const atIndex = email.indexOf("@");
        const dotIndex = email.lastIndexOf(".");
        return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
    }

    // Güclü şifrə yoxlaması
    function isStrongPassword(password) {
        if (password.length < 8) return false;

        let hasUpper = false, hasLower = false, hasNumber = false, hasSpecial = false;

        for (let char of password) {
            if (char >= 'A' && char <= 'Z') hasUpper = true;
            else if (char >= 'a' && char <= 'z') hasLower = true;
            else if (char >= '0' && char <= '9') hasNumber = true;
            else hasSpecial = true;
        }

        return hasUpper && hasLower && hasNumber && hasSpecial;
    }

    // Form inputlara icon əlavə et
    function addValidationIcon(inputElement, isValid) {
        inputElement.style.borderColor = isValid ? "green" : "red";
    }

    // Validation input zamanı
    username.addEventListener("input", () => {
        addValidationIcon(username, isValidUsername(username.value));
    });

    email.addEventListener("input", () => {
        addValidationIcon(email, isValidEmail(email.value));
    });

    password.addEventListener("input", () => {
        addValidationIcon(password, isStrongPassword(password.value));
    });

    confirmPassword.addEventListener("input", () => {
        addValidationIcon(confirmPassword, password.value === confirmPassword.value);
    });

    // Submit
    form.addEventListener("submit", register);

    function register(e) {
        e.preventDefault();

        if (!isValidUsername(username.value)) {
            sweetToast("Username düzgün deyil!");
            return;
        }

        if (!isValidEmail(email.value)) {
            sweetToast("Email düzgün formatda deyil!");
            return;
        }

        if (!isStrongPassword(password.value)) {
            sweetToast("Zəif şifrə! Güclü bir şifrə daxil edin.");
            return;
        }

        if (password.value !== confirmPassword.value) {
            sweetToast("Şifrələr uyğun gəlmir!");
            return;
        }

        let isUserExist = users.some(user =>
            user.username === username.value || user.email === email.value
        );

        if (isUserExist) {
            sweetToast("Bu istifadəçi adı və ya email artıq mövcuddur!");
            return;
        }

        let newUser = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
            isLogined: false,
            id: uuidv4(),
            wishlist: [],
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        sweetToast("Qeydiyyat uğurla tamamlandı!");

        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
    }
});

function sweetToast(text) {
    Toastify({
        text,
        duration: 3000,
        close: true,
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}
