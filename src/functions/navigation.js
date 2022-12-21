import { useState } from 'react'

    const [pokemonId, setPokemonId] = useState(1);

    const prevId = () => {
        (pokemonId === 1)
        ? alert('Es el primeer Pokemon')
        : setPokemonId(pokemonId - 1)
    }

    const nextId = () => {
        setPokemonId(pokemonId + 1)
    }

export {
    prevId,
    nextId
}