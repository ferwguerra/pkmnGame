import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import ChoiseButton from "../components/ChoiseButton";
import { types } from "../types/types";

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
    axios("https://pokeapi.co/api/v2/pokemon?limit=150")
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

  return (
    <>
      <div>
        <h2>Seleccionar Pokemon</h2>

        <input type="text" placeholder="Filtrar" name="name" value={pokemonToFind} onChange={handleOnChange} />
        {pokemonToFind.length > 0
          ?
          <ul>
            {pokemonsState.pokemons.filter((pokemon) => pokemon.includes(pokemonToFind)).map((pokemon, index) => (
              <li key={index}>
                {pokemon}
                <ChoiseButton onReady={onReady} />
              </li>
            ))}
          </ul>
          :
          <ul>
            {pokemonsState.pokemons.map((pokemon, index) => (
              <li key={index}>
                {pokemon}
                <ChoiseButton onReady={onReady} />
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export default Selection;
