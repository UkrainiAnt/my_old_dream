import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/auth/Auth.provider";

const useAuthState = () => {
  return useContext(AuthContext);
};

export default useAuthState;
