import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login/Login";

const Container = styled.div`
  height: 100vh;
  background-color: #5765f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/users/login" />} />
        <Route path="/users/login" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
