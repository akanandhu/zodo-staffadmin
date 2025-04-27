import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { login } from "../apis/auth";
// import { login, logout, getUser } from "./authService";

// Create Context for Authentication
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [validationError, setValidationError] = useState(null);



  const saveAccessToken = (token) => {
    setAccessToken(token);
  };

  const clearAccessToken = () => {
    setAccessToken(null);
  };

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const token = data?.data?.tokens?.accessToken;
      localStorage.setItem("token", data?.data?.tokens?.accessToken);
      setAccessToken(token);
      setUser(data.data);
      queryClient.invalidateQueries(["user"]); // Refresh user data
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message;
      setValidationError(errorMessage || "Something went wrong");
    },
  });

  // Logout mutation
  // const logoutMutation = useMutation({
  //   mutationFn: logout,
  //   onSuccess: () => {
  //     localStorage.removeItem("token");
  //     setUser(null);
  //     queryClient.setQueryData(["user"], null);
  //   },
  // });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading: loginMutation.isPending,
        login: loginMutation.mutate,
        validationError,
        saveAccessToken,
        clearAccessToken,
        accessToken,
        // logout: logoutMutation.mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

// Custom hook to use authentication
export const useAuth = () => {
  return useContext(AuthContext);
};
