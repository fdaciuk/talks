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
  observer.next(1)
  observer.next(2)
  observer.next(3)
  setTimeout(() => {
    observer.next(4)
    observer.complete()
  }, 1000)
})

observable
  .pipe(map(x => x + 1))
  .pipe(map(x => x * 2))
  .pipe(filter(x => x !== 6))
  .subscribe({
    next: x => console.log(x),
    error: () => {},
    complete: () => {
      console.log('done!')
    },
  })
