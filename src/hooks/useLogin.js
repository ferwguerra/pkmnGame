import { useState } from "react";

const useLogin = () => {
    const [user, setUser] = useState({
        "name": "",
        "password": "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return [user, handleChange]
}

export default useLogin