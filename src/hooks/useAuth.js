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
  const [validationError, setValidationError] = useState(null);

  // Fetch authenticated user
  //   const { data, isLoading } = useQuery({
  //     queryKey: ["user"],
  //     queryFn: getUser,
  //     retry: false, // Prevent retries if user is not authenticated
  //     onSuccess: (userData) => setUser(userData),
  //     onError: () => setUser(null),
  //   });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data?.tokens?.accessToken);
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
