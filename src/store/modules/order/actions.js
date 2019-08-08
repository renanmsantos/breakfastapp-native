export function orderRequest(userId) {
  return {
    type: '@order/ORDER_REQUEST',
    payload: { userId },
  };
}

export function orderRequestSuccess(orders) {
  return {
    type: '@order/ORDER_REQUEST_SUCCESS',
    payload: { orders },
  };
}

export function newOrderRequest(user, products, totalPrice) {
  return {
    type: '@order/NEW_ORDER_REQUEST',
    payload: { user, products, totalPrice },
  };
}

export function newOrderRequestSuccess() {
  return {
    type: '@order/NEW_ORDER_REQUEST_SUCCESS',
  };
}
