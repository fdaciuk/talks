import { Children, PureComponent } from 'react'
import t from 'prop-types'

class Provider extends PureComponent {
  getChildContext () {
    return {
      __DA2K_STORE__: this.props.store
    }
  }

  render () {
    return Children.only(this.props.children)
  }
}

Provider.childContextTypes = {
  __DA2K_STORE__: t.object
}

export default Provider
