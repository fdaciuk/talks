import React from 'react'
import connect from './connect'
import changeColor from './redux-actions'

export const Actions = ({ handleChangeColor }) => (
  <div className='buttons'>
    {['red', 'blue', 'green'].map((color) => (
      <button className={`button-${color}`} onClick={handleChangeColor(color)} style={{ background: color }} key={color}>
        {color}
      </button>
    ))}
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  handleChangeColor: (color) => (e) => {
    dispatch(changeColor(color))
  }
})

export default connect(null, mapDispatchToProps)(Actions)
