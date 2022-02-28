//  ==================================================  DESAFIO 1  ==================================================

// Crear un algoritmo utilizando un ciclo

/* 

1) Alerta sobre daño y pedir una entrada, mostrar la vida restante
2) Comprobar la entrada y aumentar el contador por cada una
    2.1) pocion => sube a 20 y vuelve a bajar
    2.2) antidoto => termina la cuenta regresiva
    2.3) otra cosa => error y sigue bajando
3) Listar cada entrada en la consola con su respectivo numero
4) Al finalizar el codigo comprobar si esta vivo (antidoto) o si termina el juego

*/

// let maximo = 1;
// let vida = 20;
// let estado;
// for (let contador = 0; contador < maximo; contador++) {
//     let entrada;
//     do {
//         entrada = prompt(`TE GOLPEARON Y AHORA ESTAS ENVENENADO! Necesitas una pocion o algun antidoto... (Vida actual: ${vida} pts)`);
//         contador++;
//         console.log(`el intento numero ${contador} fue ${entrada}`);
//         vida--;
//         maximo++;
//         if (entrada == 'pocion') {
//             vida = 20;
//             alert(`Tu vida aumenta a ${vida} pts., pero seguis envenenado!`);
//         } else if (entrada == 'antidoto') {
//             estado = 'vivo';
//             maximo = contador - 1;
//             break;
//         }
//     } while (vida <= 20 && vida > 0);
//     if (estado == 'vivo') {
//         alert(`Estas curado, te quedan ${vida} pts. de vida`);
//     } else {
//         alert('GAME OVER');
//     }
// }


//  ==============================================  DESAFIO 2  ============================================

/* SIMULADOR INTERACTIVO

Algoritmo condicional (IF), un ciclo (FOR/WHILE) y function

1) Pedir PESOS o MARS
2) Comprobar la entrada
    1.1) Si es PESO => pedir cantidad y llamar a la funcion que convierte PESOS a MARS
    1.2) Si es MARS => pedir cantidad y llamar a la funcion que convierte MARS a PESOS
    1.3) Si es otra cosa, volver a pedir una entrada valida
*/

// alert('La nueva moneda (M$) es la moneda base en las instalaciones de Marte, aqui mismo podras calcular su precio en base a tu moneda!');

// let moneda;
// let cantidad;

// function calcularPesos(peso) {
//     let totalM = (peso * 0.0066);
//     alert(`AR$${peso} es equivalente a M$${totalM}`);
// }

// function calcularMarslar(mars) {
//     let totalP = (mars * 151);
//     alert(`M$${mars} es equivalente a AR$${totalP}`);
// }

// function pedirDatos() {
//     return moneda = prompt('Ingrese PESOS o MARS dependiendo de que moneda quiere convertir.');
// }

// function pedirCantidad() {
//     return cantidad = parseFloat(prompt('Ingrese la cantidad.'));
// }

// pedirDatos();

// do {
//     if (moneda == 'PESOS' || moneda == 'pesos') {
//         pedirCantidad();
//         if (isNaN(cantidad)) {
//             alert('Ingrese un numero valido');
//         } else {
//             calcularPesos(cantidad);
//             break;
//         }
//     } else if (moneda == 'MARS' || moneda == 'mars') {
//         pedirCantidad();
//         if (isNaN(cantidad)) {
//             alert('Ingrese un numero valido');
//         } else {
//             calcularMarslar(cantidad);
//             break;
//         }
//     } else {
//         alert('entrada invalida');
//         pedirDatos();
//     }
// }
// while (moneda != 'PESOS' || moneda != 'pesos' || moneda != 'MARS' || moneda != 'mars');


//  ==============================================  DESAFIO 3  ============================================

/* INCORPORAR ARRAYS:

Agregar arrays a tu proyecto.

*/


// Clase y constructor para cada propiedad
class Houses {
    constructor(name, id, address, price, size, bedrooms) {
        this.name = name;
        this.id = id;
        this.address = address;
        this.price = price;
        this.size = size;
        this.bedrooms = bedrooms;
        this.sold = false;
    }
    soldStatus() {
        // Cambia el estado a vendido de x propiedad
        this.sold = true;
    }
}

// Lista que agrupa todas las propiedades
const houseList = [];

// Funcion para crear y pushear propiedades al array
function addHouse(name, id, address, price, size, bedrooms) {
    houseList.push(new Houses(name, id, address, price, size, bedrooms));
}

let cantidad;

// Loop para agregar propiedades dependiendo de la cantidad ingresada
do {
    cantidad = Number(prompt('Bienvenido al gestor de propiedades, ¿cuantas propiedades agregará?'));
    if (!isNaN(cantidad) && cantidad > 0) {
        for (i = 0; i < cantidad; i++) {
            addHouse(
                prompt('Ingrese el nombre').toUpperCase(),
                prompt('Ingrese el ID').toUpperCase(),
                prompt('Ingrese la direccion').toUpperCase(),
                Number(prompt('Ingrese el precio (solo numero)')),
                prompt('Ingrese el tamaño (numero seguido de m2)').toUpperCase(),
                Number(prompt('Ingrese la cantidad de habitaciones')));
            // Cambia el estado de la propiedad
            let vendida = prompt('¿Está vendida?').toUpperCase();
            if (vendida == 'SI') {
                houseList[i].soldStatus();
            }
            alert(`Propiedad N${i+1} agregada`);
        };
    } else {
        alert('Numero invalido');
    }
} while (isNaN(cantidad) || cantidad < 0);

console.table(houseList);

// Imprime la cantidad total de elementos (propiedades) en el array
console.log('Hay un total de ' + houseList.length + ' propiedades en la lista');