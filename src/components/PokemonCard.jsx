import ChoosePokemonButton from "./ChoosePokemonButton";

const PokemonCard = ({ pokemon, handleClick }) => {

    console.log(pokemon);

    return (
        <div className="card mb-4">
            <div className="row no-gutters">
                <div className="col-md-6">
                    <img src={pokemon.imageUrl} className="card-img" alt="Avatar" style={{"height" : "150px", "width" : "180px"}}/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">HP: {pokemon.hp}</p>
                        {handleClick && <ChoosePokemonButton handleClick={handleClick} pokemonName={pokemon.name} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard