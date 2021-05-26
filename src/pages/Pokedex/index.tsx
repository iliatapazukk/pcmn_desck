import React, { useState, useMemo } from 'react'
import Heading from '../../components/Heading'
import PokemonCard from '../../components/PokemonCard'
import s from './Pokedex.module.scss'
import Spinner from '../../components/Spinner'
import LoadError from '../../components/LoadError'
import useData from '../../hook/getData'

const colours = [
  'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  'linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)',
  'linear-gradient(270deg, #F2CB07 0.15%, #F2B807 100%)',
  'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
  'linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)',
]
const getColour = () => colours[Math.floor(Math.random() * colours.length)]

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const query = useMemo(() => ({ name: searchValue }), [searchValue])

  const { data, isLoading, isError } = useData('getPokemons', query)

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <LoadError />
  }
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('!!! event:', event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <>
      <div className={s.pokedex}>
        <Heading type="h2">
          {!isLoading && data?.total} <b>Pokemons</b> for you to choose favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={s.pokedexWrapper}>
          {!isLoading &&
            data?.pokemons.map(
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
