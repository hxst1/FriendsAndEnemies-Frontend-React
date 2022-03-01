import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loadProfileThunk } from "../../redux/thunks/userThunk";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Container = styled.header`
  background-color: #2e3136;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.64);

  & h1 {
    color: white;
  }

  & .btns {
    & a {
      text-decoration: none;
      color: #dcddde;
      padding: 5px 15px;
      margin: 10px;
      border-radius: 3px;
    }

    & a:hover {
      background-color: #3a3d43;
    }
  }
`;

const HeaderContainer = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  token ?? navigate("/login");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadProfileThunk(token));
  }, [dispatch, token]);

  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <Container>
      <ProfileInfo user={user} />
      <h1>Social uwu</h1>
      <div className="btns">
        <Link to="/home">home</Link>
        <Link to="/login" onClick={logOut}>
          logout
        </Link>
      </div>
    </Container>
  );
};

export default HeaderContainer;
