document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = users.find((user) => user?.isLogined == true);

    if (!currentUser) {
        sweetToast("Zəhmət olmasa daxil olun");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);
        return;
    }
    
    let userIndex = users.findIndex((user) => user.id == currentUser.id);
    let userBtn = document.querySelector(".username")
    userBtn.textContent = currentUser?.username;

    let basket = currentUser.basket || [];

    let login = document.querySelector(".login");
    let register = document.querySelector(".register");
    let logout = document.querySelector(".logout");

    let logoutUserFunction = () => {
        currentUser.isLogined = false;
        localStorage.setItem("users", JSON.stringify(users));
        userBtn.textContent = "username";
        uptadeUserStatus();
    };
    logout.addEventListener("click", logoutUserFunction);

    function uptadeUserStatus() {
        let currentUser = users.find((user) => user.isLogined == true)
        if(currentUser) {
            register.classList.add("d-none");
            login.classList.add("d-none");
            logout.classList.remove("d-none");
        } else {
            register.classList.remove("d-none");
            login.classList.remove("d-none");
            logout.classList.add("d-none");
        }
    }

    let products = [];
    function createUserCard() {
        let cards = document.querySelector(".cards");

        const getData = async() => {
            const response = await (await fetch("http://localhost:3000/products")).json();
            products = response;

            products.forEach((product) => {
                let card = document.createElement("div");
                card.classList.add("card");
                card.style.cursor = "pointer";
                card.addEventListener("click", () => {
                    window.location.href = `product_detail.html?id=${product.id}`;
                })
    
                let heartIcon = document.createElement("i");
                heartIcon.classList.add("fa-regular","fa-heart", "card-heart");

                let inWishlist = currentUser.wishlist.some(wishlist => wishlist.id === product.id);
                if(inWishlist) {
                    heartIcon.classList.add("fa-solid");
                }
    
                heartIcon.addEventListener("click", (e) => {
                    e.stopPropagation();
                    toggleAddWishList(product.id, heartIcon);
                })
        
                let cardImage = document.createElement("div");
                cardImage.classList.add("card-image");
        
                let img = document.createElement("img");
                img.src = product.image;
                cardImage.appendChild(img);
        
                let cardContent = document.createElement("div");
                cardContent.classList.add("card-content");
        
                let cardTitle = document.createElement("h2");
                cardTitle.classList.add("card-title");
                cardTitle.textContent = `${product.title.slice(0,18)}...`;
        
                let cardCategory = document.createElement("p");
                cardCategory.classList.add("card-category");
                cardCategory.textContent = product.category;
        
                let cardFooter = document.createElement("div");
                cardFooter.classList.add("card-footer");
        
                let cardPrice = document.createElement("span");
                cardPrice.classList.add("card-price");
                cardPrice.textContent = product.price;
        
                let cardRating = document.createElement("div");
                cardRating.classList.add("card-rating");
        
                let rating = document.createElement("span");
                rating.textContent = `⭐ ${product.rating.rate}`;
        
                let cardReview = document.createElement("span");
                cardReview.textContent = `(${product.rating.count})`;
    
                let addBtn = document.createElement("button");
                addBtn.classList.add("btn", "btn-primary", "add-to-cart");
                addBtn.textContent = "Add Basket";
                addBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    addBasket(product.id);
                });
        
                cardRating.append(rating, cardReview);
                cardFooter.append(cardPrice, cardRating);
                cardContent.append(cardTitle, cardCategory, cardFooter, addBtn);
                card.append(heartIcon, cardImage, cardContent);
                cards.appendChild(card);
            });
        }
        getData();
    }

    function toggleAddWishList(productId, heartIcon){
        if (!currentUser) {
            sweetToast("Zəhmət olmasa əvvəlcə qeydiyyatdan keçin və ya daxil olun.");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
            return;
        }

        let findProductIndex = currentUser.wishlist.findIndex((item) => item.id == productId);

        let findProduct = currentUser.wishlist.some((product) => product.id == productId)

        if (!findProduct) {
            let newProduct = products.find((product) => product.id == productId);

            currentUser.wishlist.push(newProduct);
            users[userIndex] = currentUser;
            localStorage.setItem("users", JSON.stringify(users));
            sweetToast("Products added to wishlist...");

            heartIcon.classList.remove("fa-regular");
            heartIcon.classList.add("fa-solid");
        } else{
            currentUser.wishlist.splice(findProductIndex, 1);
            users[userIndex] = currentUser;
            localStorage.setItem("users", JSON.stringify(users));
            sweetToast("Product added to whislist...");

            heartIcon.classList.add("fa-regular");
            heartIcon.classList.remove("fa-solid");
        }
    }

    function addBasket(productId){
        if (!currentUser) {
            sweetToast("Please login to basket");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
            return;
        }

        let findProduct = basket.find((product) => product.id == productId);
    
        if (findProduct) {
            findProduct.count++;
        } else {
            let existProduct = products.find((product) => product.id == productId);
            basket.push({...existProduct, count: 1});
        }
    
        users[userIndex].basket = basket;
        localStorage.setItem("users", JSON.stringify(users));
        sweetToast("Product added to basket successfully...");
        basketCount();
    }

    function basketCount(){
        let basketItemCount = basket.reduce(
            (acc, product) => acc + product.count,
            0
        );

        let basketCountElem = document.querySelector(".basketIcon sup");
        basketCountElem.textContent = basketItemCount;
    }
    
    basketCount();
    uptadeUserStatus();
    createUserCard();
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