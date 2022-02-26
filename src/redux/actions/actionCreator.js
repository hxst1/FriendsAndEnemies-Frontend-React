import actionTypes from "./actionTypes";

export const loginAction = (user) => ({
  type: actionTypes.login,
  user,
});

export const registerAction = (newUser) => ({
  type: actionTypes.register,
  newUser,
});
