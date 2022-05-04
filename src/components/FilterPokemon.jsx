const FilterPokemon = ({ criteria, listPokemons, handleOnChange }) => {
    return (
        <>
            <div className="col-md-2 form-group">
                <input type="text" className="form-control" placeholder="Filtrar" name="name" value={criteria} onChange={handleOnChange} list="select-list-id" />
            </div>
            <datalist id="select-list-id">
                {listPokemons.filter((pokemon) => pokemon.name.includes(criteria)).map((pokemon, index) => (
                    <option key={index} value={pokemon.name}></option>
                ))}
            </datalist>
        </>
    );
}

export default FilterPokemon