"use strict";
exports.__esModule = true;
var lunr = require("lunr");
var artistIndex = require("./indexes/artistIdx.json");
var individualIndex = require("./indexes/individualIdx.json");
var releaseIndex = require("./indexes/releaseIdx.json");
var trackIndex = require("./indexes/trackIdx.json");
var indexes = {
    artist: lunr.Index.load(artistIndex),
    individual: lunr.Index.load(individualIndex),
    release: lunr.Index.load(releaseIndex),
    track: lunr.Index.load(trackIndex)
};
var search = function (val, index) {
    return indexes[index].search(val);
};
exports.search = search;
