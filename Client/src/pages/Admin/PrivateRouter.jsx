import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem("authToken"); // Check authentication

    return isAuthenticated ?   <Outlet /> : <Navigate to="/alogin" />  ;
};

export default PrivateRoute;
