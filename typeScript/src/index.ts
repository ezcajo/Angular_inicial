/**
 * 
 * Destructuracion de Arreglos
 */
//Arreglo
interface Articulos{
    detalle: Descripcion;
    precio: number;
}
interface Descripcion{
    marca: string;
    modelo: string;
}

const celular: Articulos={
    detalle: {
        marca: 'Samsung',
        modelo: 'J4'
    },
    precio: 100
}

const samrthTV: Articulos={
    detalle: {
        marca: 'Hitachi',
        modelo: '55TG'
    },
    precio: 100
}
const product: Articulos[] =[celular, samrthTV];

function calcularIva(productos: Articulos[]): number{
        let total=0;
        
        productos.forEach(({precio})=>{// desectructuracion de productos, extraigo el precio
            total += precio;
        })
    return total *0.21;
}

//Imprime el iva que devueve la funcion 
console.log(calcularIva(product));