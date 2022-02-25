import actionTypes from "../../actions/actionTypes";

const loginReducer = (currentToken = {}, action = {}) => {
  let newToken;
  switch (action.type) {
    case actionTypes.login:
      newToken = { ...action.token };
      break;

    default:
      newToken = { ...currentToken };
  }
  return newToken;
};

export default loginReducer;
