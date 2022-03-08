/**
 * 
 * Clases Basicas - Constructores
 */

class Persona{
 
    /**
     * El metodo constructor de la manera que fue declarado me permite
     * declarar dentro del mismo los atributos de la clase y poder tambien asignarlo
     * cuando se construya la instancia del objeto
     */
constructor(
    public nombre: string,
    public apellido: string,
    public edad: number
){/*cuerpo vacio*/}
}

const mar =new Persona('Marcelo', 'Peralta', 53);
console.log(mar.apellido)
