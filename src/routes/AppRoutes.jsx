import { Route, Routes } from "react-router-dom";
import PokemonBattle from "../components/PokemonBattle";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PokemonBattle />} />
        </Routes>
    );
};

export default AppRoutes;