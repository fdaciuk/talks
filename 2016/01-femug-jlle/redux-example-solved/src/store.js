'use strict'

import { createStore, combineReducers } from 'redux'
import counter from './reducers/counter'
import todos from './reducers/todos'

const reducer = combineReducers({ counter, todos })
const store = createStore(reducer)

export default store
