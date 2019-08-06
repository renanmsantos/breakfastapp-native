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

export function plusQuantityProduct(product) {
  return {
    type: '@cart/PLUS_QTY_PRODUCT_REQUEST',
    payload: { product },
  };
}

export function minusQuantityProduct(product) {
  return {
    type: '@cart/MINUS_QTY_PRODUCT_REQUEST',
    payload: { product },
  };
}
