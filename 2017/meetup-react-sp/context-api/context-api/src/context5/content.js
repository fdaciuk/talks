import React, { PureComponent } from 'react'
import t from 'prop-types'
import Sidebar from './sidebar'
import MainContent from './main-content'

class Content extends PureComponent {
  render () {
    const { color } = this.context.store

    return (
      <div className='content'>
        <Sidebar color={color} />
        <MainContent color={color} />
      </div>
    )
  }
}

Content.contextTypes = {
  store: t.object
}

export default Content
