export function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

export function setCart(cart) {
  return localStorage.setItem('cart', JSON.stringify(cart));
}