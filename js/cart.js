import { getCart, setCart } from './cartStorage.js';
import { updateTotalQuantity } from './cartBadge.js';
import { PRODUCTS } from './product.js';

let cart = getCart();

const cartList = document.querySelector('.product-cart-container');

function renderCart() {
    cartList.innerHTML = '';

    if(cart.length === 0){
        cartList.innerHTML = "<p>購物車是空的</p>";
        updateTotalPrice();
        updateTotalQuantity();
        return;
    }

    cart.forEach(item => {
        const product = PRODUCTS[item.id];
        if(!product) return; // 防呆

        cartList.innerHTML += `
                <div class="product-cart-list" data-id="${item.id}">
                <img class="product-cart-image" src="${item.image}" alt="">
                <div class="product-info">
                    <div class="product-item-content">
                        <div class="product-cart-title">
                            <h2> ${item.name}</h2>
                        </div>
                        <p class="product-cart-price">$${getFinalPrice(item)}</p>
                        <div class="product-content-tail">
                            <p class="product-cart-catagory"><span class="product-cart-best">#1 Best Seller</span>
                                in ${item.catagory}</p>
                            <p class="product-cart-stock a-size-small">In Stock</p>
                            <p>FREE delivery <span>Fri, Jan 23</span> available at checkout. Order within <span
                                    class="product-cart-time">1 hr 18 mins</span>
                            </p>
                            <a href="#">FREE Returns</a>
                            <div class="product-cart-gift">
                                <input type="checkbox" id="gift-${item.id}" name="gift"><label for="gift-${item.id}" class="a-size-small">This is a gift <a
                                        href="#">Learn
                                        more</a></label>
                            </div>
                            <p class="a-size-small product-cart-spec"><span>${item.attribute.one}:</span> ${item.attribute.oneContent}</p>
                            <p class="a-size-small product-cart-spec"><span>${item.attribute.two}:</span> ${item.attribute.twoContent}</p>
                            <p class="a-size-small product-cart-spec"><span>${item.attribute.three}:</span> ${item.attribute.threeContent}</p>
                        </div>
                    </div>
                    <div class="cart-list-action">
                        <div class="cart-quantity-container">
                            <div class="cart-quantity-control">
                                <button class="cart-minus-icon"><span><i class="fa-solid fa-minus"></i></span></button>
                                <span class="cart-product-quantity">${item.quantity}</span>
                                <button class="cart-plus-icon"><span><i class="fa-solid fa-plus"></i></span></button>
                            </div>
                        </div>
                        <hr>
                        <p class="a-size-small cart-action-active cart-delete">Delete</p>
                        <hr>
                        <p class="a-size-small cart-action-active">Save for later</p>
                        <hr>
                        <p class="a-size-small cart-action-active">Compare with similar items</p>
                        <hr>
                        <p class="a-size-small cart-action-active">Share</p>
                    </div>
                </div>
            </div>
        `;
    });
    updateTotalPrice();
    updateTotalQuantity();
}
renderCart();

cartList.addEventListener('click', e => {
    const cartItem = e.target.closest('.product-cart-list');
    if (!cartItem) return;

    const id = cartItem.dataset.id;
    const item = cart.find(p => p.id === id);
    if (!item) return;
item.quantity = Number(item.quantity) || 0;
    const quantityEl = cartItem.querySelector('.cart-product-quantity');
    let changed = false;

    if(e.target.closest('.product-cart-image') || e.target.closest('.product-cart-title')){
        location.href = `product.html?id=${id}`;
    }

    //加數量
    if(e.target.closest('.cart-plus-icon')){
        item.quantity++;
        changed = true;
    };
    //減數量
    if (e.target.closest('.cart-minus-icon')) {
        if(item.quantity > 1){
            item.quantity--;
            changed = true;
        } else {
            removeProduct(id, cartItem);
            return; //已刪除，直接結束
        }
    };
    //點Delete
    if(e.target.closest('.cart-delete')){
       removeProduct(id, cartItem);
       return;
    }

    if (!changed) return;

    quantityEl.textContent = item.quantity;
    setCart(cart);
    updateTotalPrice();
    updateTotalQuantity();
});

function getFinalPrice(item) {
    const product = PRODUCTS[item.id];
    if(!product?.price) return 0;
    const { listPrice = 0, discount = 0 } = product.price;
    return Math.floor(listPrice * (1 - discount/100) *100) / 100;
};
function updateTotalPrice(){
    const total = cart.reduce((sum, item) => {
        return sum + getFinalPrice(item) * item.quantity;
    }, 0);
    document.querySelectorAll('.cart-total-amount').forEach(e => {
        e.textContent = total.toFixed(2);
    });
}

function removeProduct(productId, cartItem){
    cart = cart.filter(item => item.id !== productId);
    cartItem.remove(); //刪DOM
    setCart(cart);
    updateTotalPrice();
    updateTotalQuantity();
}

// document.getElementById("clearCart").addEventListener("click", () => {
//   localStorage.removeItem("cart");
//   console.log("購物車已清空");
//   location.reload(); // 重新渲染畫面
// });
