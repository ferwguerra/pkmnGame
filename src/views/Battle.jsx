import ChooseAttackButton from "../components/ChooseAttackButton";
import useAttackReducer from "../reducers/useAttackReducer";

const Battle = ({ userPokemon, userAttacks, iaPokemon, iaAttacks }) => {

  const [battleState, dispatch] = useAttackReducer(userPokemon, iaPokemon);
  
  return (
    <>
      <h1>Batalla</h1>
      <br></br>

      {battleState.battle.userPokemon.hp > 0 && battleState.battle.iaPokemon.hp > 0
        ?
        <div className="row">
          <div className="column">
            <div>El usuario eligió el pokemon {battleState.battle.userPokemon.name}</div>
            <div>HP: {battleState.battle.userPokemon.hp}</div>
            <ul>
              {userAttacks.map((attack, index) => (
                <li key={index}>
                  {attack.name} / DMG: {attack.damage}
                  <ChooseAttackButton dispatch={dispatch} damage={attack.damage} victim={battleState.battle.iaPokemon} attacker={"user"}/>
                </li>
              ))}
            </ul>
          </div>

          <div className="column">
            <div>La IA usará al pokemon {battleState.battle.iaPokemon.name}</div>
            <div>HP: {battleState.battle.iaPokemon.hp}</div>
            <ul>
              {iaAttacks.map((attack, index) => (
                <li key={index}>
                  {attack.name} / DMG: {attack.damage}
                  <ChooseAttackButton dispatch={dispatch} damage={attack.damage} victim={battleState.battle.userPokemon} attacker={"ia"}/>
                </li>
              ))}
            </ul>
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
