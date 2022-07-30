const data = require('../data/zoo_data');

const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const criancaAdultoSenhor = entrants.reduce((acc, pessoa) => {
    if(pessoa.age < 18) {
      acc.child +=1;
    }
    if(pessoa.age >=18 && pessoa.age < 50) {
      acc.adult +=1;
    }
    if(pessoa.age >= 50) {
      acc.senior +=1;
    }
    return acc;
  }, {child: 0, adult: 0, senior: 0});
  return criancaAdultoSenhor;
  
}
console.log(countEntrants([{ name:  'Lara Carvalho', age:  5 },
{ name:  'Frederico Moreira', age:  5 },
{ name:  'Pedro Henrique Carvalho', age:  5 },
{ name:  'Maria Costa', age:  18 },
{ name:  'Núbia Souza', age:  18 },
{ name:  'Carlos Nogueira', age:  50 },]))

function calculateEntry(entrants) {
  if(!entrants || Object.keys(entrants).length === 0 ) {
    return 0;
  }
  const visitantes = countEntrants(entrants);
  const total = ( visitantes.child * prices.child ) + ( visitantes.adult * prices.adult ) + ( visitantes.senior * prices.senior );
  return total;
}



console.log(countEntrants([{ name:  'Lara Carvalho', age:  5 },
{ name:  'Frederico Moreira', age:  5 },
{ name:  'Pedro Henrique Carvalho', age:  5 },
{ name:  'Maria Costa', age:  18 },
{ name:  'Núbia Souza', age:  18 },
{ name:  'Carlos Nogueira', age:  50 },]))

module.exports = { calculateEntry, countEntrants };
