/**
 * Esta variable se determina el tipo de dato que almacenara el arreglo, no recomendable
 * se debe almacenar de un solo tipo
 */
let habilidades: (string| number)[] =["tecnica", "comprension","linguisticas"];

habilidades.push(1);


let temperaturas: number[] =[10,23,32,18];
let sumaTotal : number = 0;

for(let temperatura of temperaturas){
  console.log(temperatura);
  sumaTotal+=temperatura;
}
console.log(`temperatura total: ${sumaTotal}`);

/**
 * Interfaces y Objetos
 */
interface Persona{
  nombre:string;
  apellido: string;
  temperatura: number[];
  edad: number;
  pueblonatal?: string;
}
const persona : Persona ={
  nombre: "Marcelo",
  apellido: "Peralta",
  temperatura: temperaturas,
  edad: 53
}
persona.pueblonatal ="San Martin"
console.table(persona)
