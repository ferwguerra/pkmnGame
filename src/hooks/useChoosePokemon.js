import useAttacks from "./useAttacks";

const useChoosePokemon = (pokemonsState, onReady, setUserPokemon, setUserAttacks, setIaPokemon, setIaAttacks) => {

    const [getAttacksForPokemon] = useAttacks();

    const handleClick = async (pokemonName) => {
        setUserPokemon(pokemonsState.pokemons.filter(p => p.name === pokemonName)[0]);
        setUserAttacks(await getAttacksForPokemon(pokemonName));
    
        let randomIndex = Math.floor(Math.random() * pokemonsState.pokemons.length);
        setIaPokemon(pokemonsState.pokemons[randomIndex]);
        setIaAttacks(await getAttacksForPokemon(pokemonsState.pokemons[randomIndex].name));
    
        onReady();
      }

    return [handleClick]
}

export default useChoosePokemon