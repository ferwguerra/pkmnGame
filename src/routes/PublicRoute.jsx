import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);

    if (authState.isAuthenticated) {
        return <Navigate to={"/"} />;
    } else {
        return children;
    }
    
};

export default PublicRoute;