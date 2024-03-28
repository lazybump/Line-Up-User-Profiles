import { useEffect, useState } from "react";
import { UserType } from "../types";
import User from "./User";
import styled from "styled-components";

const UserList = () => {
  // array of users
  const [users, setUsers] = useState<UserType[]>([]);
  // loading state
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // runs everytime the page changes to fetch new user data
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  // passes in the currentPage to fetch it's corresponding user list
  const fetchUsers = async (pageNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${pageNum}`
      );
      // handle request failure
      if (!response.ok) throw new Error("NETWORK ERROR");
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log("ERROR FETCHING USERS:", error);
      // need to toggle loading state regardless of outcome
    } finally {
      setLoading(false);
    }
  };

  const decrementPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const incrementPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ListContainer>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ListContainer>
      )}
      <PaginationContainer>
        {/* Switches off button when on page 1 */}
        <PaginationButton onClick={decrementPage} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        {/* Switches off button when on last page */}
        <PaginationButton
          onClick={incrementPage}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </div>
  );
};

const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 50px;
`;

const PaginationButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
`;

export default UserList;
