/**
 * Funciones
 */
//Interface del tipo Personaje

interface Personaje{
nombre: string;
apellido: string;
vida: number;
 mostrarVida: () => void;

}
//metodo que permite sumar puntos de vida
function darPuntosDeVida(personaje: Personaje, vida: number): void{
    personaje.vida +=  vida;
}

//construccion de una instancia Personaje
let per01: Personaje ={
    nombre :'Marcelo',
    apellido : 'Peralta',
    vida : 50,
    mostrarVida(){
       console.log(this.vida);
    }
}

//llamada del metodo
darPuntosDeVida(per01, 100)
per01.mostrarVida();