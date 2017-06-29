import React, { PureComponent } from 'react'
import t from 'prop-types'
import Square from './square'
import Actions from './actions'

class Header extends PureComponent {
  changeColor = (color) => (e) => {
    this.props.changeColor(color)(e)
    this.forceUpdate()
  }

  render () {
    const { color } = this.context.store

    return (
      <div className='header'>
        <Square color={color} />
        <Actions changeColor={this.changeColor} />
      </div>
    )
  }
}

Header.contextTypes = {
  store: t.object
}

export default Header
