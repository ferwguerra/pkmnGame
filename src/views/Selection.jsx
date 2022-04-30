import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { types } from "../types/types";

const Selection = ({ onReady, setUserPokemon, setIaPokemon }) => {

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

  const [pokemonToFind, setPokemonToFind] = useState("");

  const handleOnChange = (e) => {
    setPokemonToFind(e.target.value);
  }

  const handleClick = (index) => {
    console.log("El pokemon elegido por el usuario es " + pokemonsState.pokemons[index].name);
    setUserPokemon(pokemonsState.pokemons[index]);

    let randomIndex = Math.floor(Math.random() * pokemonsState.pokemons.length);

    console.log("El pokemon elegido por la IA es " + pokemonsState.pokemons[randomIndex].name);
    setIaPokemon(pokemonsState.pokemons[randomIndex]);

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
                  onClick={() => handleClick(index)}
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
                  onClick={() => handleClick(index)}
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
