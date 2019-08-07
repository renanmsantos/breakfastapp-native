export function newOrderRequest(user, products) {
  return {
    type: '@order/ORDER_REQUEST',
    payload: { user, products },
  };
}

export function newOrderRequestSuccess(order) {
  return {
    type: '@order/ORDER_REQUEST_SUCCESS',
    payload: { order },
  };
}
