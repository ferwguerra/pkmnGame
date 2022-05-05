import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children, redirect = "/login" }) => {
    const { authState } = useContext(AuthContext);
    if (authState.isAuthenticated) {
        return children;
    }
    return <Navigate
        to={redirect}
    />;
};

export default ProtectedRoutes;