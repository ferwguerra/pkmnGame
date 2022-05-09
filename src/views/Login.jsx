import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import useLogin from "../hooks/useLogin";
import { types } from "../types/types";

const Login = () => {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [user, handleChange] = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: types.LOGIN,
            payload: user
        });
        navigate("/")
    }

    return (
        <form>
            <input name="name" type="text" placeholder="User" onChange={handleChange} value={user.name} /> <br />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} value={user.password} /> <br />
            <input type="submit" value="Login" onClick={handleSubmit} />
        </form>
    );
};

export default Login;
