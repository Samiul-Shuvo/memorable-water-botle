const getStoredCart = () =>{
    const storedCartString= localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []; 

}

const saveCartToLs = cart =>{
    const cartStringfied = JSON.parse(cart);
    localStorage.setItem('cart',cartStringfied);

}

const addToLs= id =>{
    const cart = getStoredCart();
    cart.push(id);

}

const removeFromLs = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id)
    saveCartToLs(remaining);
}

export {addToLs,getStoredCart,removeFromLs}