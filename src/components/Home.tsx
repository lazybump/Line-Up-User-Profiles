import { Link } from "react-router-dom";
import styled from "styled-components";

// Very basic homepage
const Home = () => {
  return (
    <ContainerStyles>
      <h1>Welcome</h1>
      <h2>
        Click <Link to="/users">here</Link> to view users
      </h2>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.div`
  font-weight: bold;
  line-height: 5;
  text-align: center;
  padding: 50px;
`;

export default Home;
