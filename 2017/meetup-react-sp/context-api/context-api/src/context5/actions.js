import React from 'react'

const Actions = ({ changeColor }) => (
  <div className='buttons'>
    {['red', 'blue', 'green'].map((color) => (
      <button className={`button-${color}`} onClick={changeColor(color)} style={{ background: color }} key={color}>
        {color}
      </button>
    ))}
  </div>
)

export default Actions
