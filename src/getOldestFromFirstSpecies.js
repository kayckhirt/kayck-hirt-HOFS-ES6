const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const funcionarios = employees.find((funcionario) => funcionario.id === id);
  const primeiroAnimal = Object.values(funcionarios.responsibleFor)[0];
  const animalResponsavel = species.find((animal) => animal.id === primeiroAnimal);
  const animalMaisVelho = animalResponsavel.residents.sort((a, b) => b.age - a.age);
  const arrays = animalMaisVelho.find((array) => `${array.name}, ${array.age}`);
  return [arrays.name, arrays.sex, arrays.age];
}
module.exports = getOldestFromFirstSpecies;
