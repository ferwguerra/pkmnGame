import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

const CloseSessionButton = () => {

    const { dispatch } = useContext(AuthContext);

    const logout = () => {
        dispatch({
            type: types.LOGOUT
        });
    }

    return (
        <input
            className="btn btn-primary"
            style={{"float":"right"}}
            type="button"
            value="Cerrar sesión"
            onClick={logout}
        />
    );
};

export default CloseSessionButton;
