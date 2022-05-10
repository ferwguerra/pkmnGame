import { types } from "../types/types";

export const initialStateAuth = () =>
    localStorage.getItem("auth") ?
        JSON.parse(localStorage.getItem("auth"))
        :
        {
            isAuthenticated: false,
            user: {}
        };

export const authReducer = (state, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
        case types.LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {}
            }
        default:
            return state;
    }
}
