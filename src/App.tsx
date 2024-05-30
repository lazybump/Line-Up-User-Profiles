import styled from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserList from "./components/UserList/UserList";
import UserDetails from "./components/UserDetails/UserDetails";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/users/:userId",
    element: <UserDetails />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </QueryClientProvider>
  );
}

const PageContainer = styled.div`
  padding: 40px 0;
`;

export default App;
