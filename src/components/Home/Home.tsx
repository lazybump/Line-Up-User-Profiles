import { Link } from "react-router-dom";
import { ContainerStyles } from "./Home.styles";

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

export default Home;
