import useAttackReducer from "../hooks/useAttackReducer";
import { types } from "../types/types";

const Battle = ({ userPokemon, userAttacks, iaPokemon, iaAttacks }) => {

  const [battleState, dispatch] = useAttackReducer(userPokemon, iaPokemon);

  const handleClick = (damage, attacked, attacker) => {
    dispatch({
      type: types.ATTACK,
      payload: {
        damage: damage,
        attacked: attacked,
        attacker: attacker
      }
    });
  }

  return (
    <>
      <h1>Batalla</h1>
      <br></br>

      <div className="row">
        <div className="column">
          <div>El usuario eligió el pokemon {battleState.battle.userPokemon.name}</div>
          <div>HP: {battleState.battle.userPokemon.hp}</div>
          <ul>
            {userAttacks.map((attack, index) => (
              <li key={index}>
                {attack.name} / DMG: {attack.damage}
                <input
                  type="button"
                  value="Usar"
                  onClick={() => handleClick(attack.damage, battleState.battle.iaPokemon, "user")}
                />
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
                <input
                  type="button"
                  value="Usar"
                  onClick={() => handleClick(attack.damage, battleState.battle.userPokemon, "ia")}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Battle;
