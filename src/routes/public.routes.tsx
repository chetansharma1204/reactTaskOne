import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const  PublicRoutes = ({children}:{children:ReactElement}):ReactElement => {
 const isLogin = localStorage.getItem('token');
 return isLogin ? <Navigate to='/dashboard' /> : children
}

export default PublicRoutes;