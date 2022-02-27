import { loginAction, registerAction } from "../actions/actionCreator";
import jwtDecode from "jwt-decode";
import axios from "axios";

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

export const registerThunk = (formData, navigate) => async (dispatch) => {
  const data = new FormData();
  data.append("image", formData.image);
  data.append("name", formData.name);
  data.append("username", formData.username);
  data.append("password", formData.password);

  const url = `${process.env.REACT_APP_APIURL}users/register`;

  const config = {
    headers: { "content-type": "multipart/form-data" },
  };

  axios.post(url, data, config).then(() => {
    dispatch(registerAction(data));
    navigate("/login");
  });
};
/* 
export const loadProfileThunk = (token) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_HEROKU_URL}user/user`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const newUser = await response.json();

  dispatch(loadProfileAction(newUser.actualUser));
}; */

/* export const loadUsersThunk = (token) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_HEROKU_URL}user/users`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const newUser = await response.json();

  dispatch(loadUsersAction(newUser.returnedUsers));
}; */
