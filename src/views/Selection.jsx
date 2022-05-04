import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import PokemonCards from "../components/PokemonCards";
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
        {pokemonToFind.length === 0
          ?
          <PokemonCards listPokemons={pokemonsState.pokemons} handleClick={handleClick} />
          :
          <PokemonCards listPokemons={pokemonsState.pokemons.filter((pokemon) => pokemon.name.includes(pokemonToFind))} handleClick={handleClick} />
        }
      </div>
    </>
  );
};

export default Selection;
