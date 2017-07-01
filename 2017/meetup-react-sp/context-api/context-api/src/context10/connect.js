import React, { PureComponent } from 'react'
import t from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => (Wrapper) => {
  class Connect extends PureComponent {
    constructor (props, context) {
      super(props, context)
      this.store = context.__DA2K_STORE__
      this.isFunction = (f) => typeof f === 'function'
    }

    componentDidMount () {
      this.unsubscribe = this.store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    render () {
      const state = this.store.getState()
      const { dispatch } = this.store

      const stateToProps = this.isFunction(mapStateToProps)
        ? mapStateToProps(state, this.props)
        : state

      const dispatchToProps = this.isFunction(mapDispatchToProps)
        ? mapDispatchToProps(dispatch, this.props)
        : { dispatch }

      return (
        <Wrapper
          {...stateToProps}
          {...dispatchToProps}
          {...this.props}
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
