const data = require('../data/zoo_data');

const { species, hours } = require('../data/zoo_data');

const disponibilidade = (day) => {
  const disponivel = species.filter((dia) => dia.availability.includes(day))
    .map((nome) => nome.name);
  return disponivel;
};
const animaisDoDia = (dayAnimals) => species.filter((animal) =>
  animal.name.includes(dayAnimals)).find((anima) => anima).availability;

const semana = {
  Tuesday: { officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: disponibilidade('Tuesday') },
  Wednesday: { officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: disponibilidade('Wednesday') },
  Thursday: { officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: disponibilidade('Thursday') },
  Friday: { officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: disponibilidade('Friday') },
  Saturday: { officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: disponibilidade('Saturday') },
  Sunday: { officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: disponibilidade('Sunday') },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const nomesDosAnimais = species.map((nomes) => nomes.name);
// console.log(nomesDosAnimais);
const dias = Object.keys(hours);

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return semana;
  }
  if (dias.includes(scheduleTarget)) {
    return { [scheduleTarget]: semana[scheduleTarget] };
  }
  if (nomesDosAnimais.includes(scheduleTarget)) {
    return animaisDoDia(scheduleTarget);
  }
  return semana;
}
module.exports = getSchedule;
