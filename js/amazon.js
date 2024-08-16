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
        <select class="product-quantity">
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
        <div class="product-add">
            <img src="./assets/checkmark.png" alt="">
            <p>Added</p>
        </div>
        <button class="btn js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>
        <button class="btn product-buy">Buy Now</button>
    </div>`;
});

document.querySelector('.js-product-box').innerHTML = productsHTML;
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        let matchingItem;

        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

        let cartQuantity = 0;
        cart.forEach((item) => {
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
});