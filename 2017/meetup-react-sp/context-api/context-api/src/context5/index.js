import React, { PureComponent } from 'react'
import t from 'prop-types'
import Header from './header'
import Content from './content'
import Footer from './footer'

class AppContainer extends PureComponent {
  store = {
    color: 'red'
  }

  changeColor = (color) => (e) => {
    this.store.color = color
  }

  getChildContext () {
    return {
      store: this.store
    }
  }

  render () {
    return (
      <div className='main'>
        <Header changeColor={this.changeColor} />
        <Content changeColor={this.changeColor} />
        <Footer changeColor={this.changeColor} />
      </div>
    )
  }
}

AppContainer.childContextTypes = {
  store: t.object
}

export default AppContainer
