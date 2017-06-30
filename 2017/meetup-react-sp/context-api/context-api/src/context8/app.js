import React from 'react'
import Header from './header'
import Content from './content'
import Footer from './footer'
import connect from './connect'

const App = ({ color }) => (
  <div className='main'>
    <Header />
    <Content />
    {color !== 'green' && <Footer />}
  </div>
)

export default connect(App)
