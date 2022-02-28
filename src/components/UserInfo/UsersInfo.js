import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2e3136;
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.64);
  border-radius: 3px;
  height: 50px;
  width: 200px;
  min-width: 200px;
  min-height: 50px;
  margin: 20px;
  padding: 5px;

  :hover {
    background-color: #36393e;
  }
`;

const Cont = styled.section`
  padding: 5px;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: #b8bbbe;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ContImg = styled.section`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const Name = styled.p`
  font-size: 13px;
  color: #70747a;
`;

const UsersInfo = ({ user: { username, name, image } }) => {
  return (
    <>
      <ProfileContainer>
        <Cont>
          <Text>@{username}</Text>
          <Name className="name">{name}</Name>
        </Cont>
        <ContImg>
          <Image src={image} alt={username} />
        </ContImg>
      </ProfileContainer>
    </>
  );
};

export default UsersInfo;
