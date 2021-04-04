function createObservable (subscribe) {
  return {
    subscribe,
    pipe (operator) {
      return operator(this)
    },
  }
}

function map (f) {
  return (inputObservable) => {
    return createObservable((outputObserver) => {
      inputObservable.subscribe({
        next: x => {
          const y = f(x)
          outputObserver.next(y)
        },
        error: err => {
          outputObserver.error(err)
        },
        complete: () => {
          outputObserver.complete()
        },
      })
    })
  }
}

function filter (f) {
  return (inputObservable) => {
    return createObservable((outputObserver) => {
      inputObservable.subscribe({
        next: x => {
          if (f(x)) {
            outputObserver.next(x)
          }
        },
        error: err => {
          outputObserver.error(err)
        },
        complete: () => {
          outputObserver.complete()
        },
      })
    })
  }
}

const observable = createObservable((observer) => {
  document.addEventListener('click', ev => {
    observer.next(ev)
  }, false)
})

observable
  .pipe(map(ev => [ev.clientX, ev.clientY]))
  .pipe(filter(([x, y]) => x < 200 && y < 300))
  .subscribe({ next: x => console.log(x) })
