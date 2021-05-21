import React from 'react'
import Heading from '../Heading'

import s from './PokemonCard.module.scss'

export interface PokemonCardI {
  img: string
  name: string
  attack: number
  defense: number
  id: number
  types?: string[]
  style: any
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
