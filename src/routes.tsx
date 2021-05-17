import React from 'react'
import HomePage from './pages/Home'
import EmptyPage from './pages/Empty'

interface IGeneralMenu {
  title: string
  link: LinkEnum
  component: () => JSX.Element
}
// error  'LinkEnum' is already declared in the upper scope  no-shadow
// eslint-disable-next-line no-shadow
export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/Documentation',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <EmptyPage title="Pokédex" />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
]

interface IAccItem {
  [n: string]: () => JSX.Element
}

const routes = GENERAL_MENU.reduce((acc: IAccItem, item) => {
  acc[item.link] = item.component
  return acc
}, {})

export default routes
