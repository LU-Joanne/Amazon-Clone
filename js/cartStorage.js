export function getCart() {
    const storedCart = localStorage.getItem("cart");
    if(!storedCart){
        localStorage.setItem('cart', JSON.stringify([]));
        return [];
    }
    try{
        return JSON.parse(storedCart);
    } catch(e){
        console.error('cart 資料格式錯誤，已重置為空陣列', e);
        localStorage.setItem('cart', JSON.stringify([]));
        return [];
    }
}

export function setCart(cart) {
    return localStorage.setItem('cart', JSON.stringify(cart));
}