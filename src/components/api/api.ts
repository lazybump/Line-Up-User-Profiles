import { ApiResponse } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const fetchUsers = async (pageNum: number): Promise<ApiResponse> => {
  const response = await fetch(`https://reqres.in/api/users?page=${pageNum}`);
  if (!response.ok) throw new Error("Network Error");
  return response.json();
};

export const fetchUserDetails = async (id: string) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  if (!response.ok) throw new Error("Network Error");
  return response.json();
};
