import React from 'react'
import Provider from './provider'
import { createStore } from 'redux'
import App from './app'

const reducer = (state = { color: 'red' }, action) => {
  if (action.type === 'CHANGE_COLOR') {
    return { ...state, color: action.payload }
  }
  return state
}

const store = createStore(reducer)

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppContainer
