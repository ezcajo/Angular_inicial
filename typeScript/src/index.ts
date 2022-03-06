/**
 * Objetos e Interfaces
 * 
 */
 
//interface
interface SuperHeroes{
nombre:string;
edad: number;
direccion: Direccion; // interface de direccion
mostrarDireccion: () => string;
}
interface Direccion{
    calle: string;
    pais: string;
    ciudad: string;
}

//objeto superheroe
const heroe01: SuperHeroes = {
    nombre: 'Marcelo',
    edad: 53,
    direccion: {
        calle: 'Francia',
        pais: 'Argentina',
        ciudad: 'San Martin',
    },
    mostrarDireccion: function (): string {
     return (`${this.nombre} ${this.direccion.calle} ${this.direccion.ciudad}`);
    }

}
//impresion del metodo mostrar direccion objeto heroe01
console.log(heroe01.mostrarDireccion());
