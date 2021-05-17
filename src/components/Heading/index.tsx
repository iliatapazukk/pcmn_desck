import React from 'react'
import cn from 'classnames'
import s from './Heading.module.scss'

interface props {
  inline?: boolean
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

// return React.createElement(`${type}`, { className: cn(s.root, s[type], inline ? s.inline : '') }, `${children}`)

const Heading: React.FC<props> = ({ children, type, inline }) => {
  switch (type) {
    case 'h1':
      return <h1 className={cn(s.root, s.h1)}>{children}</h1>
    case 'h2':
      return <h2 className={cn(s.root, s.h2)}>{children}</h2>
    case 'h3':
      return <h2 className={cn(s.root, s.h2)}>{children}</h2>
    case 'h4':
      return <h4 className={cn(s.root, s.h4)}>{children}</h4>
    case 'h5':
      return <h5 className={cn(s.root, s.h5)}>{children}</h5>
    case 'h6':
      return <h6 className={cn(s.root, s.h6)}>{children}</h6>
    default:
      return <p className={cn(s.root, s.p)}>{children}</p>
  }
}

export default Heading
