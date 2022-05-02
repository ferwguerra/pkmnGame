import { useState } from "react";

const useFilter = () => {

    const [pokemonToFind, setPokemonToFind] = useState("");

    const handleOnChange = (e) => {
        setPokemonToFind(e.target.value);
    }

    return [pokemonToFind, handleOnChange]

}

export default useFilter