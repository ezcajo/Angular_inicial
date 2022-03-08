/**
 * Exportaciones - Importaciones
 */
/**Importamos la interface y el metodo  que se utilizara en este proyecto */
import { Productos, mostrarDatos } from './exportacion_importacion';


/**
 * Construccion de una lista de Productos, se utiliza la interface 
 * Productos exportada de otro Proyecto "exportacion_importacion"
 */
const carrito: Productos[] =[
    {
        nombre: "Python",
        precio: 1245
    },
    {
        nombre: "Java",
        precio: 1350
    }
]

/** Uso del metodo Mostrar Datos con el carrito creado en este proyecto */
mostrarDatos(carrito);
