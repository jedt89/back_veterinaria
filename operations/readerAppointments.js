const fs = require('fs');

const readAppointments = () => {
  const appointments = JSON.parse(fs.readFileSync('./models/appointments.json', 'utf-8'));
  console.log(appointments);
};

module.exports = { readAppointments };
