import React from 'react'
import cn from 'classnames'
import s from './Heading.module.scss'

interface props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  inline?: boolean
}

const Heading: React.FC<props> = ({ children, type, inline }) => {
  return React.createElement(`${type}`, { className: cn(s.root, `${type}`, inline ? s.inline : '') }, `${children}`)
}

export default Heading
