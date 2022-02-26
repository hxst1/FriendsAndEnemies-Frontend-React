import actionTypes from "../../actions/actionTypes";

const userReducer = (currentToken = {}, action = {}) => {
  let newToken;
  switch (action.type) {
    case actionTypes.login:
      newToken = { ...action.user };
      break;
    case actionTypes.register:
      newToken = { ...currentToken, ...action.newUser };
      break;
    default:
      newToken = { ...currentToken };
  }
  return newToken;
};

export default userReducer;
