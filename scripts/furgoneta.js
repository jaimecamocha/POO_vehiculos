// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/POO_vehiculos.git

import { Vehiculo } from './vehiculo.js';

export class Furgoneta extends Vehiculo{
    #pasajeros;

    //CONSTRUCTOR
    constructor(marca, modelo, color, fabricacion, cilindrada, pasajeros){
        super(marca, modelo, color, fabricacion, cilindrada);
        this.#pasajeros = pasajeros;
    }

    //GETTER Y SETTER
    get pasajeros(){
        return this.#pasajeros;
    }

    set pasajeros(value){
        this.#pasajeros = value;
    }
}

