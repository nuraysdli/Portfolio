document.addEventListener("DOMContentLoaded", () =>{
    let users = JSON.parse(localStorage.getItem("users"));

    let currentUser = users.find((user) => user.isLogined == true);

    let userIndex = users.findIndex((user) => user.id == currentUser.id);

    let basket = currentUser.basket;

    function createBasketItem() {

        let basketArea = document.querySelector(".basket");
        basketArea.innerHTML = "";

        // let clearBtn = document.querySelector(".clear-basket");

        // if (basket.length === 0) {
        //     let emptyMessage = document.createElement("p");
        //     emptyMessage.classList.add("empty");
        //     emptyMessage.textContent = "Basket is empty";
        //     basketArea.appendChild(emptyMessage);
        //     clearBtn.style.display = "none";
        //     return;
        // } else {
        //     clearBtn.style.display = "inline-block";
        // }

        basket.forEach((product) => {
        let basketItem = document.createElement("div");
        basketItem.classList.add("basket-item");

        let basketImage = document.createElement("div");
        basketImage.classList.add("image");

        let img = document.createElement("img");
        img.src = product.image;
        basketImage.appendChild(img);

        let basketTitle = document.createElement("h6");
        basketTitle.classList.add("title");
        basketTitle.textContent = product.title;

        let basketCategory = document.createElement("p");
        basketCategory.classList.add("category");
        basketCategory.textContent = product.category;

        let basketPrice = document.createElement("p");
        basketPrice.classList.add("price");
        basketPrice.textContent = `${(product.price * product.count).toFixed(2)}`;
        basketPrice.id = `price-${product.id}`;

        let basketCountArea = document.createElement("div");
        basketCountArea.classList.add("count-area");

        let minusBtn = document.createElement("button");
        minusBtn.classList.add("minus-btn");
        minusBtn.textContent = "-";
        minusBtn.addEventListener("click", () => decrement(product.id, basketCount, minusBtn));

        let basketCount = document.createElement("p");
        basketCount.classList.add("count");
        basketCount.textContent = product.count;

        let plusBtn = document.createElement("button");
        plusBtn.classList.add("plus-btn");
        plusBtn.textContent = "+";
        plusBtn.addEventListener("click", () => increment(product.id, basketCount, minusBtn));

        let removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-danger");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeBasketItem(product.id));

        basketCountArea.append(minusBtn, basketCount, plusBtn);
        basketItem.append(basketImage, basketTitle, basketCategory, basketPrice, basketCountArea, removeBtn);
        basketArea.append(basketItem);
        });
    }

    function totalPrice() {
        let payment = basket.reduce((acc, item) => acc + item.price * item.count, 0);

        let totalElem = document.querySelector(".total-price");
        totalElem.textContent = payment.toFixed(2);
    }

    function removeBasketItem(productId){
        let findProductIndex = basket.findIndex((product) => product.id == productId);

        if(findProductIndex != -1) {
            basket.splice(findProductIndex, 1);
            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users));
            sweetToast("Product removeed from basket...");
        }
        createBasketItem();
        totalPrice();
    }

    function increment(productId, basketCount, minusBtn) {
        let existProduct = basket.find((product) => product.id == productId);

        if(existProduct) {
            existProduct.count++;
            basketCount.textContent = existProduct.count;

            if(existProduct.count > 1) {
                minusBtn.removeAttribute("disabled");
            }

            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users));
            sweetToast("Product added");
        }

        updateProductPrice(productId);
        totalPrice();
    }

    function decrement(productId, basketCount, minusBtn) {
        let existProduct = basket.find((product) => product.id == productId);

        if(existProduct) {
            existProduct.count--;
            basketCount.textContent = existProduct.count;

            if(existProduct.count == 1) {
                minusBtn.setAttribute("disabled", "true");
            }

            users[userIndex].basket = basket;
            localStorage.setItem("users", JSON.stringify(users));
            sweetToast("Product removed");
        }

        updateProductPrice(productId);
        totalPrice();
    }

    document.querySelector(".clear-basket").addEventListener("click", clearBasket);

    totalPrice();
    createBasketItem();

    function clearBasket() {
        if (basket.length === 0) {
            sweetToast("Basket is already empty");
            return;
        }
    
        let confirmClear = confirm("Are you sure you want to clear the basket?");
        if (!confirmClear) return;
    
        basket.length = 0;
        users[userIndex].basket = basket;
        localStorage.setItem("users", JSON.stringify(users));
        createBasketItem();
        totalPrice();
        sweetToast("All products removed from basket");
    }

    function updateProductPrice(productId) {
        let existProduct = basket.find((product) => product.id == productId);
        if (!existProduct) return;
    
        let priceElem = document.getElementById(`price-${productId}`);
        if (priceElem) {
            priceElem.textContent = `${(existProduct.price * existProduct.count).toFixed(2)}`;
        }
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