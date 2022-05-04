import PokemonCard from "./PokemonCard";

const PokemonCards = ({ listPokemons, handleClick }) => {
    return (
        <div className="divPokemonCard">
            {listPokemons.map((pokemon, index) =>
                <div key={index}>
                    <PokemonCard pokemon={pokemon} handleClick={handleClick} />
                </div>
            )}
        </div>
    );
}

export default PokemonCards