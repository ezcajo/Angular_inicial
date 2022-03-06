/**
 * 
 * Destructuracion de Objetos
 */

interface Reproductor{
    volumen: number;
    segundo : number;
    cancion: string, 
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: "Angel",
    detalles: {
        autor: "Gary",
        anio: 1991
    }
}
//destructuracion de objetos
const{volumen, segundo, cancion, detalles} = reproductor;
const{autor, anio} = detalles

//uso de constantes desestructurada
document.body.innerHTML=( `<div>
                <hr>
                volumen: ${volumen}<br>
                segundo: ${segundo} <br>
                cancion: ${cancion} <br>
                autor: ${autor}<br>
                año:  ${anio}<br>
                </div><br>
                <hr>
                                    `)
                                    