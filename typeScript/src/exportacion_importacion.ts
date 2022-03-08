export interface Productos{
    nombre: string;
    precio: number;
}

export function mostrarDatos(libros:Productos[]){
    for (const libro of libros) {
        console.log(libro.nombre +" "+ libro.precio)
    }
}


