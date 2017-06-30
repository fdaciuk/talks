import React, { PureComponent } from 'react'
import t from 'prop-types'
import changeColor from './redux-actions'

const connect = (Wrapper) => {
  class Connect extends PureComponent {
    constructor (props, context) {
      super(props, context)

      this.store = context.__DA2K_STORE__

      this.changeColor = (color) => (e) => {
        this.store.dispatch(changeColor(color))
      }
    }

    componentDidMount () {
      this.unsubscribe = this.store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    render () {
      return (
        <Wrapper
          {...this.props}
          color={this.store.getState().color}
          changeColor={this.changeColor}
        />
      )
    }
  }

  Connect.contextTypes = {
    __DA2K_STORE__: t.object
  }

  return Connect
}

export default connect
