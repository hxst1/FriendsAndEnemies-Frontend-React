import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login/Login";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/users/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
