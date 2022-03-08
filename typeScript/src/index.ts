/**
 * Tipos genericos
 */

/**
 * 
 * @param argumento la denominacion del Tipo T se refiere que estamos pasando
 * argumentos del tipo generico
 * @returns el argumento con el tipo pasado
 */
function tiposDatos<T>(argumento:T){
    return argumento;
}

let soyString =tiposDatos('Hola Mundo');
let soyNumero =tiposDatos(248);
let soyArreglo =tiposDatos([1,2,3]);
let soyBooleano =tiposDatos(true);