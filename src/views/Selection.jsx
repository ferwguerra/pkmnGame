import axios from "axios";
import React, { useEffect, useReducer } from "react";
import useAttacks from "../hooks/useAttacks";
import useFilter from "../hooks/useFilter";
import { types } from "../types/types";

const Selection = ({ onReady, setUserPokemon, setUserAttacks, setIaPokemon, setIaAttacks }) => {

  const [getAttacksForPokemon] = useAttacks();
  const [pokemonToFind, handleOnChange] = useFilter();

  const initialStatePokemons = {
    pokemons: []
  }

  const pokemonReducer = (state, action) => {
    switch (action.type) {
      case types.ADD_POKEMON:
        return {
          ...state,
          pokemons: [...state.pokemons, action.payload]
        }
      default:
        break;
    }
  }

  const [pokemonsState, dispatch] = useReducer(pokemonReducer, initialStatePokemons);

  useEffect(() => {
    const loadPokemonInitialData = async () => {
      getPokemons();
    }
    loadPokemonInitialData();
  }, []);

  const getPokemons = () => {
    axios("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then(response => {
        response.data.results.forEach(pokemon => {
          const pokemonName = pokemon.name;

          axios(pokemon.url).then(response => {
            const pokemonHp = response.data.stats[0].base_stat;

            dispatch({
              type: types.ADD_POKEMON,
              payload: {
                "name": pokemonName,
                "hp": pokemonHp
              }
            });
          });
        });
      })
  }

  const handleClick = async (pokemonName) => {
    setUserPokemon(pokemonsState.pokemons.filter(p => p.name === pokemonName)[0]);
    setUserAttacks(await getAttacksForPokemon(pokemonName));

    let randomIndex = Math.floor(Math.random() * pokemonsState.pokemons.length);
    setIaPokemon(pokemonsState.pokemons[randomIndex]);
    setIaAttacks(await getAttacksForPokemon(pokemonsState.pokemons[randomIndex].name));

    onReady();
  }

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
