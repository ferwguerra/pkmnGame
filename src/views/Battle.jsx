import React from "react";

const Battle = ({ userPokemon, iaPokemon }) => {
  return (
    <>
      <h1>Batalla</h1>
      <br></br>
      <div>El usuario eligió el pokemon {userPokemon.name} con HP {userPokemon.hp}</div>
      <br></br>
      <div>La IA usará al pokemon {iaPokemon.name} con HP {iaPokemon.hp}</div>
    </>
  );
};

export default Battle;
