import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  productDetail: null,
};

export default function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@product/PRODUCT_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.products = action.payload.products;
      });
    case '@product/PRODUCT_INFO_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.productDetail = action.payload.product;
      });
    default:
      return state;
  }
}
