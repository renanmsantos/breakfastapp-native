export function addProductCartRequest(product) {
  return {
    type: '@cart/ADD_PRODUCT_CART_REQUEST',
    payload: { product },
  };
}

export function removeProductCartRequest(product) {
  return {
    type: '@cart/REMOVE_PRODUCT_CART_REQUEST',
    payload: { product },
  };
}
