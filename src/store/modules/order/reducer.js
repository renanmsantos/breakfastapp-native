import produce from 'immer';

const INITIAL_STATE = {
  purchaseOrderStatus: null,
  customer: null,
  partner: null,
  delivery: null,
  products: [],
};

export default function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@order/ORDER_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.purchaseOrderStatus = action.payload.order.purchaseOrderStatus;
        draft.customer = action.payload.order.customer;
        draft.partner = action.payload.order.partner;
        draft.delivery = action.payload.order.delivery;
        draft.products = action.payload.products;
      });
    default:
      return state;
  }
}
