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
            };
          } else {
            return item;
          }
        });
        if (draft.totalPrice < 0) draft.totalPrice = 0;
      });
    default:
      return state;
  }
}
