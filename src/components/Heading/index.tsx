import React from 'react'
import cn from 'classnames'
import s from './Heading.module.scss'

interface props {
  isInline?: boolean
  isInvert?: boolean
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}
const Heading: React.FC<props> = ({ children, type, isInline, isInvert }) => {
  return React.createElement(
    type,
    { className: cn(s.root, s[type], isInline ? s.inline : '', isInvert ? s.invert : '') },
    children,
  )
}

export default Heading
