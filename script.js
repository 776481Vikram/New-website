let cart = [];
let total = 0;

// Add product to cart
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();
}

// Update cart
function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartCount.textContent = cart.length;
    cartTotal.textContent = total.toLocaleString("en-IN");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>

                <strong>
                    ₹${item.price.toLocaleString("en-IN")}
                </strong>

                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </div>
        `;
    });
}

// Remove product
function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();
}

// Search products
function searchProducts() {

    const searchValue =
        document.getElementById("search").value.toLowerCase();

    const products =
        document.querySelectorAll(".product");

    products.forEach(product => {

        const productName =
            product.dataset.name.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Scroll to products
function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}

// Checkout
function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert(
        "Order placed successfully!\nTotal: ₹" +
        total.toLocaleString("en-IN")
    );

    cart = [];
    total = 0;

    updateCart();
}