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

//Clase y constructor para cada propiedad
// class Houses {
//     constructor(name, id, address, price, size, bedrooms) {
//         this.name = name;
//         this.id = id;
//         this.address = address;
//         this.price = price;
//         this.size = size;
//         this.bedrooms = bedrooms;
//         this.sold = false;
//     }
//     soldStatus() {
//         // Cambia el estado a vendido de x propiedad
//         this.sold = true;
//     }
// }

// // Lista que agrupa todas las propiedades
// const houseList = [];

// // Funcion para crear y pushear propiedades al array
// function addHouse(name, id, address, price, size, bedrooms) {
//     houseList.push(new Houses(name, id, address, price, size, bedrooms));
// }

// let cantidad;

// // Loop para agregar propiedades dependiendo de la cantidad ingresada
// do {
//     cantidad = Number(prompt('Bienvenido al gestor de propiedades, ¿cuantas propiedades agregará?'));
//     if (!isNaN(cantidad) && cantidad > 0) {
//         for (i = 0; i < cantidad; i++) {
//             addHouse(
//                 prompt('Ingrese el nombre').toUpperCase(),
//                 prompt('Ingrese el ID').toUpperCase(),
//                 prompt('Ingrese la direccion').toUpperCase(),
//                 Number(prompt('Ingrese el precio (solo numero)')),
//                 prompt('Ingrese el tamaño (numero seguido de m2)').toUpperCase(),
//                 Number(prompt('Ingrese la cantidad de habitaciones')));
//             // Cambia el estado de la propiedad
//             let vendida = prompt('¿Está vendida?').toUpperCase();
//             if (vendida == 'SI') {
//                 houseList[i].soldStatus();
//             }
//             alert(`Propiedad N${i+1} agregada`);
//         };
//     } else {
//         alert('Numero invalido');
//     }
// } while (isNaN(cantidad) || cantidad < 0);

// console.table(houseList);

// // Imprime la cantidad total de elementos (propiedades) en el array
// console.log('Hay un total de ' + houseList.length + ' propiedades en la lista');


//  ==============================================  DESAFIO 4  ============================================

/* 
Primera entrega del Proyecto Final

Agregar find() y filter() al proyecto
 */

// Constructor
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
        this.sold = true;
    }
}

// Funciones

function addHouse(name, id, address, price, size, bedrooms) {
    // Funcion para agregar propiedades
    houseList.push(new Houses(name, id, address, price, size, bedrooms));
}

function findAlert(varFind) {
    // Funcion para buscar propiedades
    alert(`¡Propiedad encontrada!
                            Nombre: ${varFind.name}
                            ID: ${varFind.id}
                            Direccion: ${varFind.address}
                            Precio: M$${varFind.price}
                            Tamaño: ${varFind.size}
                            Cantidad de habitaciones: ${varFind.bedrooms}`);
}

function houseNameList() {
    // Funcion para listar propiedades
    houseList.forEach(element => alert(`Nombre: ${element.name} - ID: ${element.id}`));
}

function initAddHouse(userName, userID, userDir, userPrice, userSize, userBedrooms) {
    // Funcion para iniciar la funcion de agregar propiedades pidiendo datos
    addHouse(
        userName,
        userID,
        userDir,
        userPrice,
        userSize,
        userBedrooms);
    let vendida = prompt('¿Está vendida?').toUpperCase();
    if (vendida == 'SI') {
        let lastNumber = Number(houseList.length - 1);
        houseList[lastNumber].soldStatus();
    }
    alert(`Propiedad agregada correctamente`);
}

function funcEraseHouse() {
    // Funcion para eliminar propiedades
    while (choose == 3) {
        let eraseID = prompt('Ingrese el ID de la casa que quiere eliminar o BACK para volver al menu principal').toUpperCase();
        while (eraseID != 'BACK') {
            const findEraseID = houseList.findIndex(eraseHouseId => eraseHouseId.id == eraseID);
            if (findEraseID != -1) {
                alert(`Se elimino la propiedad ${houseList[findEraseID].name}`);
                houseList.splice(findEraseID, 1);
                break;
            } else {
                alert('Propiedad no encontrada');
                break;
            };
        }
        if (eraseID == 'BACK') {
            break;
        }
    }
}

function funcSold() {
    // Funcion para marcar propiedades como vendidas
    while (choose == 5) {
        let houseID = prompt('Ingrese el ID de la casa vendida o BACK para volver').toUpperCase();
        while (houseID != 'BACK') {
            const sellHouseID = houseList.find(element => element.id == houseID);
            const sellHouseIDIndex = houseList.findIndex(element => element.id == houseID);
            if (sellHouseID != undefined) {
                houseList[sellHouseIDIndex].soldStatus();
                alert(`La propiedad ${sellHouseID.name} con ID ${sellHouseID.id} ahora se encuentra vendida`);
                console.log(`Nombre: ${sellHouseID.name} - Vendida: ${sellHouseID.sold}`);
                break;
            } else {
                alert('Propiedad no encontrada');
                break;
            }
        }
        if (houseID == 'BACK') {
            break;
        }
    }
}

