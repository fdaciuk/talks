;(function (win, history, doc) {
  'use strict'

  const $h1 = doc.querySelector('h1')
  const $links = doc.querySelectorAll('a')
  const initialTitle = $h1.textContent

  history.replaceState({ title: initialTitle }, initialTitle)

  $links.forEach(($link) => {
    $link.addEventListener('click', handleNavigation, false)
  })

  win.onpopstate = function (e) {
    console.log(e.state)
    render(e.state.title)
  }

  function handleNavigation (e) {
    e.preventDefault()
    const $link = e.target
    const state = { title: $link.textContent }
    const url = $link.getAttribute('href')
    history.pushState(state, state.title, url)
    render(state.title)
  }

  function render (title) {
    // update DOM
    $h1.textContent = title
    doc.title = `>> ${title}`
  }
})(window, window.history, document)
