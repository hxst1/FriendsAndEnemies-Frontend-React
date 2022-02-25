import actionTypes from "./actionTypes";

export const loginAction = (token) => ({
  type: actionTypes.login,
  token,
});
