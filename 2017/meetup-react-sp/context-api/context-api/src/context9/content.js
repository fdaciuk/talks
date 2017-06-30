import React from 'react'
import Sidebar from './sidebar'
import MainContent from './main-content'
import connect from './connect'

const Content = ({ color }) => (
  <div className='content'>
    <Sidebar color={color} />
    <MainContent color={color} />
  </div>
)

export default connect(Content)
