import React from 'react'
import { render } from 'react-dom'
import App from './app'
import registerServiceWorker from './registerServiceWorker'

const renderApp = (App) => {
  render(<App />, document.getElementById('root'))
}

renderApp(App)
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp(App)
  })
}
