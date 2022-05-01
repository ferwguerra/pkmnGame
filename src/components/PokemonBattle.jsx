import { useState } from "react";
import Battle from "./../views/Battle";
import Selection from "./../views/Selection";


const PokemonBattle = () => {

    const [ready, setReady] = useState(false);

    const readyToBattle = () => {
        setReady(true);
    };

    const [userPokemon, setUserPokemon] = useState({});
    const [iaPokemon, setIaPokemon] = useState({});

    const [userAttacks, setUserAttacks] = useState([]);
    const [iaAttacks, setIaAttacks] = useState([]);

    return (
        <div>
            {ready
                ? <Battle userPokemon={userPokemon} userAttacks={userAttacks} iaPokemon={iaPokemon} iaAttacks={iaAttacks} />
                : <Selection onReady={readyToBattle}
                    setUserPokemon={setUserPokemon} setUserAttacks={setUserAttacks}
                    setIaPokemon={setIaPokemon} setIaAttacks={setIaAttacks} />}
        </div>
    );
};

export default PokemonBattle;
