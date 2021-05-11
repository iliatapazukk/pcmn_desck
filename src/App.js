import React from 'react';
import s from './App.modules.scss'
import cn from 'classnames'
import './custom.css'

const App = () => {
  return (
    <div className={cn(s.header, 'color')}>Hello world</div>
  )
}

export default App;