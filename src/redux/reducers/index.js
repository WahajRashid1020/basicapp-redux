import { combineReducers } from "redux";
import { productReducer, selectedReducer } from "./productreducer";

const reducers = combineReducers({
  allproducts: productReducer,
  selected: selectedReducer,
});
export default reducers;
