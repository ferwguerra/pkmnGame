import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { types } from "../components/types/types";

const Selection = ({ onReady }) => {

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
    const loadInitialPokemons = async () => {
      await getPokemons();
    }
    loadInitialPokemons();
  }, []);


  const getPokemons = () => {
    axios("https://pokeapi.co/api/v2/pokemon?limit=1")
      .then(response => {
        response.data.results.forEach(pokemon => {
          dispatch({
            type: types.ADD_POKEMON,
            payload: pokemon.name
          });
        });
      })
  }

  const [pokemonToFind, setPokemonToFind] = useState("");

  const handleOnChange = (e) => {
    setPokemonToFind(e.target.value);
  }

  const findPokemon = () => {
    console.log("Buscando pokemon " + pokemonToFind)

  }

  return (
    <>
      <div>
        <h2>Seleccionar Pokemon</h2>

        <input type="text" placeholder="Nombre" name="name" value={pokemonToFind} onChange={handleOnChange} />
        <input
          type="button"
          value="Buscar"
          onClick={findPokemon}
        />
        {pokemonToFind.length > 0
          ?
          <ul>
            {pokemonsState.pokemons.filter((pokemon) => pokemon === pokemonToFind).map((pokemon, index) => (
              <li key={index}>
                {pokemon}
                <input
                  type="button"
                  value="Elegir"
                  onClick={() => {
                    onReady();
                  }}
                />
              </li>
            ))}
          </ul>
          :
          <ul>
            {pokemonsState.pokemons.map((pokemon, index) => (
              <li key={index}>
                {pokemon}
                <input
                  type="button"
                  value="Elegir"
                  onClick={() => {
                    onReady();
                  }}
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
