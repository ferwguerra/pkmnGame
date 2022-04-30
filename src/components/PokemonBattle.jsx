import { useState } from "react";
import Battle from "./../views/Battle";
import Selection from "./../views/Selection";


const PokemonBattle = () => {

    const [ready, setReady] = useState(false);

    const readyToBattle = () => {
        setReady(true);
    };

    const [userPokemon, setUserPokemon] = useState("");
    const [iaPokemon, setIaPokemon] = useState("");

    return (
        <div>
            {ready
                ? <Battle userPokemon={userPokemon} iaPokemon={iaPokemon} />
                : <Selection onReady={readyToBattle} setUserPokemon={setUserPokemon} setIaPokemon={setIaPokemon} />}
        </div>
    );
};

export default PokemonBattle;
