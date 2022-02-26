import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterCont = styled.section`
  height: 100vh;
  background-color: #5765f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  return (
    <RegisterCont>
      <RegisterForm />
    </RegisterCont>
  );
};

export default Register;
