import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {A} from 'hookrouter';
import Heading from '../../components/Heading'
import PokemonCard from '../../components/PokemonCard'
import s from './Pokedex.module.scss'
import Spinner from '../../components/Spinner'
import LoadError from '../../components/LoadError'
import useData from '../../hook/getData'

import {IPokemons, PokemonsRequest} from '../../interfface'
import useDebounse from '../../hook/useDebounse';
import {LinkEnum} from '../../routes';
import {getPokemonsTypes, getPokemonsTypesLoading, getTypesAction} from '../../store/pokemons';
import {IInitialState} from '../../store';

const colours = [
  'linear-gradient(270deg, #5BC7FA 0.15%, #35BAFF 100%)',
  'linear-gradient(270deg, #B33327 0.15%, #D93E30 100%)',
  'linear-gradient(270deg, #F2CB07 0.15%, #F2B807 100%)',
  'linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%)',
  'linear-gradient(270deg, #F89EAE 0.15%, #F4B5C1 100%)',
]
const getColour = () => colours[Math.floor(Math.random() * colours.length)]

interface IQuery {
  name?: string
}

const Pokedex = () => {

  const dispatch = useDispatch()

  const types = useSelector(getPokemonsTypes)
  const typesLoading = useSelector(getPokemonsTypesLoading)

  console.log('!!! types:', types)
  console.log('!!! typesLoading:', typesLoading)

  const [searchValue, setSearchValue] = useState<string>('')

  const [query, setQuery] = useState({})

  const debounceValue = useDebounse(searchValue, 500)

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debounceValue])

  useEffect(() => {
    dispatch(getTypesAction())
  }, [])

  if (isLoading) {
    return <Spinner />
  }
  if (isError) {
    return <LoadError />
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('!!! event:', event.target.value)
    setSearchValue(event.target.value)
    setQuery((state: IQuery) => ({...state, name: event.target.value}))
  }

  return (
    <>
      <div className={s.pokedex}>
        <Heading type="h2">
          {!isLoading && data && data?.total} <b>Pokemons</b> for you to choose favorite
        </Heading>
        <div>
          <input type="text" className={s.search} value={searchValue} onChange={handleSearchChange} />
        </div>
        <div className={s.pokedexWrapper}>
          {!isLoading && data &&
            data?.pokemons.map(
              (item: PokemonsRequest): JSX.Element => (
                <A href={`${LinkEnum.POKEDEX}/${item.id}`}>
                  <PokemonCard
                    style={{ background: getColour() }}
                    key={item.id}
                    id={item.id}
                    attack={item.stats?.attack}
                    defense={item.stats?.defense}
                    name={item.name}
                    types={item.types}
                    img={item.img}
                  />
                </A>
              ),
            )}
        </div>
      </div>
    </>
  )
}

export default Pokedex
