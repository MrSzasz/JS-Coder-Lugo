// ============================================== BOOKLET 1 ==================================================

// Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración.

/*

 let nombre = prompt('Inserte su nombre');
 let apellido = prompt('Inserte su apellido');
 let edad = prompt('Inserte su edad');
 let datos = 'Hola! soy ' + nombre + ' ' + apellido + ', tengo ' + edad + ' años!';
 alert(datos);
 document.getElementById("bienvenida").innerHTML = datos;

*/

// Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

/*

 const ciudad1 = 'springfield';
 const ciudad2 = 'shellbyville';
 const ciudad3 = 'ciudad capital';
 const ciudad4 = 'oddenville';
 const ciudad5 = 'talahasse';
 let ciudades = ciudad1 + ' ' + ciudad2 + ' ' + ciudad3 + ' ' + ciudad4 + ' ' + ciudad5;
 console.log(ciudades);

*/

// Declarar variables para representar la información de un carnet de conducir.
// Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

/*

 let codigoCarnet = prompt('Inserte su ID');
 let nombreCarnet = prompt('Inserte su nombre');
 let apellidoCarnet = prompt('Inserte su apellido');
 let direccionCarnet = prompt('Inserte su direccion');
 let fechaNacCarnet = prompt('Inserte su fecha de nacimiento');
 let carnet = 'SPRINGFIELD DRIVER LICENSE' + '\n' + codigoCarnet + '\n' + nombreCarnet + ' ' + apellidoCarnet + '\n' + 'SPRINGFIELD, USA' + '\n' + '\n' + 'BIRTHDATE ' + fechaNacCarnet;
 alert(carnet);

*/

// Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. Luego, concatenar dichas entradas y efectuar una salida por alerta.

/*

 let padre = prompt('Inserte el nombre del padre');
 let madre = prompt('Inserte el nombre de la madre');
 let hermanaMayor = prompt('Inserte el nombre de la hermana mayor');
 let hermanaMenor = prompt('Inserte el nombre de la hermana menor');
 let hermano = prompt('Inserte el nombre del hermano');
 const apellido = 'simpson';
 let familia = 'Padre: ' + padre + ' ' + apellido + '\n' + 'Madre: ' + madre + ' ' + apellido + '\n' + 'Hija Mayor: ' + hermanaMayor + ' ' + apellido + '\n' + 'Hija menor: ' + hermanaMenor + ' ' + apellido + '\n' + 'Hijo: ' + hermano + ' ' + apellido;
 alert(familia);
 document.getElementById("bienvenida").innerHTML = familia;

*/

// Solicitar al usuario uno o más precios.
// Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

/*

let precio = (parseInt(prompt('Inserte el precio base (solo numero)')));
 let porcentaje = precio * 0.2;
 let precioFinal = precio - porcentaje;
 alert('$' + precioFinal);

*/

// ============================================== BOOKLET 2 ==================================================

// Solicitar al usuario un (1) nombre.
// Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
// Caso contrario, la salida será “Yo no fui”.

/*

 let nombre = prompt('inserte su nombre');
 let yoNoFui = 'Bart';
if (nombre == yoNoFui){
    alert('Yo no fui');
}else{
    alert('Fui yo');
}

*/

// Solicitar al usuario una (1) tecla.
// Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”.

/*

 let letra = prompt('inserte Y');
 if ((letra == 'y') || (letra == 'Y')) {
     alert('correcto');
 } else {
     alert('ERROR');
 }

*/

// Solicitar al usuario un (1) un número.
// Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
// “Elegiste a Homero” si es 1.
// “Elegiste a Marge” si es 2.
// “Elegiste a Bart” si es 3.
// “Elegiste a Lisa” si es 4.


/*

 let numero = prompt('elegi un personaje con el numero');
 if (numero == 1) {
     alert('Elegiste a Homero');
 } else if (numero == 2) {
     alert('Elegiste a Marge');
 } else if (numero == 3) {
     alert('Elegiste a Bart');
 } else if (numero == 4) {
     alert('Elegiste a Lisa');
 } else {
     alert('ERROR!');
 }

*/

// Solicitar al usuario un (1) número.
// Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
// “Presupuesto bajo” si está entre 0 y 1000.
// “Presupuesto medio” si está entre 1001 y 3000.
// “Presupuesto alto” si es  mayor que 3000.

/*

 let numero = parseFloat(prompt('inserte un numero'));
 if (numero <= 1000) {
     alert('presupuesto bajo');
 } else if (numero <= 3000) {
     alert('presupuesto medio');
 } else {
     alert('presupuesto alto');
 }

*/

// Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.

/*

 let producto1 = prompt('inserte el primer producto');
 let producto2 = prompt('inserte el segundo producto');
 let producto3 = prompt('inserte el tercer producto');
 let producto4 = prompt('inserte el cuarto producto');
 if ((producto1 != '') && (producto2 != '') && (producto3 != '') && (producto4 != '')) {
     let listaDeProductos = 'los productos son: ' + producto1 + ', ' + producto2 + ', ' + producto3 + ' y ' + producto4;
     alert(listaDeProductos);
 } else {
     alert('Error: Es necesario cargar todos los productos');
 }

*/

// ============================================== BOOKLET 3 ==================================================

// Solicitar al usuario un(1) un número y un(1) texto. Efectuar una salida por alerta con el mensaje ingresado por cada repetición, hasta alcanzar el valor señalado por el usuario.

/*

let numero = (parseInt(prompt('ingrese un numero')));
let texto = prompt('ingrese un texto');
for (let i = 0; i < numero; i++) {
    alert(texto);
    console.log(texto);
}

*/

// Solicitar al usuario un (1) un número. Emplear este valor para determinar la cantidad de repeticiones, y efectuar una salida por alerta con el mensaje “lado” en cada repetición. Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

/*

let numero = (parseInt(prompt('ingrese un numero')));
for (let i = 1; i < numero; i++) {
    if (i == 5) {
        break;
    }
    alert('lado numero ' + i);
}

*/


// Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
// Luego realizar un única salida por alerta, con el listado de alumnos registrados.

/*

let nombres = '';
for (let i = 0; i < 10; i++) {
    nombres += prompt('ingresar el nombre')+'\n';
}
alert(nombres);

*/

// Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
// Luego realizar un única salida por alerta, con todos los nombres ingresados.

/*

let nombres = prompt('ingresar un nombre');
let lista = '';
while (nombres != 'voldemort') {
    lista += nombres + '\n';
    nombres = prompt('ingresar un nombre');
}
alert(lista);

*/

// Solicitar al usuario un (1) número de forma consecutiva, hasta que se ingrese “ESC”. Generar una única salida compuesta por los siguientes productos, según el valor ingresado en cada ciclo:
// “Tomate” si es 1.
// “Papa” si es 2.
// “Carne” si es 3.
// “Pollo” si es 4.

/*

let numero = prompt('ingrese un numero del 1 al 4');
while (numero != 'ESC') {
    switch (numero) {
        case '1':
            alert('tomate');
            break;
        case '2':
            alert('papa');
            break;
        case '3':
            alert('carne');
            break;
        case '4':
            alert('pollo');
            break;
        default:
            alert('error');
            break;
    }
    numero = prompt('ingrese un numero del 1 al 4');
}

*/

// ============================================== BOOKLET 4 ==================================================