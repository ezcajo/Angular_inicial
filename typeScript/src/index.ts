/**
 * 
 * Clases Basicas
 */


/**
 * La diferencia con una interface es que la interface no solo se declara los atributos 
 * y metodos , sin implementacion
 */
class Persona{
    public nombre: string;
    public apellido: string;
    public edad: number;
}

const mar =new Persona();
mar.apellido = "Peralta"


console.log(mar.apellido)