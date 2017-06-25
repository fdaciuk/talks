'use strict'

import React from 'react'
import Button from './index'
import style from './button-danger.css'

const ButtonDanger = ({ children }) => (
  <Button className={style.button__danger}>
    {children}
  </Button>
)

export { ButtonDanger }
