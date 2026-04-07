import { getCart } from "./cartStorage.js";

export function updateTotalQuantity(){
    const cart = getCart();
    const totalQuantity = cart.reduce((sum, item) => {
        return sum + (Number(item.quantity) || 0)
    }, 0);
    const badge = document.querySelectorAll('.js-cart-quantity');
    if(badge.length > 0){
        badge.forEach(e => {
            e.textContent = totalQuantity;
        })
    }
};
window.addEventListener('storage', e => {
  if (e.key === 'cart') {
    updateTotalQuantity();
  }
});