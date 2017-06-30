import React from 'react'
import Square from './square'
import Actions from './actions'
import connect from './connect'

const Footer = ({ color, changeColor }) => (
  <div className='footer'>
    <Square color={color} />
    <Actions changeColor={changeColor} />
  </div>
)

export default connect(Footer)
