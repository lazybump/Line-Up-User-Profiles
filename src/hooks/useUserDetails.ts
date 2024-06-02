import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../api/api";

// to get specific user
export const useUserDetails = () => {
  const { userId } = useParams();

  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["userDetails", userId],
    queryFn: () => fetchUserDetails(userId as string),
    enabled: !!userId,
  });

  return { isLoading, user, error };
};
