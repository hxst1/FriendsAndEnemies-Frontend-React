import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UsersInfo from "../../components/UserInfo/UsersInfo";
import { loadUsersThunk } from "../../redux/thunks/userThunk";

const Users = styled.div``;

const Titles = styled.h2``;

const UsersContainer = styled.div``;

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
    <Users>
      <div>
        <Titles>OTHER PEOPLE</Titles>
      </div>
      <UsersContainer>
        {users.map((user) => (
          <UsersInfo user={user} key={user.id} />
        ))}
      </UsersContainer>
    </Users>
  );
};

export default HomePage;
