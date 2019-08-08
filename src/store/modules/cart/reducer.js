import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  totalPrice: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.products = [];
        draft.totalPrice = 0;
      });
    case '@auth/SIGN_OUT':
      return produce(state, draft => {
        draft.products = [];
        draft.totalPrice = 0;
      });
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
        draft.totalPrice = 0;
        if (draft.totalPrice < 0) draft.totalPrice = 0;
      });
    case '@cart/PLUS_QTY_PRODUCT_REQUEST':
      return produce(state, draft => {
        draft.products = draft.products.map(function(item) {
          if (item.id === action.payload.product.id) {
            draft.totalPrice = draft.totalPrice + action.payload.product.price;
            return {
              id: item.id,
              name: item.name,
              urlImage: item.urlImage,
              price: item.price,
              quantity: item.quantity + 1,
              partner: item.partner,
              partnerId: item.partnerId,
            };
          } else {
            return item;
          }
        });
        if (draft.totalPrice < 0) draft.totalPrice = 0;
      });
    case '@cart/MINUS_QTY_PRODUCT_REQUEST':
      return produce(state, draft => {
        draft.products = draft.products.map(function(item) {
          if (item.quantity > 1 && item.id === action.payload.product.id) {
            draft.totalPrice = draft.totalPrice - action.payload.product.price;
            return {
              id: item.id,
              name: item.name,
              urlImage: item.urlImage,
              price: item.price,
              quantity: item.quantity - 1,
              partner: item.partner,
              partnerId: item.partnerId,
            };
          } else {
            return item;
          }
        });
        if (draft.totalPrice < 0) draft.totalPrice = 0;
      });
    case '@order/NEW_ORDER_REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.totalPrice = 0;
        draft.products = [];
      });
    default:
      return state;
  }
}
