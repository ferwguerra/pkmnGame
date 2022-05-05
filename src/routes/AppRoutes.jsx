import { Route, Routes } from "react-router-dom";
import PokemonBattle from "../components/PokemonBattle";
import Login from "../views/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/login" element={
                <PublicRoute>
                    <Login />
                </PublicRoute>} 
            />

            <Route path="*" element={
                <ProtectedRoutes>
                    <Routes>
                        <Route path="/" element={<PokemonBattle />} />
                    </Routes>
                </ProtectedRoutes>}
            />

        </Routes>
    );
};

export default AppRoutes;