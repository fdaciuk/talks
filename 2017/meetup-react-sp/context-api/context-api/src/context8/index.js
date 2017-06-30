import React, { PureComponent } from 'react'
import t from 'prop-types'
import App from './app'

class AppContainer extends PureComponent {
  constructor () {
    super()

    let subscriptions = []

    const subscribe = (f) => {
      subscriptions.push(f)
      return () => {
        subscriptions = subscriptions.filter(func => func !== f)
      }
    }

    const changeColor = (color) => (e) => {
      this.store.color = color
      subscriptions.forEach(f => f())
    }

    this.store = {
      color: 'red',
      subscribe,
      changeColor
    }
  }

  getChildContext () {
    return {
      store: this.store
    }
  }

  render () {
    return <App />
  }
}

AppContainer.childContextTypes = {
  store: t.object
}

export default AppContainer
