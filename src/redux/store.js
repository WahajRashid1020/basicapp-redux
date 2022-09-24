import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  { reducer: reducers },
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
