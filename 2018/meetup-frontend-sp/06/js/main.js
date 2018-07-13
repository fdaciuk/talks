;(function (history) {
  'use strict'

  const $links = document.querySelectorAll('a')

  $links.forEach(($link) => {
    $link.addEventListener('click', handleNavigation, false)
  })

  function handleNavigation (e) {
    e.preventDefault()
    const $link = e.target
    const state = {}
    const title = ''
    const url = $link.getAttribute('href')
    history.replaceState(state, title, url)
  }
})(window.history)
