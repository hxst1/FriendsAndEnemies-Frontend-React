import { combineReducers } from "redux";
import loginReducer from "./loginReducer/loginReducer";

const rootReducer = combineReducers({ token: loginReducer });

export default rootReducer;
