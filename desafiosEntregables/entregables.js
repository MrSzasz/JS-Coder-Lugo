/*

let num = parseInt(prompt("Ingrese un número"));
let n0 = 1;
let n1 = 1;
if (num == 0) {
    console.log(1);
} else if (num == 1) {
    console.log(1);
} else {
    for (let i = 2; i <= num; i++) {
        let ni = n0 + n1;
        n0 = n1;
        n1 = ni;
    }
    console.log(n1);
}

*/

/*

 let dolar = prompt('Inserte el precio base (solo numero)');
 let precioDolar = dolar * 110;
 let impuestoPais = precioDolar * 0.3;
 let ganancias = precioDolar * 0.35;
 let precioFinal = precioDolar + impuestoPais + ganancias;
 alert('$' + precioFinal);
 document.getElementById("bienvenida").innerHTML = 'dolar: $' + dolar + '<br>' + 'precio Dolar: $' + precioDolar + '<br>' + 'impuesto pais: $' + impuestoPais + '<br>' + 'ganancias: $' + ganancias + '<br>' + 'prefio final: $' + precioFinal;

*/

/*

 let nombre = prompt('ingrese su nombre');
 let apellido = prompt('ingrese su apellido');
 if ((nombre != '') && (apellido != '')) {
     alert('mi nombre es: ' +
         nombre + ' ' + apellido);
 } else {
     alert('ERROR: inserte un nombre y apellido')
 }

*/

/*

 let nombre = prompt('inserte su nombre');
 if ((nombre == 'ANA') || (nombre == 'ana') || (nombre == 'Ana')) {
     alert('tu nombre es Ana');
 } else {
     alert('vos no sos Ana >:(')
 }

*/

/*

 let nombre = prompt('ingrese su nombre');
 if ((nombre != '') && (nombre == 'ema') || (nombre == 'EMA')) {
     alert('hola Ema');
 } else {
     alert('quien sos?');
 }

*/

/*

 let numero = parseInt(prompt('ingrese un numero'));
 if (numero > 1000) {
     alert('mayor a mil');
 } else {
     alert("mayor a miln't")
 }

*/


// CALCULADORA BASICA ACA

/*

 Calculadora Simple. 
 1. Pedirle al usuario que ingrese un numero
 2. Pedirle que ingrese una operacion
 3. Pedirle que ingrese otro número
 4. Mostrar el resultado.


const numero1 = parseInt(prompt("Ingrese un número"))
const operacion = prompt("Ingrese una operación: SUMA, RESTA, MUL, DIV");
const numero2 = parseInt(prompt("Ingrese otro número"))

if (!isNaN(numero1) && !isNaN(numero2)) {
    if (operacion === "SUMA" ||
        operacion === "RESTA" ||
        operacion === "MUL" ||
        operacion === "DIV") {
        if (operacion === "SUMA") {
            console.log(numero1 + numero2)
        } else if (operacion === "RESTA") {
            console.log(numero1 - numero2)
        } else if (operacion === "MUL") {
            console.log(numero1 * numero2)
        } else if (operacion === "DIV") {
            console.log(numero1 / numero2)
        }
    } else {
        console.log("OPERACION INVALIDA")
    }
} else {
    console.log("NUMEROS INVALIDOS")
}

*/

/*
for(let i = 0; i <= 5; i++){
    console.log(i);
}
*/
/*

let numeroIngresado = parseInt(prompt('Ingrese un numero'));
for(let i = 1; i <= 10; i++){
    let mult= (numeroIngresado*i);
    alert(numeroIngresado+'x'+i+'= '+mult);
}
*/


/* 
for (let i = 1; i <= 4; i++) {
    let nombre = prompt('Ingrese su nombre');
    alert(nombre + ': turno numero ' + i);
}
*/


/* 
for (let i = 1; i <= 7; i++) {
    if (i == 3) {
        continue;
    }
    if (i == 5) {
        break;
    }
    console.log(i);
}
*/

/* 

let repetir = false;
while(repetir){
    console.log('repito')
}

*/

/* 

let entrada = prompt('Ingrese END');
while (entrada != 'END') {
    alert('ingrese END');
    entrada = prompt('Ingrese END');
}

*/

/* 

let numero = 5;
do {
    console.log(numero);
    numero++;
} while (numero <= 4);

*/

/* 

let nombre = prompt('ingresar un nombre');
while (nombre != 'end') {
    switch (nombre) {
        case 'leo':
            alert('hola leo');
            break;
            case 'zoe':
                alert('hola zoe');
                break;
                default:
            alert('nombre erroneo');
            break;
        }
        nombre = prompt('ingresar un nombre');
    }
    
*/


/* 


*/



// for (let vida = 20; vida <= 20; vida--) {
//     let entrada = prompt(`ESTAS ENVENENADO! Necesitas una pocion (Vida actual: ${vida} pts)`);
//     while (entrada != 'pocion') {
//         vida--;
//         prompt(`No funciono! Sigues necesitando una pocion (Vida actual: ${vida} pts)`);
//         if (vida == 0) {
//             alert('GAME OVER');
//             break;
//         }
//     }
// }

// let vida = 20;
// let estado;
// do {
//     let entrada = alert(`ESTAS ENVENENADO! Necesitas una pocion o antidoto (Vida actual: ${vida} pts)`);
//     vida--;
//     for (let i = vida; vida <= 20 && vida > 0; vida--) {
//         entrada = prompt(`RAPIDO! ESTAS ENVENENADO! Necesitas una pocion o antidoto (Vida actual: ${vida} pts)`);
//         if (entrada == 'pocion') {
//             vida = 20;
//             alert(`Tu vida aumenta a ${vida} pts., pero seguis envenenado!`);
//         } else if (entrada == 'antidoto') {
//             estado = 'vivo';
//             break;
//         }
//     }
// } while (vida <= 20 && vida > 0);
// if (estado == 'vivo') {
//     alert(`Estas curado, te quedan ${vida} pts. de vida`);
// } else {
//     alert('GAME OVER');
// }

// let vida = 20;
// let estado;
// do {
//     let entrada = prompt(`TE GOLPEARON Y AHORA ESTAS ENVENENADO! Necesitas una pocion o antidoto (Vida actual: ${vida} pts)`);
//     vida--;
//     // let contador = 0;
//     for (let contador = 1; contador <= 20; contador++) {
//         // contador++;
//         console.log(`dato ingresado numero ${contador}: ${entrada}`);
//     }
//     if (entrada == 'pocion') {
//         vida = 20;
//         alert(`Tu vida aumenta a ${vida} pts., pero seguis envenenado!`);
//     } else if (entrada == 'antidoto') {
//         estado = 'vivo';
//         break;
//     }
// } while (vida <= 20 && vida > 0);
// if (estado == 'vivo') {
//     alert(`Estas curado, te quedan ${vida} pts. de vida`);
// } else {
//     alert('GAME OVER');
// }

/* 

1) Alerta sobre daño y pedir una entrada, mostrar la vida restante
2) Comprobar la entrada y aumentar el contador por cada una
    2.1) pocion => sube a 20 y vuelve a bajar
    2.2) antidoto => termina la cuenta regresiva
    2.3) otra cosa => error y sigue bajando
3) Listar cada entrada en la consola con su respectivo numero
4) Al finalizar el codigo comprobar si esta vivo (antidoto) o si termina el juego
/*
let maximo = 1;
let vida = 20;
let estado;
for (let contador = 0; contador < maximo; contador++) {
    let entrada;
    do {
        entrada = prompt(`TE GOLPEARON Y AHORA ESTAS ENVENENADO! Necesitas una pocion o algun antidoto... (Vida actual: ${vida} pts)`);
        contador++;
        console.log(`el intento numero ${contador} fue ${entrada}`);
        vida--;
        maximo++;
        if (entrada == 'pocion') {
            vida = 20;
            alert(`Tu vida aumenta a ${vida} pts., pero seguis envenenado!`);
        } else if (entrada == 'antidoto') {
            estado = 'vivo';
            maximo = contador - 1;
            break;
        }
    } while (vida <= 20 && vida > 0);
    if (estado == 'vivo') {
        alert(`Estas curado, te quedan ${vida} pts. de vida`);
    } else {
        alert('GAME OVER');
    }
}

*/

