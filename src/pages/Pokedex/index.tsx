import React from 'react'
import Heading from '../../components/Heading'
import Header from '../../components/Header'
import PokemonCard from '../../components/PokemonCard'
import { pokemons } from '../../pokemons'
import s from './Pokedex.module.scss'

const colours = [
  'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  'linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)',
  'linear-gradient(270deg, #F2CB07 0.15%, #F2B807 100%)',
  'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
  'linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)',
]
const getColour = () => colours[Math.floor(Math.random() * colours.length)]

const Pokedex = () => {
  return (
    <div>
      <Header />
      <div className={s.pokedex}>
        <Heading type="h2">
          {pokemons.length} <b>Pokemons</b> for you to choose favorite
        </Heading>
        <div className={s.pokedexWrapper}>
          {pokemons.map(
            ({ name, img, id, types, stats }): JSX.Element => (
              <PokemonCard
                style={{ background: getColour() }}
                key={id}
                id={id}
                attack={stats.attack}
                defense={stats.defense}
                name={name}
                types={types}
                img={img}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Pokedex
