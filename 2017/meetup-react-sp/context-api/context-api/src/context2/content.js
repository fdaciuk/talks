import React from 'react'
import t from 'prop-types'
import Sidebar from './sidebar'
import MainContent from './main-content'

const Content = (props, { color }) => (
  <div className='content'>
    <Sidebar color={color} />
    <MainContent color={color} />
  </div>
)

Content.contextTypes = {
  color: t.string
}

export default Content
