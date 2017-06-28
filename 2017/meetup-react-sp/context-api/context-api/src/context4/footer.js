import React from 'react'
import t from 'prop-types'
import Square from './square'
import Actions from './actions'

const Footer = ({ changeColor }, { color }) => (
  <div className='footer'>
    <Square color={color} />
    <Actions changeColor={changeColor} />
  </div>
)

Footer.contextTypes = {
  color: t.string
}

export default Footer
