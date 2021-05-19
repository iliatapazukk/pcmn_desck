import React from 'react'
import Heading from '../../components/Heading'
import Header from '../../components/Header'
import PokemonCard from '../../components/PokemonCard'
import {pokemons} from  '../../pokemons'
import s from './Pokedex.module.scss'

interface props {
  img: string,
  name: string,
  baseExperience: number,
  height: number,
  id: number,
  isDefault: boolean,
  order: number,
  weight: number,
}

const Pokedex = () => {
  return (
    <div>
      <Header/>
      <div className={s.pokedex}>
        <Heading type='h2'>
          {pokemons.length} <b>Pokemons</b> for you to choose favorite
        </Heading>
        <div className={s.pokedexWrapper}>
          {pokemons.map(({ name, img, id }):JSX.Element => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              img={img}
            />
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default Pokedex
