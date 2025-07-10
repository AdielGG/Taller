let cartList = [];

function setCartList(juguetes) {
    cartList = juguetes;
}

function getCartList() {
    return cartList;
}

function cleanCartList() {
    cartList = [];
}

export { getCartList, setCartList, cleanCartList };