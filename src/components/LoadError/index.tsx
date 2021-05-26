import * as React from 'react'
import Heading from '../Heading'

import s from './LoadError.module.scss'

const LoadError = () => {
  return (
    <div className={s.root}>
      <Heading type="h1">Load Error</Heading>
    </div>
  )
}

export default LoadError
