import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading'
import PokemonCard, { PokemonCardI } from '../../components/PokemonCard'
import s from './Pokedex.module.scss'
import { config } from '../../config'
import Spinner from '../../components/Spinner'
import LoadError from '../../components/LoadError'

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
      const uri = `${config.client.server.protocol}://AAAAA${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathName}`
      try {
        const response = await fetch(uri)
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
    return <Spinner />
  }
  if (isError) {
    return <LoadError />
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