// let resultado;
// function suma(numA, numB){
//     resultado = numA + numB;
// }
// function mensaje(texto){
//     console.log(`la suma total es ${texto}`);
// }

// suma(2,5);
// mensaje(resultado);

// function suma(op, numA, numB) {
//     switch (op) {
//         case '-':
//             return numA - numB;
//         case '+':
//             return numA + numB;
//         case '*':
//             return numA * numB;
//         case '/':
//             return numA / numB;
//         default:
//             return 'ERROR';
//     }
// }

// console.log(suma(prompt('ingrese -, +, * o /'), parseInt(prompt('ingrese el primer numero')), parseInt(prompt('ingrese el 2do numero'))));

// const suma = (a, b) => {
//     return a + b;
// };
// const resta = (a, b) => {
//     return a - b;
// };
// const iva = (n) => {
//     return n * 0.21;
// };
// let precioBase = 400;
// let descuento = 50;
// console.log(resta(suma(precioBase, iva(precioBase)), descuento));


//pedir 4 numeros, asignar a una variable el resultado, operar los 4 numeros, imprimir el resultado
// const valor1 = (parseInt(prompt('ingrese el primer valor')));
// const valor2 = (parseInt(prompt('ingrese el segundo valor')));
// const valor3 = (parseInt(prompt('ingrese el tercer valor')));
// const valor4 = (parseInt(prompt('ingrese el cuarto valor')));

// function operacion(num1, num2, num3, num4) {
//     let resultado = num1 + num2 + num3 + num4;
//     return resultado;
// }
// console.log(operacion(valor1, valor2, valor3, valor4));



// function datos(valor1, valor2, valor3, valor4) {
//     valor1 = (parseInt(prompt('ingrese el primer valor')));
//     valor2 = (parseInt(prompt('ingrese el segundo valor')));
//     valor3 = (parseInt(prompt('ingrese el tercer valor')));
//     valor4 = (parseInt(prompt('ingrese el cuarto valor')));
//     return;
// }

// function operacion(num1, num2, num3, num4) {
//     let resultado = num1 + num2 + num3 + num4;
//     return resultado;
// }
// console.log(operacion(valor1, valor2, valor3, valor4));






// function sumar(n1, n2, n3, n4) {
//     const resultado = n1 + n2 + n3 + n4
//     return resultado
// }

// const numero1 = (parseInt(prompt("Ingresa un número")))
// const numero2 = (parseInt(prompt("Ingresa otro número")))
// const numero3 = (parseInt(prompt("Ingresa otro número")))
// const numero4 = (parseInt(prompt("Ingresa otro número")))

// const suma = sumar(numero1, numero2, numero3, numero4)
// alert(`La suma de los número ingresados es igual a ${suma}.`)


// calculadora que pida la cantidad de numeros que va a usar y hacer la cuenta usando ciclos y funciones

// pedir la cantidad de numeros
// pedir los numeros en base a eso
// sumar los numeros
// mostrar resultados

// let cantidad = (parseInt(prompt('cuantos numeros vas a usar?')));
// for (let i = 0; i < cantidad; i++) {
//     function suma()
//     let n1 = (parseInt(prompt('ingresa un numero')));
//     let n2 = (parseInt(prompt('ingresa un numero')));
//     switch (cantidad) {
//         case 1:
//             console.log(numero);
//             break;
//         case 2:
//             let cuentaInt = numero + numero;
//             console.log(cuentaInt);
//             break;
//         default:
//             continue;
//     }
//      let cuenta = 0 + numero;
//        console.log(cuenta);
// }


// calculadora que pida la cantidad de numeros que va a usar y hacer la cuenta usando ciclos y funciones

// pedir la cantidad de numeros
// pedir los numeros en base a eso
// sumar los numeros
// mostrar resultados

// let cantidad = (parseInt(prompt('cuantos numeros vas a usar?')));
// for (let i = 0; i < cantidad; i++) {
//     let numero = (parseInt(prompt('ingresa un numero')));
//     console.log(numero);
// }