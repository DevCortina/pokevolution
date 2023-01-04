import { useEffect, useState } from 'react'
import axios from "axios";

const getPokeImg = async name => {
  let resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  return resp.data.sprites.other['official-artwork'].front_default
}

const getEvoArray = async (id, state) => {
  const pokeArray = []
  let peticion = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)
  let pokeLv1 = peticion.data.chain.species.name
  let pokeLv1Img = await getPokeImg(pokeLv1)
  pokeArray.push([pokeLv1,pokeLv1Img])

  if (peticion.data.chain.evolves_to.length !== 0){
    let pokeLv2 = peticion.data.chain.evolves_to[0].species.name
    let pokeLv2Img = await getPokeImg(pokeLv2)
    pokeArray.push([pokeLv2, pokeLv2Img])

    if (peticion.data.chain.evolves_to[0].evolves_to.length !== 0){
      let pokeLv3 = peticion.data.chain.evolves_to[0].evolves_to[0].species.name
      let pokeLv3Img = await getPokeImg(pokeLv3)
      pokeArray.push([pokeLv3, pokeLv3Img])
     }
   }
   state(pokeArray);
  }

export { getEvoArray }