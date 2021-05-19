import React from 'react';
import Heading from "../Heading";

import s from './PokemonCard.module.scss';

export interface PokemonCard {
  img?: string,
  name?: string,
  baseExperience?: number,
  height?: number,
  id?: number,
  isDefault?: boolean,
  order?: number,
  weight?: number,
  types?: string[],
}
const PokemonCard:React.FC<PokemonCard> = (
  {
    img,
    name,
    baseExperience,
    height,
    id,
    isDefault,
    order,
    weight,
    types
  }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type='h6' className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {order}
            </div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {baseExperience}
            </div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;