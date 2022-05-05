import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";

const Login = () => {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const login = (e) => {
        dispatch({
            type: types.LOGIN,
            payload: {
                name: "Fer"
            }
        });
        navigate("/")
    }

    return (
        <form>
            <input name="name" type="text" placeholder="User" /> <br />
            <input name="password" type="password" placeholder="Password" /> <br />
            <input type="submit" value="Login" onClick={login} />
        </form>
    );
};

export default Login;
