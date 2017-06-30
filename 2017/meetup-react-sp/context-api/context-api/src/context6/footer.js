import React, { PureComponent } from 'react'
import t from 'prop-types'
import Square from './square'
import Actions from './actions'

class Footer extends PureComponent {
  componentDidMount () {
    this.context.store.subscribe(() => this.forceUpdate())
  }

  render () {
    const { color, changeColor } = this.context.store

    return (
      <div className='footer'>
        <Square color={color} />
        <Actions changeColor={changeColor} />
      </div>
    )
  }
}

Footer.contextTypes = {
  store: t.object
}

export default Footer
