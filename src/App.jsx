import { useState } from "react";
import { Button } from "./components/Button";
import './sass/App.scss'
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

const App = () => {

  const [pokemonId, setPokemonId] = useState(1);

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
      <div className="buttons__container">
        <Button
         icon={<TiArrowLeftOutline />} 
         handleClick={prevId}
         />
         { pokemonId }
        <Button
         icon={<TiArrowRightOutline />}
         handleClick={nextId}
          />
      </div>
    </>
  )
}

export {App}