import { cart, removeFromCart } from "./cart.js";
import { products } from "./product.js";

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;
    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    cartSummaryHTML +=
        `
        <div class="product-cart-list js-product-cart-list-${matchingProduct.id}">
            <img src="${matchingProduct.image}" alt="">
            <div class="product-info">
                <div class="product-cart-titleprice">
                    <h2>${matchingProduct.name}</h2>
                    <p class="product-cart-price">$${matchingProduct.price}</p>
                </div>
                <p class="product-cart-stock">In Stock</p>
                <div class="cart-list-action">
                    <a href="#" class="cartAmount-minus-icon"><span>&#8722</span></a>
                        <span class="product-cart-quantity">${cartItem.quantity}</span>
                    <a href="#" class="cartAmount-plus-icon"><span>&#43</span></a>
                    <p class="action-btn js-cart-delete" data-product-id="${matchingProduct.id}">Delete</p>
                    <p class="action-btn-save">Save for later</p>
                </div>
            </div>

            <div class="delivery-options">
                <h2>Choose a delivery option:</h2>
                <div class="delivery-options-box">
                    <div class="delivery-option">
                        <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                        <div class="delivery-option-list">
                            <p class="delivery-option-date">Mon, August 19</p>
                            <p class="delivery-option-price">FREE Shipping</p>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                        <div class="delivery-option-list">
                            <p class="delivery-option-date">Tue, August 13</p>
                            <p class="delivery-option-price">$30 - Shipping</p>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio" class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                        <div class="delivery-option-list">
                            <p class="delivery-option-date">Fri, August 9</p>
                            <p class="delivery-option-price">$60 - Shipping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.js-cart-left').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-cart-delete').forEach((link) => {
    link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(
            `.js-product-cart-list-${productId}`
        );
        container.remove();
    });
});