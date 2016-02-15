'use strict'

import { expect } from 'chai'
import todos from '../src/reducers/todos'

describe('# TODOS', function() {
  it('Should add todo', function() {
    const before = Object.freeze([])
    const action = Object.freeze({
      type: 'ADD_TODO',
      id: 0,
      text: 'hey'
    })
    const after = [{
      id: 0,
      text: 'hey',
      completed: false
    }]
    expect(todos(before, action)).to.eql(after)
  })

  it('Should toggle todo', function() {
    const before = [{
      id: 0,
      text: 'hey',
      completed: false
    }]
    const action = Object.freeze({})
    const after = [{
      id: 0,
      text: 'hey',
      completed: true
    }]
  })

  it('Should return initial state (empty array)', function() {
    const before = undefined
    const action = Object.freeze({})
    const after = []
    expect(todos(before, action)).to.eql(after)
  })

  it('Should return same state when pass unknown method', function() {
    const before = Object.freeze([{
      id: 0,
      text: 'hey',
      completed: false
    }])
    const action = Object.freeze({ type: 'UNKNOWN' })
    const after = [{
      id: 0,
      text: 'hey',
      completed: false
    }]
    expect(todos(before, action)).to.eql(after)
  })
})
