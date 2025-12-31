import React, { useContext } from "react";
import AuthContext from "../provider/temp";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
