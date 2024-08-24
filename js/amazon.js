import { cart, addToCart } from './cart.js';
import { products } from './product.js';

let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
    <div class="product-card">
        <img src="${product.image}" class="product-img" alt="">
        <h2>${product.name}
        </h2>
        <div class="product-rating">
            <img src="./assets/rating/rating-${product.rating.stars * 10}.png" class="rating-img" alt="">
            <a href="#" class="product-reviews">${product.rating.count}</a>
        </div>
        <p>$${product.price}</p>
        <select class="product-quantity js-product-quantity-${product.id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
        </select>
        <div class="product-add js-added-to-cart-${product.id}">
            <img src="./assets/checkmark.png" alt="">
            <p>Added</p>
        </div>
        <button class="btn js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        <a href="./cart.html"><button class="btn product-buy">Buy Now</button></a>
    </div>`;
});

document.querySelector('.js-product-box').innerHTML = productsHTML;

function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
};

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
        const addedMessage = document.querySelector(
            `.js-added-to-cart-${productId}`
        );

        addedMessage.classList.add('added-to-cart-visible');

        setTimeout(() => {
            addedMessage.classList.remove('added-to-cart-visible');
        }, 2000);
    });
});
