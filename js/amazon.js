const products = [{
    image: './assets/product1-1.jpg',
    name: 'HOTHANDS Hand Warmers - 40 Pair',
    rating: {
        stars: 5.0,
        count: 42127
    },
    price: 900
}, {
    image: './assets/product1-8.jpg',
    name: 'HOTHANDS Hand Warmers Value Pack',
    rating: {
        stars: 4.5,
        count: 11024
    },
    price: 424
}, {
    image: './assets/product1-3.jpg',
    name: 'OutdoorMaster OTG Ski Goggles - Over Glasses Ski/Snowboard Goggles for Men, Women & Youth - 100% UV Protection',
    rating: {
        stars: 4.0,
        count: 22204
    },
    price: 990
}, {
    image: './assets/product1-4.jpg',
    name: 'Prepared Hero Extra Large Emergency Fire Blanket - 1 Pack - Extra Large Fire Suppression Blanket for Kitchen, 47” x 71” XL Fire Blanket for Home, Fiberglass Fire Blanket, XL',
    rating: {
        stars: 4.5,
        count: 113
    },
    price: 1750
}];
let productsHTML = '';
products.forEach((product) => {
    productsHTML += `
    <div class="product-card">
        <img src="${product.image}" class="product-img" alt="">
        <h2>${product.name}
        </h2>
        <div class="product-rating">
            <img src="./assets/rating-${product.rating.stars * 10}.png" class="rating-img" alt="">
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
        <button class="btn">Add to Cart</button>
        <button class="btn product-buy">Buy Now</button>
    </div>`;
});

document.querySelector('.js-product-box').innerHTML = productsHTML;