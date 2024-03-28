import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <ContainerStyles>
      <p>Oops, you've gotten lost!</p>
      <Link to="/">Homepage</Link>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.div`
  font-weight: bold;
  font-size: 32px;
  line-height: 5;
  text-align: center;
  padding: 50px;
`;

export default NotFound;
