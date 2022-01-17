'use strict'

const assert = require('assert')

const { search } = require('../index.js')

const checkResults = (results) => {
  assert.ok(results.length > 0)
  results.forEach((val) => {
    assert.ok(/^\d+$/.test(val.ref))
    assert.strictEqual(typeof val.score, 'number')
    assert.ok(typeof val.matchData, 'object')
  })
}

checkResults(search('Chrissie Hynde', 'individual'))
checkResults(search('The Pretenders', 'artist'))
checkResults(search('Back On The Chain Gang', 'track'))
checkResults(search('Learning To Crawl', 'release'))

assert.throws(() => {
  search('Fhqwhgads', 'Strong Bad')
})

assert.throws(() => {
  search('Fhqwhgads')
})
