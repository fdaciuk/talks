;(function (win, history, doc) {
  'use strict'

  const $h1 = doc.querySelector('h1')
  const $links = doc.querySelectorAll('a')


  $links.forEach(($link) => {
    $link.addEventListener('click', handleNavigation, false)
    if (window.location.pathname === $link.getAttribute('href')) {
      const initialTitle = $link.textContent
      history.replaceState({ title: initialTitle }, initialTitle)
      render(initialTitle)
    }
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
