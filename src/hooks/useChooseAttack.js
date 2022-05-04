import { types } from "../types/types";

const useChooseAttack = (dispatch) => {

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

  const getClassesForAttack = (attack) => {
    let classes = "badge rounded-pill ";
    if (attack.damage > 8) {
      return classes.concat("bg-danger");
    } else if (attack.damage < 5) {
      return classes.concat("bg-success");
    }
    return classes.concat("bg-warning");
  }


  return [getClassesForAttack, handleClick]
}

export default useChooseAttack