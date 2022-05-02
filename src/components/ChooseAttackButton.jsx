import React from "react";
import useChooseAttack from "../hooks/useChooseAttack";

const ChooseAttackButton = ({ dispatch, damage, victim, attacker }) => {
    const [handleClick] = useChooseAttack(dispatch);

    return (
        <input
            type="button"
            value="Usar"
            onClick={() => handleClick(damage, victim, attacker)}
        />
    );
};

export default ChooseAttackButton;
