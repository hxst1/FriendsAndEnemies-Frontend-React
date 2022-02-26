import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Container>
  );
}

export default App;
