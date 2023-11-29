// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/POO_vehiculos.git

import { Vehiculo } from './vehiculo.js';

export class Todoterreno extends Vehiculo(){
    #traccion;

    //CONSTRUCTOR
    constructor(marca, modelo, color, fabricacion, cilindrada, traccion){
        this(marca, modelo, color, fabricacion, cilindrada, pasajeros);
        this.#traccion = traccion;
    }

    //GETTER Y SETTER
    get traccion(){
        return this.#traccion;
    }

    set traccion(value){
        this.#traccion = value;
    }
}
