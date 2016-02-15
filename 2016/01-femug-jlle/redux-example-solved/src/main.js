'use strict'

import store from './store'
import { addTodo, toggleTodo } from './actions/todos'

const $ = (el) => document.querySelector(el)
const on = (el, method, callback) => {
  el.addEventListener(method, callback, false)
}

const $counter = $('[data-js="counter"]')
const $decrement = $('[data-js="decrement"]')
const $increment = $('[data-js="increment"]')

const $addTodo = $('[data-js="add-todo"]')
const $inputTodo = $('[data-js="input-todo"]')
const $todoList = $('[data-js="todo-list"]')

const todoItems = () => {
  const $lis = store.getState().todos.map((todo, index) => {
    const $li = document.createElement('li')
    $li.innerText = todo.text
    $li.id = todo.id

    on($li, 'click', () => {
      store.dispatch(toggleTodo(+$li.id))
      const thisTodo = store.getState().todos[index]
      $li.style.textDecoration = thisTodo.completed
        ? 'line-through'
        : 'none'
    })
    return $li
  })

  return $lis
}

const addNewTodo = () => {
  store.dispatch(addTodo($inputTodo.value))

  $todoList.innerHTML = ''
  todoItems().forEach($item => {
    $todoList.appendChild($item)
  })
  $inputTodo.value = ''
  $inputTodo.focus()
}

on($decrement, 'click', () => store.dispatch({ type: 'DECREMENT' }))
on($increment, 'click', () => store.dispatch({ type: 'INCREMENT' }))
on($addTodo, 'click', addNewTodo)

on($inputTodo, 'keyup', (e) => {
  const keyPressed = e.keyCode || e.which
  const ENTER = 13
  if(keyPressed === ENTER) addNewTodo()
})

const render = () => {
  const newState = store.getState()
  $counter.innerText = newState.counter
  console.log(newState)
}

const unsubscribe = store.subscribe(render)
render()
