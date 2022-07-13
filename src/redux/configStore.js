import {
  applyMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import wordReducer from "./modules/reduxWord";
import thunk from "redux-thunk";

// rootReducer 생성
const rootReducer = combineReducers({ reducer: wordReducer });

// thunk middleware 생성
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

// rootReducer + enhancer = store생성
const Store = configureStore({ reducer: rootReducer }, enhancer);

export default Store;
