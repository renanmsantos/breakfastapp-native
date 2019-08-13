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

export function newOrderRequestSuccess(orders) {
  return {
    type: '@order/NEW_ORDER_REQUEST_SUCCESS',
    payload: { orders },
  };
}

export function orderInfoRequest(order) {
  return {
    type: '@order/ORDER_INFO_REQUEST',
    payload: { order },
  };
}

export function orderInfoRequestSuccess(order) {
  return {
    type: '@order/ORDER_INFO_REQUEST_SUCCESS',
    payload: { order },
  };
}
