import { Link } from "react-router-dom";
import { UserPropsType } from "../../types";
import { ButtonStyles, ImageStyles, UserStyles } from "./User.styles";

const User = ({ id, avatar }: UserPropsType) => {
  return (
    <UserStyles>
      <Link to={`/users/${id}`}>
        <ButtonStyles>
          <ImageStyles src={avatar} alt="" />
        </ButtonStyles>
      </Link>
    </UserStyles>
  );
};

export default User;
