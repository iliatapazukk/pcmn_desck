import React from 'react'
import s from './Button.module.scss'

interface props {
  onClick?: (event: React.MouseEvent) => void
}
const Button: React.FC<props> = ({ children, onClick }) => {
  return (
    <button className={s.root} onClick={onClick} type="button">
      {children}
    </button>
  )
}

export default Button
