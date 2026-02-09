import { getCart, setCart } from './cartStorage.js';
import { updateTotalQuantity } from './cartBadge.js';
import { PRODUCTS } from "./product.js";

const params = new URLSearchParams(location.search);
const id = params.get("id");
const product = PRODUCTS[id];
let productDisplay = document.querySelector('.product-display');

let generateProduct = () =>{
    return (productDisplay.innerHTML =  `
        <div class="product-d-image">
            <ul class="product-icons">
                <li><img src="${product.image}" alt=""></li>
                <li><img src="${product.image}" alt=""></li>
                <li><img src="${product.image}" alt=""></li>
                <li><img src="${product.image}" alt=""></li>
                <li><img src="${product.image}" alt=""></li>
            </ul>
            <div class="product-main-image">
                <img src="${product.image}" alt="">
            </div>
        </div>
        <div class="product-d-details">
            <h1 class="product-title">${product.name}</h1>
            <div class="brand-store"><a href="#">Visit the 
${product.brand} Store</a></div>
            <div class="product-rating">
                <span>${product.rating.stars.toFixed(1)}</span>
                <img src="./assets/rating/rating-${product.rating.stars * 10}.png" alt="">
                <span class="product-r-reviews">${product.rating.count} ratings</span>
            </div>
            <div class="product-seller">
                <span class="product-s-best">#1 Best Seller</span>
                <span class="product-s-categories">in ${product.catagory}</span>
            </div>
            <div class="product-bought">
                <span class="product-b-quantity">6K+ bought </span>
                <span class="product-b-time">in past month</span>
                <hr>
            </div>
            <div class="product-price-details">
                <div class="product-p-d-limited">
                    <span>Limited time deal</span>
                </div>
                <div>
                    <span class="product-p-d-off">-${product.price.discount}%</span>
                    <span class="product-p-d-sale"><span class="product-p-d-dollar">$</span>${product.price.salesPriceInt()}<span
                            class="product-p-d-dollar">${product.price.salesPriceFixed()}</span></span>
                </div>
                <div class="product-p-d-listpr">
                    <span>List Price: <span class="product-price-original">$${product.price.listPrice}</span></span>
                </div>
                <p>Get <strong>Fast, Free Shipping</strong> with <span>Amazon Price</span></p>
                <p><span>FREE Returns</span></p>
                <p><span>Join Prime to buy this item at $${product.price.salesPrimePrice()}</span></p>
                <p>Available at a lower price from <span>other sellers</span> that may not offer free Prime shipping.
                </p>
            </div>
            <div class="product-color-selection">
                <p>${product.selected}: <strong class="product-selected">${product.option.one}</strong></p>
                <ul class="product-color-options">
                    <li class="option active">
                        <img src="${product.image}" alt="">
                        <p>${product.option.one}</p>
                    </li>
                    <li class="option">
                        <img src="${product.image}" alt="">
                        <p>${product.option.two}</p>
                    </li>
                    <li class="option">
                        <img src="${product.image}" alt="">
                        <p>${product.option.three}</p>
                    </li>
                    <li class="option">
                        <img src="${product.image}" alt="">
                        <p>${product.option.four}</p>
                    </li>
                    <li class="option">
                        <img src="${product.image}" alt="">
                        <p>${product.option.five}</p>
                    </li>
                    <li class="option">
                        <img src="${product.image}" alt="">
                        <p>${product.option.six}</p>
                    </li>
                </ul>
            </div>
            <div class="product-info">
                <p><strong>Brand</strong></p>
                <p>${product.brand}</p>
                <p><strong>${product.selected}</strong></p>
                <p class="product-info-color">${product.option.one}</p>
                <p><strong>${product.attribute.one}</strong></p>
                <p>${product.attribute.oneContent}</p>
                <p><strong>${product.attribute.two}</strong></p>
                <p>${product.attribute.twoContent}</p>
                <p><strong>${product.attribute.three}</strong></p>
                <p>${product.attribute.threeContent}</p>
            </div>
            <hr>
            <div class="product-description">
                <h1>About this item</h1>
                <ul>
                    <li>${product.description.d1}</li>
                    <li>${product.description.d2}</li>
                    <li>${product.description.d3}</li>
                    <li>${product.description.d4}</li>
                    <li>${product.description.d5}</li>
                </ul>
            </div>
        </div>
        <div class="product-d-purchase">
            <div class="product-d-p-title">
                <div class="product-d-p-buy">
                    <h3>Buy new:</h3><img src="./assets/circle_icon.png" alt="">
                </div>
                <div><span class="product-p-d-sale"><span class="product-p-d-dollar">$</span>${product.price.salesPriceInt()}<span
                            class="product-p-d-dollar">${product.price.salesPriceFixed()}</span></span></div>
            </div>
            <div class="product-d-p-accordion">
                <div class="product-d-p-gap">
                    <p>FREE delivery <strong>January 16 - 20.</strong></p>
                </div>
                <div class="product-d-p-gap">
                    <p>Or <span>Prime members</span> get FREE delivery <strong>Overnight 7 AM - 11 AM. </strong>Order
                        within <span style="color: #067D62;">6 hrs 11
                            mins</span>. <a href="#">Join Prime</a>
                    </p>
                </div>
                <div class="product-d-p-delivery-location">
                    <img src="./assets/location_icon_dark.png" alt="">
                    <span>Deliver to New York 10014</span>
                </div>
                <div class="product-d-p-stock">
                    <span>In Stock</span>
                </div>
                <div>
                    <select class="product-d-p-quantity">
                        <option value="1">Quantity: 1</option>
                        <option value="2">Quantity: 2</option>
                        <option value="3">Quantity: 3</option>
                        <option value="4">Quantity: 4</option>
                        <option value="5">Quantity: 5</option>
                        <option value="6">Quantity: 6</option>
                        <option value="7">Quantity: 7</option>
                        <option value="8">Quantity: 8</option>
                        <option value="9">Quantity: 9</option>
                        <option value="10">Quantity: 10</option>
                    </select>
                </div>
                <button class="btn btn-add-to-cart">Add to Cart</button>
                <button class="btn btn-buy-now">Buy Now</button>
                <div class="product-seller-info">
                    <p>Shipper / Seller</p>
                    <p><span>Amazon</span></p>
                    <p>Returns </p>
                    <p><span>FREE 30-day refund/replacement</span></p>
                    <p>Payment </p>
                    <p><span>Secure Transaction</span></p>
                </div>
                <hr>
                <button class="product-add-list">Add to List</button>
            </div>


        </div>
       `
    );
};
generateProduct();
updateTotalQuantity();
document.querySelectorAll('.option').forEach((item) => {
    item.addEventListener('click', (e) => {
        let pTag = e.currentTarget.querySelector('p');
        document.querySelector('.product-selected').innerHTML = pTag.textContent;
        document.querySelector('.product-info-color').innerHTML = pTag.textContent;
        document.querySelector('.option.active')?.classList.remove('active');
        e.currentTarget.classList.add('active');
    })
})

document.querySelector('.btn-add-to-cart').addEventListener('click', () => {
    const cart = getCart();
    const quantity = Number(document.querySelector('.product-d-p-quantity').value);
    const existingProduct = cart.find(item => item.id === id);
    if (existingProduct) {
        existingProduct.quantity = Number(existingProduct.quantity) + quantity;
  }  else {
        cart.push({...product, id, quantity});
  }
    setCart(cart);
    updateTotalQuantity();
});

