import React from 'react'
import { A } from 'hookrouter'
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg'
import s from './Header.module.scss'

interface ItemMenu {
  id: number
  value: string
  link: string
}
const MENU: ItemMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendaries',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
]
const Header = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ value, link, id }) => (
            <A key={id} href={link} className={s.menuLink}>
              {value}
            </A>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
