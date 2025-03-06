import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";
  
const PrivateRoute = () => {
  const { auth } = useContext(AuthContext);
  console.log("PrivateRoute - Auth State:", auth); // ✅ Debugging

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
