import { combineReducers } from "redux";
import homepageReducer from "./homepageReducer";

const rootReducer = combineReducers({
  home: homepageReducer,
});

export default rootReducer;
