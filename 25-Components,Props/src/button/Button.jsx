import React from 'react'
import './Button.css'

const Button = ({children, className}) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button