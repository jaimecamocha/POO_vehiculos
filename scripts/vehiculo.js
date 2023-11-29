// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/POO_vehiculos.git

import { mostrarResultado } from "./main.js";

export class Vehiculo{
    #marca;
    #modelo;
    #color;
    #fabricacion;
    #cilindrada;

    //CONSTRUCTORES
    // constructor con parámetros
    constructor(marca, modelo, color, fabricacion, cilindrada){
        this.#marca = marca;
        this.#modelo = modelo;
        this.#color = color;
        this.#fabricacion = fabricacion;
        this.#cilindrada = cilindrada;
    }


    //MÉTODOS
    mostrarDatos(){
        const datos = `
            La marca es ${this.#marca}
            <br/>
            El modelo es ${this.#modelo}
            <br/>
            El color es ${this.#color}
            <br/>          
            Se fabricó en el año ${this.#fabricacion}
            <br/>
            La cilindrada es ${this.#cilindrada}
            <br/>             
            `;

            //llamar a la función mostrarResultado definida en el main.js
            mostrarResultado(`<p>${datos}</p>`);
    }

    acelerar(velocidad){
        const mensaje = `<br/>Se ha acelerado hasta ${velocidad}`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }

    arrancar(){
        const mensaje = `<br/>El ${this.#modelo} de la marca ${this.#marca} de color ${this.#color} ha arrancado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }

    frenar(){
        const mensaje = `<br/>El ${this.#modelo} de la marca ${this.#marca} de color ${this.#color} ha frenado`;
        mostrarResultado(`<p>${mensaje}</p>`);
    }


    //GETTER Y SETTER
    get marca(){
        return this.#marca;
    }
 
    set marca(marca){
        this.#marca = marca;
    }
 
    get modelo(){
        return this.#modelo;
    }
 
    set modelo(modelo){
        this.#modelo = modelo;
   
    }
 
    get color(){
        return this.#color;
    }
 
    set color(color){
        this.#color = color;
   
    }
 
    get fabricacion(){
        return this.#fabricacion;
    }
 
    set fabricacion(fabricacion){
        this.#fabricacion = fabricacion;
    }
 
    get cilindrada() {
        return this.#cilindrada;
    }
 
    set cilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }


}