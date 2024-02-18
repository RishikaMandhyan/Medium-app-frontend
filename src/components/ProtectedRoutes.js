import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ({ currentuser }) => {
  return currentuser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
