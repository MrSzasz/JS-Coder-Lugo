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


//  ==================================================  DESAFIO 1  ==================================================