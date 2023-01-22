import { legacy_createStore, combineReducers } from "redux";
import checkReducer from "./reducers/checkReducer";

const rootReducer = combineReducers({
  check: checkReducer
})

export const store = legacy_createStore(rootReducer)