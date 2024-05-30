import { useUserDetails } from "../hooks/useUserDetails";
import {
  ImageStyles,
  ProfileStyles,
  TextContainer,
} from "./UserDetails.styles";

const UserDetails = () => {
  const { isLoading, user, error } = useUserDetails();

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error)
    return <h2>An error has occured: {error.message}</h2>;

  return (
    <ProfileStyles>
      <ImageStyles src={user.data.avatar} alt="User avatar" />
      <TextContainer>
        <p>
          <strong>First name:</strong> {user.data.first_name}
        </p>
        <p>
          <strong>Last name:</strong> {user.data.last_name}
        </p>
        <p>
          <strong>Email: </strong>
          {user.data.email}
        </p>
      </TextContainer>
    </ProfileStyles>
  );
};

export default UserDetails;
