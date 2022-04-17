import lunr = require('lunr')
import artistIndex = require('./indexes/artistIdx.json')
import individualIndex = require('./indexes/individualIdx.json')
import releaseIndex = require('./indexes/releaseIdx.json')
import trackIndex = require('./indexes/trackIdx.json')

type MusicRoutesIndexes = 'artist' | 'individual' | 'release' | 'track'

const indexes = {
  artist: lunr.Index.load(artistIndex),
  individual: lunr.Index.load(individualIndex),
  release: lunr.Index.load(releaseIndex),
  track: lunr.Index.load(trackIndex)
}

const search = (val: string, index: MusicRoutesIndexes): lunr.Index.Result[] => {
  return indexes[index].search(val)
}

exports.search = search
