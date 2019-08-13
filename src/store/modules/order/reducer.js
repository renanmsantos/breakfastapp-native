import produce from 'immer';

const INITIAL_STATE = {
  orders: [],
  orderDetail: null,
  orderDetailProducts: [],
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@order/ORDER_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.orders = action.payload.orders;
      });
    case '@order/NEW_ORDER_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.orders = action.payload.orders;
      });
    case '@order/ORDER_INFO_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.orderDetail = action.payload.order.purchaseOrder;
        draft.orderDetailProducts = action.payload.order.products;
      });
    default:
      return state;
  }
}
