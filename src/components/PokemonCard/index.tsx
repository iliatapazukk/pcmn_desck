import React from 'react'
import Heading from '../Heading'

import s from './PokemonCard.module.scss'

export interface PokemonStatsI {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

export interface PokemonCardI {
  nameClean?: string
  abilities?: string[]
  types: string[]
  img: string
  name: string
  baseExperience?: number
  height?: number
  id: number
  isDefault?: boolean
  order?: number
  weight?: number
  style: any
  // Не разобрался как описать дочерние свойства
  // Property 'defense' does not exist on type 'PropsWithChildren '
  stats?: PokemonStatsI
  attack?: number
  defense?: number
}

const PokemonCard: React.FC<PokemonCardI> = ({ img, name, attack, defense, id, types, style }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h4" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types?.map((type) => {
            return (
              <span key={type} className={s.label}>
                {type}
              </span>
            )
          })}
        </div>
      </div>
      <div className={s.pictureWrap} style={style}>
        <img src={img} alt={name} />
      </div>
    </div>
  )
}

export default PokemonCard
