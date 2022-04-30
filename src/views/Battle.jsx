import React from "react";

const Battle = ({ userPokemon, iaPokemon }) => {
  return (
    <>
      <h1>Batalla</h1>
      <br></br>
      <div>El usuario eligió el pokemon {userPokemon}</div>
      <br></br>
      <div>La IA usará al pokemon {iaPokemon}</div>
    </>
  );
};

export default Battle;
