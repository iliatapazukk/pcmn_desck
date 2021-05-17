import React from 'react'
import cn from 'classnames'
import s from './Button.module.scss'

interface props {
  onClick?: (event: React.MouseEvent) => void
  isSecondary?: boolean
  isWide?: boolean
  isCenterd?: boolean
}
const Button: React.FC<props> = ({ children, onClick, isSecondary, isWide, isCenterd }) => {
  return (
    <button
      className={cn(s.root, isSecondary ? s.secondary : '', isWide ? s.wide : '', isCenterd ? s.centered : '')}
      onClick={onClick}
      type="button">
      {children}
    </button>
  )
}

export default Button
