const data = require('../data/zoo_data');

const {species, hours} = require('../data/zoo_data');

const semana = {
  Tuesday: { officeHour:`Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`, exhibition: []},
  Wednesday: { officeHour:`Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`, exhibition: []},
  Thursday: { officeHour:`Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`, exhibition: []},
  Friday: { officeHour:`Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`, exhibition: []},
  Saturday: { officeHour:`Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`, exhibition: []},
  Sunday: { officeHour:`Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`, exhibition: []},
  Monday: { officeHour:`Open from ${hours.Monday.open}am until ${hours.Monday.close}pm`, exhibition: []},
   
}
console.log(semana)
function getSchedule(scheduleTarget) {
  
}
console.log(getSchedule('penguins'))
module.exports = getSchedule;
