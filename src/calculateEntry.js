const data = require('../data/zoo_data');

const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const criancaAdultoSenhor = entrants.reduce((acc, pessoa) => {
    if (pessoa.age < 18) {
      acc.child += 1;
    }
    if (pessoa.age >= 18 && pessoa.age < 50) {
      acc.adult += 1;
    }
    if (pessoa.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return criancaAdultoSenhor;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitantes = countEntrants(entrants);
  const total = (visitantes.child * prices.child)
  + (visitantes.adult * prices.adult) + (visitantes.senior * prices.senior);
  return total;
}
module.exports = { calculateEntry, countEntrants };
