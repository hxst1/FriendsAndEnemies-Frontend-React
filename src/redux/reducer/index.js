import { combineReducers } from "redux";
import userReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({ user: userReducer });

export default rootReducer;
