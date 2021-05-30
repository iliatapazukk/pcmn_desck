import React from 'react'
import useData from '../../hook/getData';
import Spinner from '../../components/Spinner';
import s from './Pokemon.module.scss'
import Heading from '../../components/Heading';

import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter'

export interface IPokemonProps {
  id: any,
  name?: string
  img?: string
  abilities?: Array<string> | undefined
  stats?: any

}

const Pokemon: React.FC<IPokemonProps> = ({id}) => {
  const { data, isLoading } = useData<IPokemonProps>('getPokemon', {id})
  console.log('!!! data:', data)
  const test = toCapitalizeFirstLetter('test it')
  console.log('!!! toCapitalizeFirstLetter:', test)
  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className={s.root}>
      <div className={s.pokemonModal}>
          <div className={s.image}>
            <img src={data?.img} alt={data?.name}/>
          </div>
          <div className={s.data}>
            <div className={s.order}>
              {data?.id}
            </div>
            <Heading isInvert type="h2">
              {toCapitalizeFirstLetter(`${data?.name}`)}
            </Heading>
            <div className={s.abilities}>
              <Heading type="h5">
                Abilities <br />
                {data?.abilities?.map((item) => {
                  return (
                    <span key={item}>
                      {item}&nbsp;
                    </span>
                  )
                })}
              </Heading>
            </div>
            <div className={s.stats}>
              <div className={s.item}>
                <div className={s.count}>
                  {data?.stats.defense}
                </div>
                <Heading type="p">
                  Defence
                </Heading>
              </div>
              <div className={s.item}>
                <div className={s.count}>
                  {data?.stats.attack}
                </div>
                <Heading type="p">
                  Attack
                </Heading>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Pokemon;