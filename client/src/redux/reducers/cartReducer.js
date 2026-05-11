import * as actionType from '../constants/cartConstant';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = action.payload;
      const exist = state.cartItems.find(product => product.id === item.id);

      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map(data =>
            data.id === exist.id ? { ...data, qty: data.qty + 1 } : data
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, qty: 1 }]
        };
      }

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(product => product.id !== action.payload)
      };

    case actionType.INCREASE_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product.id === action.payload ? { ...product, qty: product.qty + 1 } : product
        )
      };

    case actionType.DECREASE_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product.id === action.payload && product.qty > 1
            ? { ...product, qty: product.qty - 1 }
            : product
        )
      };

    default:
      return state;
  }
};
