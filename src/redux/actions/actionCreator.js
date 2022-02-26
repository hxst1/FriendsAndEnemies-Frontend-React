import actionTypes from "./actionTypes";

export const loginAction = (user) => ({
  type: actionTypes.login,
  user,
});
