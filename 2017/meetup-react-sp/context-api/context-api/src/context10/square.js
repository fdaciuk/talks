import React from 'react'
import connect from './connect'

export const Square = ({ color }) => (
  <div style={{ background: color }} className='square' />
)

const mapStateToProps = (state) => ({
  color: state.color
})

export default connect(mapStateToProps)(Square)
