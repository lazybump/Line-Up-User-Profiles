import { UserType } from "../../types";
import User from "../User/User";
import Pagination from "../Pagination/Pagination";
import { ListContainer, MainContainer } from "./UserList.styles";
import { useUsers } from "../../hooks/useUsers";

const UserList = () => {
  const { isLoading, users, error, currentPage, decrementPage, incrementPage } =
    useUsers();

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error)
    return <h2>An error has occured: {error.message}</h2>;

  return (
    <MainContainer>
      <ListContainer>
        {users?.data.map((user: UserType) => (
          <User key={user.id} {...user} />
        ))}
      </ListContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={users?.total_pages}
        decrementPage={decrementPage}
        incrementPage={incrementPage}
      />
    </MainContainer>
  );
};

export default UserList;
