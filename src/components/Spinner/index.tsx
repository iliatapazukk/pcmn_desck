import * as React from 'react'

import s from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={s.root}>
      <div className={s.spinner} />
    </div>
  )
}

export default Spinner
