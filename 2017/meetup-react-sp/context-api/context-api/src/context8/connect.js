import React, { PureComponent } from 'react'
import t from 'prop-types'

const connect = (Wrapper) => {
  class Connect extends PureComponent {
    componentDidMount () {
      this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    render () {
      return <Wrapper {...this.props} {...this.context.store} />
    }
  }

  Connect.contextTypes = {
    store: t.object
  }

  return Connect
}

export default connect
