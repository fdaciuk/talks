'use strict'

import { expect } from 'chai'
import counter from '../src/reducers/counter'

describe('# COUNTER', function() {
  it('Should increment', function() {
    expect(counter(0, { type: 'INCREMENT' })).to.be.equal(1)
  })

  it('Should increment one more time', function() {
    expect(counter(1, { type: 'INCREMENT' })).to.be.equal(2)
  })

  it('Should decrement', function() {
    expect(counter(2, { type: 'DECREMENT' })).to.be.equal(1)
  })

  it('Should return first state (zero)', function() {
    expect(counter(undefined, {})).to.be.equal(0)
  })

  it('Should return before state if action is unknown', function() {
    expect(counter(3, { type: 'UNKNOWN' })).to.be.equal(3)
  })
})
