const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  } if (animal !== undefined) {
    const animais = species.filter((nome) => nome.name === animal.specie);
    if (animal.sex !== undefined) {
      return animais[0].residents.filter((sexoDoAnimal) => sexoDoAnimal.sex === animal.sex).length;
    }
    return animais[0].residents.length;
  }

}
module.exports = countAnimals;
