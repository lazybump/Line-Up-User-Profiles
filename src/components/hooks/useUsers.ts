import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchUsers } from "../api/api";
import { useEffect } from "react";

// to get all users
export const useUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const navigate = useNavigate();

  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users", currentPage],
    queryFn: () => fetchUsers(currentPage),
  });

  const decrementPage = () => {
    const newPage = (currentPage - 1).toString();
    setSearchParams({ page: newPage });
  };

  const incrementPage = () => {
    const newPage = (currentPage + 1).toString();
    setSearchParams({ page: newPage });
  };

  useEffect(() => {
    navigate(`/users?page=${currentPage}`);
  }, [currentPage]);

  return {
    isLoading,
    users,
    error,
    currentPage,
    decrementPage,
    incrementPage,
  };
};
