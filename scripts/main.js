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
vehiculo1.arrancar();
vehiculo1.acelerar(160);
vehiculo1.frenar();