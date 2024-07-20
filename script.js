// Solicitar el número de rondas que se desea jugar
let rondas = Number(prompt('¿Cuántas rondas de cachipun deseas jugar?'));
let puntuacionUsuario = 0;
let puntuacionCpu = 0;

// Función para convertir los números a jugadas (piedra,papel o tijera)
function numeroAJugada(numero) {
    switch (numero) {
        case 1: return 'Piedra 🖐️';
        case 2: return 'Papel ✂️';
        case 3: return 'Tijera ✊';
        default: return 'Opción invalida';
    }
}

// Función para determinar el resultado de cada ronda
function obtenerResultado(seleccionUsuario, seleccionCpu) {
    if (seleccionUsuario === seleccionCpu) {
        return '¡Empate! 🤷';
    } else if (
        (seleccionUsuario === 1 && seleccionCpu === 3) ||
        (seleccionUsuario === 2 && seleccionCpu === 1) ||
        (seleccionUsuario === 3 && seleccionCpu === 2)
    ) {
        puntuacionUsuario++;
        return '¡Ganaste esta ronda 🥳!';
    } else {
        puntuacionCpu++;
        return 'La computadora ganó esta ronda 😭';
    }
}
// inicia el juego
for (let i = 1; i <= rondas; i++) {
    // Solicitar la jugada del usuario
    let seleccionUsuario = Number(prompt('Elige: piedra = 1, papel = 2 o tijera = 3'));

    // Generar la jugada de la computadora
    let seleccionCpu = Math.floor(Math.random() * 3) + 1;

    // Mostrar jugadas
    alert(`Ronda ${i}\nTu jugada: ${numeroAJugada(seleccionUsuario)}\nJugada de la computadora: ${numeroAJugada(seleccionCpu)}`);

    // Determinar y mostrar el resultado de la ronda
    let resultado = obtenerResultado(seleccionUsuario, seleccionCpu);
    alert(resultado);
}

// Mostrar el resultado final
let resultadoFinal = '';
if (puntuacionUsuario > puntuacionCpu) {
    resultadoFinal = '🥳¡Felicidades! Has ganado el juego. 🥳';
} else if (puntuacionUsuario < puntuacionCpu) {
    resultadoFinal = '😭 Lo siento, la computadora ha ganado el juego.😭';
} else {
    resultadoFinal = '🤷 El juego ha terminado en empate.🤷';
}

alert(`Resultado Final:\nPuntuación del usuario: ${puntuacionUsuario}\nPuntuación de la computadora: ${puntuacionCpu}\n${resultadoFinal}`);
