document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users"));

    let currentUser = users.find((user) => user.isLogined == true);

    if (!currentUser) {
        sweetToast("Zəhmət olmasa, əvvəlcə daxil olun!");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
        return;
    };

    let userWishlist = currentUser.wishlist || [];

    function createWishlistItem() {

        userWishlist.forEach(item => {
            let wishlistTag = document.querySelector(".wishlist");

        let wishlistItem = document.createElement("div");
        wishlistItem.classList.add("wishlist-item");

        let wishImage = document.createElement("div");
        wishImage.classList.add("image")

        let image = document.createElement("img");
        image.src = item.image;
        wishImage.appendChild(image);

        let wishTitle = document.createElement("h5");
        wishTitle.classList.add("title");
        wishTitle.textContent = item.title.slice(0,20) + "...";

        let wishCategory = document.createElement("p");
        wishCategory.classList.add("category");
        wishCategory.textContent = item.category;

        let wishPrice = document.createElement("p");
        wishPrice.classList.add("price");
        wishPrice.textContent = item.price;

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-danger", "remove-btn");
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", () => {
            removeWishlistItem(item.id);
        })

        wishlistItem.append(wishImage, wishTitle, wishCategory, wishPrice, removeBtn);
        wishlistTag.appendChild(wishlistItem);
        });

        function removeWishlistItem(productId) {
            let usersIndex = users.findIndex((user) => user.id == currentUser.id);

            let findProductIndex = currentUser.wishlist.findIndex((product) => product.id == productId);

            if (findProductIndex != -1) {
                currentUser.wishlist.splice(findProductIndex, 1);
                users[usersIndex] = currentUser;
                localStorage.setItem("users", JSON.stringify(users));
                sweetToast("Product removed from wishlist...");
                window.location.reload();
            }
            currentUser.wishlist;
        }
    }
    createWishlistItem();

    let logoutBtn = document.querySelector(".logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            let userIndex = users.findIndex((u) => u.id === currentUser.id);
            users[userIndex].isLogined = false;
            users[userIndex].wishlist = [];
            localStorage.setItem("users", JSON.stringify(users));
            sweetToast("Çıxış etdiniz. Wishlist sıfırlandı.");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        });
    }

});

let sweetToast = (text) =>{
    Toastify({
        text: `${text}`,
        duration: 3000,
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
};