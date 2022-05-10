import { useEffect } from "react";
import AttackList from "../components/AttackList";
import CloseSessionButton from "../components/CloseSessionButton";
import PokemonCard from "../components/PokemonCard";
import useAttackReducer from "../reducers/useAttackReducer";

const Battle = ({ userPokemon, userAttacks, iaPokemon, iaAttacks }) => {

  const [battleState, dispatch] = useAttackReducer(userPokemon, iaPokemon);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <CloseSessionButton/>
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
          <>
            <div>Ganaste! No seras Ash Ketchum vos, no?</div>
            <img src="https://elcomercio.pe/resizer/V9Mz6wx9h_mJuj5Id8I8tIAzRKQ=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AAYVPZJJXREDJJFYJD263VPYHQ.jpg" alt="Perdiste" />
          </>
          :
          <>
            <div>Perdiste :(</div>
            <img src="https://pm1.narvii.com/6053/7478490c086ae68ef34d1bcbccc42f363125974b_hq.jpg" alt="Perdiste" />
          </>
      }
    </>
  );
};

export default Battle;
