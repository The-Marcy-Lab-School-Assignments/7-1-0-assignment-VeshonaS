import PokemonCard from './PokemonCard';
import PokemonContext from '../context/PokemonContext';

// TODO: import the PokemonContext and useContext

const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    const allPokemon = PokemonContext;

    return (
        <div className="ui six cards">
            {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} />)}
        </div>
    )
}

export default PokemonCollection