import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import PokemonCard, { PokemonCardI } from '../../components/PokemonCard'
import s from './Pokedex.module.scss'

const colours = [
  'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  'linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)',
  'linear-gradient(270deg, #F2CB07 0.15%, #F2B807 100%)',
  'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
  'linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)',
]
const getColour = () => colours[Math.floor(Math.random() * colours.length)]

interface PokemonsDataI {
  count: number
  limit: number
  offset: number
  total: number
  pokemons: PokemonCardI[]
}

const usePkemons = () => {
  const [data, setData] = useState<PokemonsDataI>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons')
        const result = await response.json()
        setData(result)
        // eslint-disable-next-line no-console
        console.log('!!! data:', result)
      } catch (e) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    getPokemons()
  }, [])
  return {
    data,
    isLoading,
    isError,
  }
}

const Pokedex = () => {
  const { data, isLoading, isError } = usePkemons()
  if (isLoading) {
    return <div>Loading</div>
  }
  if (isError) {
    return <div>Error</div>
  }

  return (
    <>
      <div className={s.pokedex}>
        <Heading type="h2">
          {data?.total} <b>Pokemons</b> for you to choose favorite
        </Heading>
        <div className={s.pokedexWrapper}>
          {data?.pokemons.map(
            ({ name, img, id, types, stats }): JSX.Element => (
              <PokemonCard
                style={{ background: getColour() }}
                key={id}
                id={id}
                attack={stats?.attack}
                defense={stats?.defense}
                name={name}
                types={types}
                img={img}
              />
            ),
          )}
        </div>
      </div>
    </>
  )
}

export default Pokedex
