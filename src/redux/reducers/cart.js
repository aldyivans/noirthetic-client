import { cartTypes } from "../actions/cartActions";

const initialState = {
  cart: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.LOADED: {
      return {
        ...state,
        cart: action.payload.data
      };
    }
    default:
      return state;
  }
};
