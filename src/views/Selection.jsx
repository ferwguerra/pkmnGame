import React, { useEffect } from "react";
import ChoosePokemonButton from "../components/ChoosePokemonButton";
import useChoosePokemon from "../hooks/useChoosePokemon";
import useFilter from "../hooks/useFilter";
import useSelection from "../hooks/useSelection";
import usePokemonReducer from "../reducers/usePokemonReducer";

const Selection = ({ onReady, setUserPokemon, setUserAttacks, setIaPokemon, setIaAttacks }) => {

  const [pokemonToFind, handleOnChange] = useFilter();
  const [pokemonsState, dispatch] = usePokemonReducer();
  const [handleClick] = useChoosePokemon(pokemonsState, onReady, setUserPokemon, setUserAttacks, setIaPokemon, setIaAttacks);
  const [loadPokemonInitialData] = useSelection(dispatch);

  useEffect(() => {
    loadPokemonInitialData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div>
        <h2>Seleccionar Pokemon</h2>

        <input type="text" placeholder="Filtrar" name="name" value={pokemonToFind} onChange={handleOnChange} />
        {pokemonToFind.length > 0
          ?
          <ul className="chooseList">
            {pokemonsState.pokemons.filter((pokemon) => pokemon.name.includes(pokemonToFind)).map((pokemon, index) => (
              <li key={index}>
                {pokemon.name} / HP: {pokemon.hp}
                <ChoosePokemonButton handleClick={handleClick} pokemonName={pokemon.name} />
              </li>
            ))}
          </ul>
          :
          <ul className="chooseList">
            {pokemonsState.pokemons.map((pokemon, index) => (
              <li key={index}>
                {pokemon.name} / HP: {pokemon.hp}
                <ChoosePokemonButton handleClick={handleClick} pokemonName={pokemon.name} />
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export default Selection;
