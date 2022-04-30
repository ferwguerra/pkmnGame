import axios from "axios";
import React, { useEffect, useReducer } from "react";
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
    return () => { }
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



  return (
    <>
      <div>
        <h2>Seleccionar Pokemon</h2>

        <input type="text" placeholder="Nombre" name="name" />
        <input
          type="button"
          value="Buscar"
          onClick={() => {
            onReady();
          }}
        />
        <ul>
          {pokemonsState.pokemons.map((pokemon, index) => (
            <li key={index}>
              {pokemon}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Selection;
