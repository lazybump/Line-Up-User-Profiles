import { useEffect, useState } from "react";
import { UserType } from "../types";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const UserDetails = () => {
  // Type assertion to ignore type inference as user will never be undefined
  const [user, setUser] = useState({} as UserType);
  // Grabs the user's ID from the URL
  const { userId } = useParams<{ userId: string }>();

  // feeds user ID to the API and runs every time you click on a new user
  useEffect(() => {
    if (userId) {
      fetchUserDetails(userId);
    }
  }, [userId]);

  const fetchUserDetails = async (id: string) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      // check against request failure
      if (!response.ok) throw new Error("NETWORK ERROR");
      const data = await response.json();
      setUser(data.data);
    } catch (error) {
      console.log("ERROR FETCHING USER", error);
    }
  };

  return (
    <ProfileStyles>
      <ImageStyles src={user.avatar} alt="User avatar" />
      <TextContainer>
        <p>
          <strong>First name:</strong> {user.first_name}
        </p>
        <p>
          <strong>Last name:</strong> {user.last_name}
        </p>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>
      </TextContainer>
    </ProfileStyles>
  );
};

const ProfileStyles = styled.article`
  background-color: rgb(240, 240, 240);
  display: flex;
  width: 50%;
  border-radius: 10px;
  align-items: center;
  gap: 50px;
  margin: 0 auto;
  font-size: 20px;
  padding: 40px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;

const ImageStyles = styled.img`
  border-radius: 50%;
`;

const TextContainer = styled.div`
  line-height: 1.5;
`;

export default UserDetails;
