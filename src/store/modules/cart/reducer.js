import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  totalPrice: null,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_PRODUCT_CART_REQUEST':
      return produce(state, draft => {
        draft.products.push(action.payload.product);
        draft.totalPrice = draft.totalPrice + action.payload.product.price;
      });
    case '@cart/REMOVE_PRODUCT_CART_REQUEST':
      return produce(state, draft => {
        draft.products = draft.products.filter(function(item) {
          return item.name != action.payload.product.name;
        });
        draft.totalPrice = draft.totalPrice - action.payload.product.price;
      });
    default:
      return state;
  }
}
