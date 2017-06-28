import React from 'react'
import t from 'prop-types'
import Square from './square'
import Actions from './actions'

const Header = ({ changeColor }, { color }) => (
  <div className='header'>
    <Square color={color} />
    <Actions changeColor={changeColor} />
  </div>
)

Header.contextTypes = {
  color: t.string
}

export default Header
