import * as actions from '../../constants/actionTypes';


export const addToCart = (id, menuId) => {
  return {
    type: actions.ADD_TO_CART,
    itemId: id,
	menuId
  };
};
export const removeFromCart = id => {
  return {
    type: actions.REMOVE_FROM_CART,
    id,
  };
};
export const subtractQuantity = cartId => {
  return {
    type: actions.SUB_QUANTITY,
    cartId,
  };
};
export const addQuantity = cartId => {
  return {
    type: actions.ADD_QUANTITY,
    cartId,
  };
};
export const emptyCart = () => {
  return {
    type: actions.EMPTY_CART,
  };
};


    