/**
 * 
 * Destructuracion de Arreglos
 */
//Arreglo
const meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril'];

// destructuracion de lista es en base a la posicion del elemento diferente
//con referencia al objr¡eto que lo realiza por su clave

const [uno,dos,tres,cuatro] = meses;
    //otra forma
    //const [,,,cuatro] = meses;


    //implementacion del string en el document
document.body.innerHTML=
`
    <div style= "color='red'; ">
    mes: ${uno} <br>
    mes: ${dos} <br>
    mes: ${tres} <br>
    mes: ${cuatro} <br>
    
    </div>
`