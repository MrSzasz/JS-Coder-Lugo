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

alert('La nueva moneda (M$) es la moneda base en las instalaciones de Marte, aqui mismo podras calcular su precio en base a tu moneda!');

let moneda;
let cantidad;

function calcularPesos(peso) {
    let totalM = (peso * 0.0066);
    alert(`AR$${peso} es equivalente a M$${totalM}`);
}

function calcularMarslar(mars) {
    let totalP = (mars * 151);
    alert(`M$${mars} es equivalente a AR$${totalP}`);
}

function pedirDatos() {
    return moneda = prompt('Ingrese PESOS o MARS dependiendo de que moneda quiere convertir.');
}

function pedirCantidad() {
    return cantidad = parseFloat(prompt('Ingrese la cantidad.'));
}

pedirDatos();

do {
    if (moneda == 'PESOS' || moneda == 'pesos') {
        pedirCantidad();
        if (isNaN(cantidad)) {
            alert('Ingrese un numero valido');
        } else {
            calcularPesos(cantidad);
            break;
        }
    } else if (moneda == 'MARS' || moneda == 'mars') {
        pedirCantidad();
        if (isNaN(cantidad)) {
            alert('Ingrese un numero valido');
        } else {
            calcularMarslar(cantidad);
            break;
        }
    } else {
        alert('entrada invalida');
        pedirDatos();
    }
}
while (moneda != 'PESOS' || moneda != 'pesos' || moneda != 'MARS' || moneda != 'mars');

