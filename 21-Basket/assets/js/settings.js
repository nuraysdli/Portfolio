document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let form = document.querySelector("#settings-form");
    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmPassword = document.querySelector("#confirmPassword");
    let currentUser = users.find(user => user.isLogined);
    
    if (currentUser) {
        name.value = currentUser.name;
        username.value = currentUser.username;
        email.value = currentUser.email;
    } else {
        sweetToast("Xahiş edirəm daxil olun.");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
    }

    form.addEventListener("submit", updateSettings);

    function updateSettings(e) {
        e.preventDefault();

        // Verilənləri yoxlayırıq
        if (password.value && password.value !== confirmPassword.value) {
            sweetToast("Şifrələr uyğun gəlmir.");
            return;
        }

        if (password.value && password.value.length < 8) {
            sweetToast("Şifrə minimum 8 simvol olmalıdır.");
            return;
        }

        currentUser.name = name.value;
        currentUser.username = username.value;
        currentUser.email = email.value;

        if (password.value) {
            currentUser.password = password.value;
        }

        localStorage.setItem("users", JSON.stringify(users));
        
        sweetToast("Məlumatlar uğurla yeniləndi.");
    }
});

let sweetToast = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        close: true,
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
};
