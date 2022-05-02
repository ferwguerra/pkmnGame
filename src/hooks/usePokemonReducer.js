import { useReducer } from "react";
import { types } from "../types/types";

const usePokemonReducer = () => {
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

  return useReducer(pokemonReducer, initialStatePokemons);

}

export default usePokemonReducer