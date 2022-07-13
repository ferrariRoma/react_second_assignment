import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wordReducer from "./modules/reduxWord";

// rootReducer 생성
const rootReducer = combineReducers({ reducer: wordReducer });
// rootReducer + enhancer = store생성
const Store = configureStore({ reducer: rootReducer });

export default Store;
