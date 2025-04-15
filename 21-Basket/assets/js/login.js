document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let form = document.querySelector("form");
    let usernameInput = document.querySelector("#username");
    let passwordInput = document.querySelector("#password");

    let loginAttempts = JSON.parse(localStorage.getItem("loginAttempts")) || {};

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let username = usernameInput.value;
        let password = passwordInput.value;

        let usernameOk = username.length >= 3 && username.length <= 20;
        let passwordOk = password.length >= 8;

        if (!usernameOk) {
            sweetToast("İstifadəçi adı yanlışdır");
            return;
        }

        if (!passwordOk) {
            sweetToast("Şifrə ən az 8 simvol olmalıdır!");
            return;
        }

        let currentTime = Date.now();
        let userAttempts = loginAttempts[username] || { count: 0, blockedUntil: 0 };

        if (currentTime < userAttempts.blockedUntil) {
            sweetToast("Çox sayda yanlış cəhd! 15 dəqiqə sonra yenidən yoxlayın.");
            return;
        }

        let userFound = false;
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === username || users[i].email === username) && users[i].password === password) {
                users[i].isLogined = true;
                localStorage.setItem("users", JSON.stringify(users));
                sweetToast("Uğurla daxil oldunuz!");

                loginAttempts[username] = { count: 0, blockedUntil: 0 };
                localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));

                setTimeout(function() {
                    window.location.href = "index.html";
                }, 3000);
                userFound = true;
                break;
            }
        }

        if (!userFound) {
            if (!loginAttempts[username]) {
                loginAttempts[username] = { count: 1, blockedUntil: 0 };
            } else {
                loginAttempts[username].count += 1;

                if (loginAttempts[username].count >= 3) {
                    loginAttempts[username].blockedUntil = currentTime + 15 * 60 * 1000;
                    sweetToast("3 dəfə səhv etdiniz. Hesab 15 dəqiqəlik bloklandı!");
                } else {
                    sweetToast("İstifadəçi adı və ya şifrə səhvdir!");
                }
            }

            localStorage.setItem("loginAttempts", JSON.stringify(loginAttempts));

            usernameInput.value = "";
            passwordInput.value = "";
        }
    });
});

function sweetToast(text) {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)"
        }
    }).showToast();
}
