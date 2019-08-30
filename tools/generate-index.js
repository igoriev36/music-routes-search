'use strict'

const artists = require('music-routes-data/data/artists')
const individuals = require('music-routes-data/data/individuals')
const releases = require('music-routes-data/data/releases')
const tracks = require('music-routes-data/data/tracks')

const lunr = require('lunr')

// threads vs. no threads?

function index (data) {
  return lunr(function () {
    this.ref('id')
    this.field('text')

    data.forEach(function (doc) {
      this.add({ id: doc._id, text: doc.names.join('\n') })
    }, this)
  })
}

const artistIdx = index(artists)
const individualIdx = index(individuals)
const releaseIdx = index(releases)
const trackIdx = index(tracks)

const fs = require('fs')
const path = require('path')

const ifErr = (err) => { if (err) throw err }

const indexesPath = path.resolve(path.join(__dirname, '..', 'indexes'))

fs.writeFile(`${indexesPath}/artistIdx.json`, JSON.stringify(artistIdx), ifErr)
fs.writeFile(`${indexesPath}/individualIdx.json`, JSON.stringify(individualIdx), ifErr)
fs.writeFile(`${indexesPath}/releaseIdx.json`, JSON.stringify(releaseIdx), ifErr)
fs.writeFile(`${indexesPath}/trackIdx.json`, JSON.stringify(trackIdx), ifErr)
