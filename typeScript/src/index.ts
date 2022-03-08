/**
 * Encadenamiento opcional
 */


interface Pasajero{
    nombre: string;
    hijos?: string[];/**El simbolo ? determina en esta caso un atributo opcional
    puede suceder que haya pasajeros sin hijos */
}

const pasajero1: Pasajero ={
    nombre: "Marcelo"
}

const pasajero2: Pasajero ={
    nombre: "Jonathan",
    hijos: ['Luis', 'Camila']
}

function cantidadHijos(pasajero:Pasajero): void{
    console.log(pasajero.hijos?.length || 0);/**
    se coloco el simbolo? para que no de error cuando se consulte por el pasajero que no
    tiene hijo y funcionaria como un tipo if para determinar si la respuesta
    es undefined que nos muestr el cero por que es mas grande que undefined
    */
}

console.log(cantidadHijos(pasajero1))