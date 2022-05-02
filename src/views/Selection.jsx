import React, { useEffect } from "react";
import useChoose from "../hooks/useChoose";
import useFilter from "../hooks/useFilter";
import usePokemonReducer from "../hooks/usePokemonReducer";
import useSelection from "../hooks/useSelection";

const Selection = ({ onReady, setUserPokemon, setUserAttacks, setIaPokemon, setIaAttacks }) => {

  const [pokemonToFind, handleOnChange] = useFilter();
  const [pokemonsState, dispatch] = usePokemonReducer();
  const [handleClick] = useChoose(pokemonsState, onReady, setUserPokemon, setUserAttacks, setIaPokemon, setIaAttacks);
  const [loadPokemonInitialData] = useSelection(dispatch);

  useEffect(() => {
    loadPokemonInitialData();
  }, []);

  return (
    <>
      <div>
        <h2>Seleccionar Pokemon</h2>

        <input type="text" placeholder="Filtrar" name="name" value={pokemonToFind} onChange={handleOnChange} />
        {pokemonToFind.length > 0
          ?
          <ul>
            {pokemonsState.pokemons.filter((pokemon) => pokemon.name.includes(pokemonToFind)).map((pokemon, index) => (
              <li key={index}>
                {pokemon.name} / HP: {pokemon.hp}
                <input
                  type="button"
                  value="Elegir"
                  onClick={() => handleClick(pokemon.name)}
                />
              </li>
            ))}
          </ul>
          :
          <ul>
            {pokemonsState.pokemons.map((pokemon, index) => (
              <li key={index}>
                {pokemon.name} / HP: {pokemon.hp}
                <input
                  type="button"
                  value="Elegir"
                  onClick={() => handleClick(pokemon.name)}
                />
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export default Selection;
