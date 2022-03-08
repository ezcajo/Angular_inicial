/**
 * 
 * Clases Basicas - Herencia
 */

class Persona{
     
constructor(
    public nombre: string,
    public apellido: string,
    public edad: number
){/*cuerpo vacio*/}
}

class Medico extends Persona {

    constructor(
        public especializacion: string,
        public matricula: number
    ){
        super('Marcelo', 'Peralta', 53,);
    }
}

const mar =new Medico( 'traumatologia', 12456);
console.log(mar)