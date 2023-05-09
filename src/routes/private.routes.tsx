import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

const  PrivateRoutes = ({children}:{children:ReactElement}):ReactElement => {
 const isLogin = localStorage.getItem('token');
 return isLogin ?  children : <Navigate to='/' />
}

export default PrivateRoutes;