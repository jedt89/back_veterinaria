const fs = require('fs');
const { registerAppointment } = require('./operations/registerAppointmets');
const { readAppointments } = require('./operations/readerAppointments');

if (process.argv[2] == 'registerAppointment') {
  const [,,, name, age, type, color, disease ] = process.argv;

  return registerAppointment(name, age, type, color, disease);
} else if (process.argv[2] == 'readAppointments') {

  return readAppointments();
}
