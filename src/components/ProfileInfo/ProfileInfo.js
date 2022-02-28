import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  min-height: 50px;
  margin: 20px;
  padding: 5px;
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

  border: 2px solid #3aa55d;
`;

const ProfileInfo = ({ user: { username, image } }) => {
  return (
    <>
      <ProfileContainer>
        <ContImg className="contimg">
          <Image src={image} alt={username} />
        </ContImg>
      </ProfileContainer>
    </>
  );
};

export default ProfileInfo;
