import React from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

interface props {
  onClick?: (event: React.MouseEvent) => void
  secondary?: boolean
  isWide?: boolean
}
const Button: React.FC<props> = ({ children, onClick, secondary, isWide }) => {
  return (
    <button className={cn(s.root, secondary ? s.secondary : '', isWide ? s.wide : '')} onClick={onClick} type="button">
      {children}
    </button>
  )
}

export default Button
