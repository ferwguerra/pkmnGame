import React from "react";

const ChoosePokemonButton = ({handleClick, pokemonName}) => {
    return (
        <input
            type="button"
            value="Elegir"
            onClick={() => handleClick(pokemonName)}
        />
    );
};

export default ChoosePokemonButton;
