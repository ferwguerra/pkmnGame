import axios from "axios";
import { types } from "../types/types";

const useSelection = (dispatch) => {

    const getPokemons = async () => {
        const pokemonResponses = await axios("https://pokeapi.co/api/v2/pokemon?limit=250")
            .then(response => {
                return response.data.results;
            });
        pokemonResponses.forEach(async (pokemon) => {
            const pokemonName = pokemon.name;

            const pokemonInitialData = await axios(pokemon.url).then(response => {
                return {
                    "pokemonHp": response.data.stats[0].base_stat,
                    "pokemonImageUrl": response.data.sprites.other.dream_world.front_default
                }
            });

            dispatch({
                type: types.ADD_POKEMON,
                payload: {
                    "name": pokemonName,
                    "hp": pokemonInitialData.pokemonHp,
                    "imageUrl": pokemonInitialData.pokemonImageUrl
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