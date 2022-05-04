import useChooseAttack from "../hooks/useChooseAttack";

const AttackList = ({ attacks, victim, attacker, dispatch }) => {

    const [getClassesForAttack, handleClick] = useChooseAttack(dispatch);

    return (
        <div className="list-group">
            {attacks.map((attack, index) => (
                <button className="list-group-item list-group-item-action" key={index}
                    onClick={() => handleClick(attack.damage, victim, attacker)}>
                    {attack.name}
                    <span className={getClassesForAttack(attack)} style={{ float: "right" }}>{attack.damage}</span>
                </button>
            ))}
        </div>

    );
}

export default AttackList;