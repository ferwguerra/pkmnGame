import axios from "axios";

const useAttacks = () => {

    const getAttacksForPokemon = async (pokemonName) => {
        const moves = await axios("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
            .then(response => {
                return response.data.moves;
            });
        let attacks = [];
        moves.some((attack, index) => {
            attacks = [...attacks, {
                "name": attack.move.name,
                "damage": Math.floor(Math.random() * 10) + 1
            }];
            return index === 10; // limiting amount of attacks to keep it simple
        });
        return attacks;
    }

    return [getAttacksForPokemon]
}

export default useAttacks