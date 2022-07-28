const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((especie) => especie.name === animal)
    .residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
