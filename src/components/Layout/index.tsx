import React from 'react'
import cn from 'classnames'
import s from './Layout.module.scss'

interface props {
  className?: string
}

const Layout: React.FC<props> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
)

export default Layout
