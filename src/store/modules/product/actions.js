export function productRequest() {
  return {
    type: '@product/PRODUCT_REQUEST',
  };
}

export function addProductCartRequest(id) {
  return {
    type: '@cart/ADD_PRODUCT_CART_REQUEST',
    payload: { id },
  };
}

export function productRequestSuccess(products) {
  return {
    type: '@product/PRODUCT_REQUEST_SUCCESS',
    payload: { products },
  };
}

export function productInfoRequest(product) {
  return {
    type: '@product/PRODUCT_INFO_REQUEST',
    payload: { product },
  };
}

export function productInfoRequestSuccess(product) {
  return {
    type: '@product/PRODUCT_INFO_REQUEST_SUCCESS',
    payload: { product },
  };
}
