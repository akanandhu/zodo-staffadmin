import React from "react";
import { useAuth } from "./hooks/useAuth";
import FullscreenLoader from "./components/loaders/FullscreenLoader";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRouter() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <FullscreenLoader/>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouter;
