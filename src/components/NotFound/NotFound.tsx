import { Link } from "react-router-dom";
import { ContainerStyles } from "./NotFound.styles";

const NotFound = () => {
  return (
    <ContainerStyles>
      <p>Oops, you've gotten lost!</p>
      <Link to="/">Homepage</Link>
    </ContainerStyles>
  );
};

export default NotFound;
