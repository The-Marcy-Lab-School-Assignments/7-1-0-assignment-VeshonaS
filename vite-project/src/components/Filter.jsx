// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import { useState, useEffect } from "react"
import PokemonContext from "../context/PokemonContext"
import { useContext } from "react";
import PokemonCard from "./PokemonCard";

const Filter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {allPokemon} = useContext(PokemonContext)
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredData.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name}
          frontImage ={pokemon.front}
          backImage ={pokemon.back}
          hp = {pokemon.hp}>{pokemon.name}</PokemonCard>
        ))}
      </ul>
    </div>
  );

}

export default Filter