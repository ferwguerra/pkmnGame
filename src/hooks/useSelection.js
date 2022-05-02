import axios from "axios";
import { types } from "../types/types";
import usePokemonReducer from "./usePokemonReducer";

const useSelection = () => {
    const [pokemonsState, dispatch] = usePokemonReducer();

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

    return [getPokemons]

}

export default useSelection