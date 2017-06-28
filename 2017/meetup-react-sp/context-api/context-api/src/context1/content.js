import React from 'react'
import Sidebar from './sidebar'
import MainContent from './main-content'

const Content = ({ color }) => (
  <div className='content'>
    <Sidebar color={color} />
    <MainContent color={color} />
  </div>
)

export default Content
