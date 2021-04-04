'use strict'

const { Observable } = require('rxjs')
const { map, filter } = require('rxjs/operators')

const numbersObservable = new Observable(observer => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.next(4)
  observer.complete()
})

numbersObservable
  .pipe(map(x => x + 1))
  .pipe(map(x => x * 2))
  .pipe(filter(x => x !== 6))
  .subscribe({
    next: x => console.log(x),
    error: err => console.error(err),
    complete: () => {
      console.log('done')
    }
  })
