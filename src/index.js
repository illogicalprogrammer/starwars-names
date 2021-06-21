var starWarsNames = require('./starwars-names.json');
var randomStarWarsName = require('unique-random-array');

module.exports = {
    all : starWarsNames,
    random : randomStarWarsName(starWarsNames)
}