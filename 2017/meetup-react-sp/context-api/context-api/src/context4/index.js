import React, { PureComponent } from 'react'
import t from 'prop-types'
import Header from './header'
import Content from './content'
import Footer from './footer'

class AppContainer extends PureComponent {
  state = {
    color: 'red'
  }

  changeColor = (color) => (e) => {
    this.setState({ color })
  }

  getChildContext () {
    return {
      color: this.state.color
    }
  }

  render () {
    return (
      <div className='main'>
        <Header changeColor={this.changeColor} />
        <Content />
        <Footer changeColor={this.changeColor} />
      </div>
    )
  }
}

AppContainer.childContextTypes = {
  color: t.string
}

export default AppContainer
