import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { registerThunk } from "../../redux/thunks/userThunk";

const FormContainer = styled.form`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #36393e;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.64);
  height: 50%;
  padding: 30px;
  width: 50%;
  min-width: 400px;
  & ul {
    & li {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 30px;
      width: 222px;

      & .title {
        color: #b8bbbe;
        padding: 0;
        margin: 0;
      }

      & .userReg {
        color: #b8bbbe;
      }

      & label {
        margin-bottom: 10px;
        color: #b8bbbe;
      }
      & input {
        background-color: #424242;
        border: 1px solid #000;
        padding: 10px;
        color: #fff;
        width: 100%;
        outline: none;
      }

      & button {
        width: 100%;
        background-color: #5765f2;
        padding: 10px;
        border: 1px solid #000;
        list-style: none;
        text-decoration: none;
        color: #fff;
      }

      & button:hover {
        background-color: #4752c4;
      }

      & p {
        width: 244px;
        font-family: monospace;
        margin-top: 10px;
        font-size: 13px;
        color: #70747a;

        & .link {
          color: #5765f2;
          text-decoration: none;
        }
      }
    }
  }
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialFormData = {
    name: "",
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const resetValues = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    setFormData({ ...initialFormData });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerThunk(formData, navigate));
    resetValues();
  };

  const isFilled =
    formData.name !== "" &&
    formData.username !== "" &&
    formData.password !== "";

  const audio = new Audio("owo.mp3");

  const start = () => {
    audio.play();
  };

  return (
    <FormContainer
      className="form-container"
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      <ul>
        <li>
          <h1 className="title">Register</h1>
          <p className="userReg">{formData.username} uwu?</p>
        </li>
        <li>
          <label title="name" htmlFor="name">
            name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <label title="username" htmlFor="username">
            username:
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <label title="password" htmlFor="password">
            password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </li>
        <li>
          <button
            type="submit"
            onClick={start}
            className="button"
            disabled={!isFilled}
          >
            Sign Up
          </button>
          <p>
            ¿Have an account?{" "}
            <Link className="link" to="/login">
              Sign In now
            </Link>
          </p>
        </li>
      </ul>
    </FormContainer>
  );
};

export default RegisterForm;
