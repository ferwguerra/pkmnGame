import axios from "axios";

const useAttacks = () => {

    const getAttacksForPokemon = async (pokemonName) => {
        const moves = await axios("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
            .then(response => {
                return response.data.moves;
            });
        let attacks = [];
        moves.forEach((attack) => {
            attacks = [...attacks, {
                "name": attack.move.name,
                "damage": Math.floor(Math.random() * 10)
            }];
        });
        return attacks;
    }

    return [getAttacksForPokemon]
}

export default useAttacks