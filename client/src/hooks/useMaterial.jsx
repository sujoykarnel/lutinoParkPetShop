import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";
const useMaterial = () => {
  const { user } = useAuth();

  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["origins", user?.uid || null],
    queryFn: async () => {
      const result = await api.get(`/materials`, {
        params: {},
      });
      return result.data;
    },
  });

  return {
    materials: data?.data,
    totalCount: data?.totalCount,
    refetch,
    isLoading,
  };
};

export default useMaterial;
