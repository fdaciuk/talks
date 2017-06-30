import React, { PureComponent } from 'react'
import t from 'prop-types'
import Header from './header'
import Content from './content'
import Footer from './footer'

class App extends PureComponent {
  componentDidMount () {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <div className='main'>
        <Header />
        <Content />
        {this.context.store.color !== 'green' && <Footer />}
      </div>
    )
  }
}

App.contextTypes = {
  store: t.object
}

export default App
