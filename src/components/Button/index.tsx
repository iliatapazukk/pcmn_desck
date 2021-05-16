import React from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

interface props {
  onClick?: (event: React.MouseEvent) => void
  secondary?: boolean
  wide?: boolean
}
const Button: React.FC<props> = ({ children, onClick, secondary, wide }) => {
  return (
    <button className={cn(s.root, secondary ? s.secondary : '', wide ? s.wide : '')} onClick={onClick} type="button">
      {children}
    </button>
  )
}

export default Button
