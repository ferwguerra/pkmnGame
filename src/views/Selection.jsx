import React, { useEffect } from "react";
import FilterPokemon from "../components/FilterPokemon";
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
    <div>
      <h2>Seleccionar Pokemon</h2>
      <FilterPokemon criteria={pokemonToFind} listPokemons={pokemonsState.pokemons} handleOnChange={handleOnChange}/>

      <PokemonCards listPokemons={pokemonToFind.length === 0 ?
        pokemonsState.pokemons :
        pokemonsState.pokemons.filter((pokemon) => pokemon.name.includes(pokemonToFind))}
        handleClick={handleClick} />
    </div>
  );
};

export default Selection;
