const fs = require('fs');

const appointments = JSON.parse(
  fs.readFileSync('./models/appointments.json', 'utf-8')
);

const registerAppointment = (name, age, type, color, disease) => {
  const appointment = {
    name,
    age,
    type,
    color,
    disease
  };
  appointments.push(appointment);
  fs.writeFileSync('./models/appointments.json', JSON.stringify(appointments));
  showAppointment(appointment);
};

const showAppointment = ({ name, age, type, color, disease }) => {
  const text = `
    Nombre: ${name},
    Edad: ${age},
    Especie: ${type},
    Color: ${color},
    Enfermedad: ${disease},
  `;

  return console.log('Se ha registrado la siguiente cita: ', text);
};

module.exports = { registerAppointment };
