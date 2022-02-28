import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderContainer from "../../components/Header/Header";
import UsersInfo from "../../components/UserInfo/UsersInfo";
import { loadUsersThunk } from "../../redux/thunks/userThunk";

const Users = styled.div`
  height: 100vh;
  background-color: #36393e;
`;

const Titles = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 50px;
`;

const UsersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px;

  @media (max-width: 600px) {
    justify-content: center;
    margin: 20px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  token ?? navigate("/login");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersThunk(token));
  }, [dispatch, token]);
  return (
    <>
      <HeaderContainer />
      <Users>
        <div>
          <Titles>Social uwu</Titles>
        </div>
        <UsersContainer>
          {users.map((user) => (
            <UsersInfo user={user} key={user.id} />
          ))}
        </UsersContainer>
      </Users>
    </>
  );
};

export default HomePage;
