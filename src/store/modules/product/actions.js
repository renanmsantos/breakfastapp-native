export function productRequest() {
  return {
    type: '@product/PRODUCT_REQUEST',
  };
}

export function productRequestSuccess(products) {
  return {
    type: '@product/PRODUCT_REQUEST_SUCCESS',
    payload: { products },
  };
}

export function disableProductRequest(product) {
  return {
    type: '@product/DISABLE_PRODUCT_REQUEST',
    payload: { product },
  };
}
