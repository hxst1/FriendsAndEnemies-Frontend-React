import { loginAction, registerAction } from "../actions/actionCreator";
import jwtDecode from "jwt-decode";

export const userThunk = (user, navigate) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_APIURL}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) return;
  const token = await response.json();
  const { username } = await jwtDecode(token.token);
  localStorage.setItem("token", token.token);
  dispatch(loginAction({ username, token: token.token }));
  navigate("/uwu");
};

export const registerThunk = (user, navigate) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_APIURL}users/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) return;
  const newUser = await response.json();
  dispatch(registerAction(newUser));
  navigate("/login");
};
