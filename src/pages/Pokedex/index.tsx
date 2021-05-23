import React, {useEffect, useState} from 'react'
import Heading from '../../components/Heading'
import PokemonCard, {PokemonCardI} from '../../components/PokemonCard'
import s from './Pokedex.module.scss'

const colours = [
  'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  'linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)',
  'linear-gradient(270deg, #F2CB07 0.15%, #F2B807 100%)',
  'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
  'linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)',
]
const getColour = () => colours[Math.floor(Math.random() * colours.length)]

const usePkemons = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect( () => {
    const getPokemons = async () =>{
      setIsLoading(true);
      try {
        // TODO: определить правильно тип
        type pkDataAny = any
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const result:pkDataAny = await response.json();
        setData(result);
        // eslint-disable-next-line no-console
        console.log('!!! data:', result.pokemons)
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getPokemons();
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
          {data.total} <b>Pokemons</b> for you to choose favorite
        </Heading>
        <div className={s.pokedexWrapper}>
          {data.pokemons.map(
            ({ name, img, id, types, stats }): JSX.Element => (
              <PokemonCard
                style={{ background: getColour() }}
                key={id}
                id={id}
                // TODO: определить типы
                // attack={stats.attack}
                // defense={stats.defense}
                attack={0}
                defense={0}
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
