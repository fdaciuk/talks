'use strict'

export const addTodo = (() => {
  let counter = 0
  return (text) => ({
    type: 'ADD_TODO',
    id: counter++,
    text
  })
})()

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
