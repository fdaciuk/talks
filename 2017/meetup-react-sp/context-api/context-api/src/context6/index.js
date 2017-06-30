import React, { PureComponent } from 'react'
import t from 'prop-types'
import Header from './header'
import Content from './content'
import Footer from './footer'

class AppContainer extends PureComponent {
  constructor () {
    super()

    let subscriptions = []

    const subscribe = (f) => {
      subscriptions.push(f)
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
    return (
      <div className='main'>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

AppContainer.childContextTypes = {
  store: t.object
}

export default AppContainer
