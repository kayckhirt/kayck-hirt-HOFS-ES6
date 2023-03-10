const data = require('../data/zoo_data');

const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const funcionarios = employees.filter((funcionario) =>
    (funcionario.managers.includes((managerId))));

  if (isManager(managerId)) {
    return funcionarios.map((criaArray) => `${criaArray.firstName} ${criaArray.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
