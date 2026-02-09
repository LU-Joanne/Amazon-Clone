export function getCart() {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

export function setCart(cart) {
    return localStorage.setItem('cart', JSON.stringify(cart));
}