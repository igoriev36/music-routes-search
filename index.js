'use strict'

const lunr = require('lunr')

const path = require('path')

const indexesDir = path.resolve(__dirname, 'indexes')

const indexes = {};
['artist', 'individual', 'release', 'track'].forEach((val) => { indexes[val] = lunr.Index.load(require(path.join(indexesDir, `${val}Idx.json`))) })

const search = (val, index) => {
  return indexes[index].search(val)
}

exports.search = search
