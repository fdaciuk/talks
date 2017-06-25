'use strict'

import React from 'react'
import style from './button.css'

const Button = ({ children, className }) => (
  <button className={`${className ? className : style.button}`}>{children}</button>
)

export { ButtonDanger } from './button-danger'
export default Button
