import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }} >
            {pokemonsState.pokemons && pokemonsState.pokemons.filter((pokemon) => pokemon.name.includes(pokemonToFind)).map((pokemon, index) =>
              <div key={index}>
                <PokemonCard pokemon={pokemon} handleClick={handleClick} />
              </div>
            )}
          </div>
          :
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }} >
            {pokemonsState.pokemons && pokemonsState.pokemons.map((pokemon, index) =>
              <div key={index}>
                <PokemonCard pokemon={pokemon} handleClick={handleClick} />
              </div>
            )}
          </div>
        }
      </div>
    </>
  );
};

export default Selection;
