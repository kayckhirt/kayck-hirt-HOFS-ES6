const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function countAnimals(animal) {
 const animais = species.filter((nome)=> nome.name === animal)
 .map((resident)=> resident.residents);
 const contaAnimais = animais.reduce((resultadoParcial,especie) => {
  if (resultadoParcial[especie] === undefined) {
    resultadoParcial[especie] = 1
 }else {
  resultadoParcial[especie] +=1
 }
 return resultadoParcial;
}, {})
return contaAnimais;
}
module.exports = countAnimals;


console.log(contaAnimais('lions'))
