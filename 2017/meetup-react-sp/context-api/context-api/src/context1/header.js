import React from 'react'
import Square from './square'
import Actions from './actions'

const Header = ({ color, changeColor }) => (
  <div className='header'>
    <Square color={color} />
    <Actions changeColor={changeColor} />
  </div>
)

export default Header
