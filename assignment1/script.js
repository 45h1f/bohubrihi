// Get DOM elements
const productButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsList = document.querySelector('.cart-items');

// Cart to store selected products
const cart = [];

// Add product to cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartUI();
}

// Remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Update the cart UI
function updateCartUI() {
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${item.price}
            <button class="remove-from-cart-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsList.appendChild(li);
    });
}

// Product availability flag
const productAdded = {};

// Attach click event listeners to product buttons
productButtons.forEach((button, index) => {
    const productName = button.parentElement.querySelector('.product-name').textContent;

    // Set product availability flag initially
    productAdded[productName] = false;

    button.addEventListener('click', () => {
        if (!productAdded[productName]) {
            const productPrice = button.parentElement.querySelector('.product-price').textContent;
            addToCart(productName, productPrice);
            productAdded[productName] = true;
            button.disabled = true;
        }
    });
});
