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

// variable tipo object de un objeto vehiculo
const vehiculoObject = {
    marca: 'BMW',
    modelo: 'M2 Competition',
    color: 'rojo',
    fabricacion: 2021,
    cilindrada: '411'
}

//almacenar datos: guardar un JSON en el LocalStorage
localStorage.setItem("Vehículo", JSON.stringify(vehiculoObject));

//recuperar datos: mostrar el object en consola del JSON que hemos guardado en el LocalStorage
console.log(localStorage.getItem("Vehiculo"));

//muestra un objeto furgoneta
const furgoneta1 = new Furgoneta('Citroën', 'C15', 'blanca', 1995, '120', 10);
mostrarResultado(`<br/> <br/>-- Furgoneta 1--`);
furgoneta1.mostrarDatos();
furgoneta1.arrancar();
furgoneta1.acelerar(210);
furgoneta1.frenar();

//Guardar en el LocalStorage la marca de la furgoneta
localStorage.setItem("marca furgoneta", furgoneta1.marca);

//muestra un objeto todoterreno
const todoterreno1 = new Todoterreno('Mitsubishi ', 'Pajero', 'gris', 2015, '190', 4);
mostrarResultado(`<br/> <br/>-- Todoterreno 1--`);
todoterreno1.mostrarDatos();
mostrarResultado(`<br/>Tiene tracción ` + todoterreno1.traccion);
todoterreno1.arrancar();
todoterreno1.acelerar(100);
todoterreno1.frenar();

//generar variable de tipo object con POO
const todoterrenoObject = {
    marca: todoterreno1.marca,
    modelo: todoterreno1.modelo,
    color: todoterreno1.color,
    fabricacion: todoterreno1.fabricacion,
    cilindrada: todoterreno1.cilindrada,
    traccion: todoterreno1.traccion
}

//almacenar los datos en LocalStorage mediante un bucle iterativo
for(let key in todoterrenoObject){
    if(todoterrenoObject.hasOwnProperty(key)){
        localStorage.setItem(key, todoterrenoObject[key]);
    }
}

//eliminar un elemento del localstorage
localStorage.removeItem('color');

//eliminar todos los elementos del localstorage
//localStorage.clear();