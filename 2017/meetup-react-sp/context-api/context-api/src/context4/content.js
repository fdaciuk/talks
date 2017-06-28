import React, { PureComponent } from 'react'
import t from 'prop-types'
import Sidebar from './sidebar'
import MainContent from './main-content'

class Content extends PureComponent {
  render () {
    const { color } = this.context

    return (
      <div className='content'>
        <Sidebar color={color} />
        <MainContent color={color} />
      </div>
    )
  }
}

Content.contextTypes = {
  color: t.string
}

export default Content
