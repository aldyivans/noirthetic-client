const moduleKey = 'CART';

export const cartTypes = {
  LOADED: moduleKey + "_LOADED"
};

export const cartActions = {
  loaded: (data) => ({ type: cartTypes.LOADED, payload: { data } })
};
