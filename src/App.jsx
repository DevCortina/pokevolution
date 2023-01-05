// Core Components
import { useEffect, useState } from "react";
import { getEvoArray } from "./functions/getEvoArray";
// Custom Components
import { Button } from "./components/Button";
import { Card } from './components/Card';
// Estilos CSS
import './sass/App.scss'
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

const App = () => {

  const [pokemonId, setPokemonId] = useState(1);
  const [pokeEvolution, setPokeEvolution] = useState([])

  useEffect(() => {
     getEvoArray(pokemonId, setPokeEvolution)
  },[pokemonId])

    const prevId = () => {
        (pokemonId === 1)
        ? alert('Es el primeer Pokemon')
        : setPokemonId(pokemonId - 1)
    }

    const nextId = () => {
        setPokemonId(pokemonId + 1)
    }



  return(
    <>
    <h1 className="title">Pokemon Evolution Cards from PokeAPI</h1>
    <div className="app">
      <div className={`card__container card${pokeEvolution.length}`}>
        {pokeEvolution.map(pokemon => 
          <Card
            key={pokemon[0]}
            name={pokemon[0]}
            imagen={pokemon[1]} /> )}
        
      </div>
      <div className="buttons__container">
        <Button
         icon={<TiArrowLeftOutline />} 
         handleClick={prevId}
         />
s
         
        <Button
         icon={<TiArrowRightOutline />}
         handleClick={nextId}
          />
      </div>
      </div>
    </>
  )
}

export {App}