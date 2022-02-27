import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: #ebebed;
  height: 200px;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  width: 400px;
  display: flex;
  border-radius: 10px;
  border: 5px solid #000;
`;
const PhotoContainer = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

const TextContainer = styled.div`
  background-color: inherit;
`;

const Name = styled.h2`
  background-color: inherit;
  font-size: 32px;
`;

const Text = styled.p`
  font-size: 18px;
  background-color: inherit;
`;

const Image = styled.img`
  background-color: inherit;
`;

const UsersInfo = ({ user: { username, name, image } }) => {
  return (
    <>
      <ProfileContainer>
        <PhotoContainer>
          <Image src={image} alt={username} />
        </PhotoContainer>
        <TextContainer>
          <Name>{name}</Name>
          <Text>USERNAME: {username}</Text>
        </TextContainer>
      </ProfileContainer>
    </>
  );
};

export default UsersInfo;
