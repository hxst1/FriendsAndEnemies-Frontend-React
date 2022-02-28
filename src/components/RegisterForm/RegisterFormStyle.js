import styled from "styled-components";

const FormContainer = styled.form`
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #36393e;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.64);
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
        margin-bottom: 7px;
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

export default FormContainer;
