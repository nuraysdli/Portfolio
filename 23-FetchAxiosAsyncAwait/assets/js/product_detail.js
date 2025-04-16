document.addEventListener("DOMContentLoaded", () => {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = users.find((user) => user?.isLogined == true);

    let userIndex = users.findIndex((user) => user.id == currentUser.id);

    let basket = currentUser.basket;

    const url = new URLSearchParams(location.search);
    const id = url.get("id");

    const getData = async() => {
        const response = await axios("http://localhost:3000/products");
        let products = response.data;
        console.log(products);

        const productContainer = document.querySelector(".product-container");

    let findProduct = products.find((p) => p.id == Number(id));
    if (!findProduct) {
        console.error("Product not found for ID:", id);
        return;
    }

    productContainer.innerHTML = `
        <div class="product-image">
            <img class="img" src="${findProduct.image}" alt="Product Image">
        </div>

        <div class="product-details">
            <h4 class="product-title">${findProduct.title}</h4>
            <p class="product-category">${findProduct.category}</p>
            <p id="price-${findProduct.id}" class="product-price">${findProduct.price}</p>
            <p class="product-description">${findProduct.description}</p>

            <div class="product-rating">
                <span>⭐ ${findProduct.rating.rate}</span>
                <span>(${findProduct.rating.count} reviews)</span>
            </div>

            <div class="quantity-selector">
                <button class="btn-minus" disabled>-</button>
                <span class="basket-count">1</span>
                <button class="btn-plus">+</button>
            </div>

            <button class="btn btn-danger add-to-cart-btn">Add to Cart</button>
        </div>
    `;

    const plusBtn = document.querySelector(".btn-plus");
    const minusBtn = document.querySelector(".btn-minus");
    const countElem = document.querySelector(".basket-count");
    const addToCartBtn = document.querySelector(".add-to-cart-btn");

    let productCount = 1;

    plusBtn.addEventListener("click", () => {
        productCount++;
        countElem.textContent = productCount;
        if (productCount > 1) minusBtn.disabled = false;
        updatePrice();
        sweetToast("Product added");
    });

    minusBtn.addEventListener("click", () => {
        if (productCount > 1) {
            productCount--;
            countElem.textContent = productCount;
            if (productCount === 1) minusBtn.disabled = true;
            updatePrice();
            sweetToast("Product removed");
        }
    });

    addToCartBtn.addEventListener("click", () => {
        if (!currentUser) {
            sweetToast("Please login to basket");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
            return;
        }

        let exist = basket.find((item) => item.id === findProduct.id);
        if (exist) {
            exist.count += productCount;
        } else {
            basket.push({ ...findProduct, count: productCount });
        }

        users[userIndex].basket = basket;
        localStorage.setItem("users", JSON.stringify(users));
        sweetToast("Product added to basket successfully...");
    });

    function updatePrice() {
        const priceElem = document.getElementById(`price-${findProduct.id}`);
        priceElem.textContent = (findProduct.price * productCount).toFixed(2);
    }


    updatePrice();
    }

    getData();
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
