import React from "react";

const Battle = ({ userPokemon, userAttacks, iaPokemon, iaAttacks }) => {
  return (
    <>
      <h1>Batalla</h1>
      <br></br>

      <div className="row">
        <div className="column">
          <div>El usuario eligió el pokemon {userPokemon.name} con HP {userPokemon.hp}</div>
          <ul>
            {userAttacks.map((attack, index) => (
              <li key={index}>
                {attack.name} / DMG: {attack.damage}
                <input
                  type="button"
                  value="Usar"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <div>La IA usará al pokemon {iaPokemon.name} con HP {iaPokemon.hp}</div>
          <ul>
            {iaAttacks.map((attack, index) => (
              <li key={index}>
                {attack.name} / DMG: {attack.damage}
                <input
                  type="button"
                  value="Usar"
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
