import React, { PureComponent } from 'react'
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

  render () {
    return (
      <div className='main'>
        <Header color={this.state.color} changeColor={this.changeColor} />
        <Content color={this.state.color} />
        <Footer color={this.state.color} changeColor={this.changeColor} />
      </div>
    )
  }
}

export default AppContainer
