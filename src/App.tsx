import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// Handles routing between different parts of the SPA
const router = createBrowserRouter([
  {
    // This is the root path
    path: "/",
    element: <Home />,
    // renders when user visits a path that doesn't exist
    errorElement: <NotFound />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    // This uses a parameter representing each unique user
    path: "/users/:userId",
    element: <UserDetails />,
  },
]);

function App() {
  return (
    <PageContainer>
      <RouterProvider router={router} />
    </PageContainer>
  );
}

const PageContainer = styled.div`
  padding: 40px 0;
`;

export default App;
