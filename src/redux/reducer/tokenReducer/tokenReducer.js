import actionTypes from "../../actions/actionTypes";

const tokenReducer = (currentToken = {}, action = {}) => {
  let newToken;
  switch (action.type) {
    case actionTypes.login:
      newToken = { ...action.user };
      break;
    case actionTypes.register:
      newToken = { ...currentToken, ...action.newUser };
      break;
    case actionTypes.loadProfile:
      newToken = { ...action.user };
      break;
    default:
      newToken = { ...currentToken };
  }
  return newToken;
};

export default tokenReducer;
