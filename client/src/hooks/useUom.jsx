import React from "react";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";

const useUom = () => {
  const { user } = useAuth();

  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["uoms", user?.uid || null],
    queryFn: async () => {
      const result = await api.get(`/uoms`, {
        params: {},
      });
      return result.data;
    },
  });

  return {
    uoms: data,
    refetch,
    isLoading,
  };
};

export default useUom;
