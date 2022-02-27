import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer/tokenReducer";

const rootReducer = combineReducers({ user: tokenReducer });

export default rootReducer;
