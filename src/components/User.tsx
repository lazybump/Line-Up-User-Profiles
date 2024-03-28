import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserPropsType } from "../types";

const User = ({ id, avatar }: UserPropsType) => {
  return (
    <UserStyles>
      {/* Alters the URL and navigates to path for the UserDetails component */}
      <Link to={`/users/${id}`}>
        <ButtonStyles>
          <ImageStyles src={avatar} alt="" />
        </ButtonStyles>
      </Link>
    </UserStyles>
  );
};

const UserStyles = styled.li`
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;

const ButtonStyles = styled.button`
  border: none;
  cursor: pointer;
  padding: 40px;
`;

const ImageStyles = styled.img`
  border-radius: 50%;
`;

export default User;
