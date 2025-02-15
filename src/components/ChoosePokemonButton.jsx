import React from "react";

const ChoosePokemonButton = ({handleClick, pokemonName}) => {
    return (
        <input
            className="btn btn-primary"
            type="button"
            value="Yo te elijo!"
            onClick={() => handleClick(pokemonName)}
        />
    );
};

export default ChoosePokemonButton;
