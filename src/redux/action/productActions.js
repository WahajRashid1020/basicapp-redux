import { ActionTypes } from "../constant/acyion-types";
export const setproducts = (product) => {
  return { type: ActionTypes.SET_PRODUCT, payload: product };
};
export const selectedproducts = (product) => {
  return { type: ActionTypes.SELECTED_PRODUCT, payload: product };
};
export const removeproducts = () => {
  return { type: ActionTypes.REMOVE_PRODUCT };
};
