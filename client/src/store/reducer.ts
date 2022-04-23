import { combineReducers } from "redux";
import counterReducer from "./slices/counter.slice";
import confirmReducer from "./slices/confirm.slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  confirm: confirmReducer,
});
