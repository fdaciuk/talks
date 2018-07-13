;(function (history, doc) {
  'use strict'

  const $h1 = doc.querySelector('h1')
  const $links = doc.querySelectorAll('a')

  $links.forEach(($link) => {
    $link.addEventListener('click', handleNavigation, false)
  })

  function handleNavigation (e) {
    e.preventDefault()
    const $link = e.target
    const state = {}
    const title = $link.textContent
    const url = $link.getAttribute('href')
    history.pushState(state, title, url)
    // update DOM
    $h1.textContent = title
    doc.title = `>> ${title}`
  }
})(window.history, document)
