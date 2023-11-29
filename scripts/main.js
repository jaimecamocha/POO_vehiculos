// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/POO_vehiculos.git

import { Vehiculo } from './vehiculo.js';
import { Furgoneta } from './furgoneta.js';
import { Todoterreno } from './todoterreno.js';

// crear un contenedor para mostrar los resultados
const resultadoContainer = document.createElement('div');
document.body.appendChild(resultadoContainer);

//función para mostrar datos
export function mostrarResultado(mensaje){
    resultadoContainer.innerHTML += `<p>${mensaje}</p>`;
}

//muestra de un objeto vehículo
const vehiculo1 = new Vehiculo('BMW', 'M2 Competition', 'rojo', 2021, '411');
mostrarResultado('--Vehículo 1 --');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(160);
vehiculo1.frenar();

//muestra un objeto furgoneta
const furgoneta1 = new Furgoneta('Citroën', 'C15', 'blanca', 1995, '120', 10);
mostrarResultado(`<br/> <br/>-- Furgoneta 1--`);
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(210);
furgoneta1.frenar();

//muestra un objeto todoterreno
const todoterreno1 = new Todoterreno('Mitsubishi ', 'Pajero', 'gris', 2015, '190', 4);
mostrarResultado(`<br/> <br/>-- Todoterreno 1--`);
todoterreno1.mostrarDatos();
mostrarResultado(`<br/>Tiene tracción ` + todoterreno1.traccion);
todoterreno1.arrancar();
todoterreno1.acelerar(100);
todoterreno1.frenar();