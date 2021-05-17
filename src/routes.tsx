import React from 'react'
import HomePage from './pages/Home'
import EmptyPage from './pages/Empty'
import NotFoundPage from './pages/NotFoundPage'

const routes = {
  '/': () => <HomePage />,
  '/pokedex': () => <EmptyPage />,
  '/documentation': () => <NotFoundPage />,
}
export default routes