function funcFilter() {
    // Funcion para filtrar propiedades
    while (choose == 6) {

        let filterChoice = Number(prompt(`Ingrese: 
    1) Para filtrar por precio.
    2) Para filtrar solo las propiedades disponibles.
    3) Para volver al menu principal`));

        while (!isNaN(filterChoice) && filterChoice != 4 && filterChoice == 1 || filterChoice == 2) {
            if (filterChoice == 1) {
                let comparisionPrice = Number(prompt('Ingrese un precio a comparar'));
                if (isNaN(comparisionPrice)) {
                    alert('Entrada erronea');
                }
                while (!isNaN(comparisionPrice)) {
                    let bigOrSmall = prompt(`Ingrese:
MAYOR para mostrar propiedades mayores a M$${comparisionPrice}.
MENOR para mostrar propiedades menores a M$${comparisionPrice}.`).toUpperCase();
                    if (bigOrSmall == 'MAYOR') {
                        const filterBig = houseList.filter(element => element.price > comparisionPrice);
                        alert(`Las propiedades mayores a M$${comparisionPrice} son:`);
                        for (let filterHouse of filterBig) {
                            alert(`Nombre: ${filterHouse.name}
ID: ${filterHouse.id}
Precio: M$${filterHouse.price}`);
                        }
                        break;
                    } else if (bigOrSmall == 'MENOR') {
                        const filterSmall = houseList.filter(element => element.price < comparisionPrice);
                        alert(`Las propiedades menores a M$${comparisionPrice} son:`);
                        for (let filterHouse of filterSmall) {
                            alert(`Nombre: ${filterHouse.name}
ID: ${filterHouse.id}
Precio: M$${filterHouse.price}`);
                        }
                        break;
                    } else {
                        alert('Entrada incorrecta');
                    }
                }
            } else if (filterChoice == 2) {
                let availableHouses = houseList.filter(avalHouse => avalHouse.sold == false);
                alert('Las propiedades disponibles son las siguientes');
                for (let noSold of availableHouses) {
                    alert(`Nombre: ${noSold.name}
ID: ${noSold.id}`);
                }
            } else {
                alert('Propiedad/es no encontrada/s');
                break;
            }
            break;
        }
        if (isNaN(filterChoice) || filterChoice < 0 || filterChoice > 3) {
            alert('Entrada erronea');
        }
        if (filterChoice == 3) {
            break;
        }
    }
};

// Arrays

const houseList = [];

houseList.push(new Houses('BLY MANOR', 'MH1', '13 MAIN ST.', 2200000, '220M2', 8));
houseList.push(new Houses('NORMAL HOUSE', 'MH2', '24 GREEN SPRING ST.', 1250000, '120M2', 4));
houseList.push(new Houses('MONO', 'MH3', ' 12 GREEN SPRING ST.', 1320000, '90M2', 2));
houseList.push(new Houses('EMPTY PLOT', 'MH4', '16 MAIN ST.', 1700000, '195M2', 0));

houseList[2].soldStatus();

// Opciones

let choose = 0;

while (choose != 7) {

    choose = parseInt(prompt(`Bienvenido al gestor de propiedades, ingrese un numero dependiendo su eleccion:
            1) Lista de propiedades.
            2) Agregar una propiedad.
            3) Eliminar una propiedad.
            4) Buscar una propiedad.
            5) Marcar casa como vendida.
            6) Filtrar propiedades.
            7) Salir.
            `));

    switch (choose) {
        case 1:
            // Listar propiedades
            houseNameList();
            break;
        case 2:
            // Agregar propiedades
            initAddHouse(prompt('Ingrese el nombre').toUpperCase(), prompt('Ingrese el ID').toUpperCase(), prompt('Ingrese la direccion').toUpperCase(), Number(prompt('Ingrese el precio (solo numero)')), prompt('Ingrese el tamaño (numero seguido de m2)').toUpperCase(), Number(prompt('Ingrese la cantidad de habitaciones')));
            break;
        case 3:
            // Eliminar propiedades
            funcEraseHouse();
            break;
        case 4:
            // Buscar propiedades
            while (choose == 4) {
                let nameOrId = Number(prompt('Ingrese 1 para buscar por NOMBRE, 2 para buscar por ID o 3 para volver al menu principal'));
                while (nameOrId == 1 || nameOrId == 2) {
                    if (nameOrId == 1) {
                        let findName = prompt('Ingrese el nombre de la propiedad').toUpperCase();
                        const nameFind = houseList.find(houseNameElm => houseNameElm.name == findName);
                        if (nameFind != undefined) {
                            findAlert(nameFind);
                            break;
                        } else {
                            alert('Propiedad no encontrada');
                            break;
                        };
                    } else if (nameOrId == 2) {
                        let findID = prompt('Ingrese el ID de la propiedad').toUpperCase();
                        const IDFind = houseList.find(houseIDElm => houseIDElm.id == findID);
                        if (IDFind != undefined) {
                            findAlert(IDFind);
                            break;
                        } else {
                            alert('Propiedad no encontrada');
                            break;
                        };
                    }
                }
                if (isNaN(nameOrId) || nameOrId < 0 || nameOrId > 3) {
                    alert('Entrada erronea');
                }
                if (nameOrId == 3) {
                    break;
                }
            };
        case 5:
            // Vender propiedades
            funcSold();
            break;
        case 6:
            // Filtrar propiedades
            funcFilter();
            break;
        case 7:
            // Finalizar
            alert('Gracias por usar nuestros servicios');
            break;
        default:
            // Entrada erronea
            alert('Entrada erronea');
    }
}