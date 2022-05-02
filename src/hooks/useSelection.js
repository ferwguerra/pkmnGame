import axios from "axios";
import { types } from "../types/types";

const useSelection = (dispatch) => {

    const getPokemons = async () => {
        const pokemonResponses = await axios("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then(response => {
                return response.data.results;
            });
        pokemonResponses.forEach(async (pokemon) => {
            const pokemonName = pokemon.name;

            const pokemonHp = await axios(pokemon.url).then(response => {
                return response.data.stats[0].base_stat;
            });

            dispatch({
                type: types.ADD_POKEMON,
                payload: {
                    "name": pokemonName,
                    "hp": pokemonHp
                }
            });
        });
    }

    const loadPokemonInitialData = () => {
        getPokemons();
    }

    return [loadPokemonInitialData]

}

export default useSelection