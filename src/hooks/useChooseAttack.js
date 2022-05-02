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

    return [handleClick]
}

export default useChooseAttack