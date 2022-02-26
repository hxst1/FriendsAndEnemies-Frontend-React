import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginCont = styled.section`
  height: 100vh;
  background-color: #5765f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  return (
    <LoginCont>
      <LoginForm />
    </LoginCont>
  );
};

export default Login;
