export function getCartTotals(cartItems){
    let cartTotalItems = 0;
    let cartTotalPrice = 0;

    for(let i=0; i<cartItems.length; i++){
        const x = cartItems[i];
        cartTotalItems += x.Quantity;
        cartTotalPrice += x.Quantity * x.Pri;
    }

    return {cartTotalItems, cartTotalPrice};
}
export default getCartTotals