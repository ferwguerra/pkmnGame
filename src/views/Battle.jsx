import { useEffect } from "react";
import AttackList from "../components/AttackList";
import PokemonCard from "../components/PokemonCard";
import useAttackReducer from "../reducers/useAttackReducer";

const Battle = ({ userPokemon, userAttacks, iaPokemon, iaAttacks }) => {

  const [battleState, dispatch] = useAttackReducer(userPokemon, iaPokemon);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h1>Batalla</h1>
      <br></br>

      {battleState.battle.userPokemon.hp > 0 && battleState.battle.iaPokemon.hp > 0
        ?
        <div className="row">
          <div className="col-md-6">
            <h4>Usuario</h4>

            <div className="divPokemonCard">
              <PokemonCard pokemon={battleState.battle.userPokemon} />
            </div>

            <AttackList attacks={userAttacks} victim={battleState.battle.iaPokemon} attacker={"user"} dispatch={dispatch} />

          </div>

          <div className="col-md-6">
            <h4>IA</h4>

            <div className="divPokemonCard">
              <PokemonCard pokemon={battleState.battle.iaPokemon} />
            </div>

            <AttackList attacks={iaAttacks} victim={battleState.battle.userPokemon} attacker={"ia"} dispatch={dispatch} />

          </div>
        </div>
        :
        battleState.battle.userPokemon.hp > 0
          ?
          <div>Ganaste! No seras Ash Ketchum vos, no?</div>
          :
          <div>Perdiste :(</div>
      }
    </>
  );
};

export default Battle;
