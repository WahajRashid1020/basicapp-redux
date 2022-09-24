import { ActionTypes } from "../constant/acyion-types";
const init = {
  product: [],
};
export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state, product: payload };
    case ActionTypes.GET_PRODUCTS:
      return { ...state, product: payload };

    default:
      return state;
  }
};

export const selectedReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    case ActionTypes.REMOVE_PRODUCT:
      return {};

    default:
      return state;
  }
};
