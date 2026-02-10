import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function PokemonDetails() {

    const params = useParams ()

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/${params.pokemonName}')
        .then ((response) => {
            return response.json();
        })
        .then ((reponse) => {
            console.log(response)
        })
        .catch ((error)=> {
            console.log(error)
        })

    }, [params.pokemonName])

    if (pokemon===null) {
        return (<h3>Searching...</h3>)
    }

  return (
    <div > 
        <h2>{pokemon.name}</h2>
        <h3>weight: {pokemon.weight}</h3>
        <img src={pokemon.sprites.front_default} alt="pokemon" width= "160px" />
        


    </div>
  );
}

export default PokemonDetails;