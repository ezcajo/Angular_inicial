/**
 * Funciones
 */

function sumar(a, b){
  return a + b;
}

console.log(sumar("Marcelo ", "Peralta"));

function sumarNumeros(a:number, b: number): number{
  return a + b;
}

console.log(sumarNumeros(10,15));

const sumarFlecha = (a: number, b: number):number =>{
  return a + b;
}

console.log(sumarFlecha(12,13));

function resta(a: number, b?:number, c: number=2): number{
return a - c;
}

console.log(resta(10,0, 8));