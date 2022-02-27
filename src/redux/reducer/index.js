import { combineReducers } from "redux";
import tokenReducer from "./tokenReducer/tokenReducer";
import usersReducer from "./userReducer/userReducer";

const rootReducer = combineReducers({
  user: tokenReducer,
  users: usersReducer,
});

export default rootReducer;
