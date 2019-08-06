import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@product/PRODUCT_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.products = action.payload.products;
      });
    case '@product/DISABLE_PRODUCT_REQUEST':
      return state;
    default:
      return state;
  }
}
