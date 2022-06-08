function nivelFacil() {
    const Pregunta = Number(prompt('¿Cuanto es 9x7?'));
    while(Pregunta != 63 ){
        const Pregunta2 = Number(prompt('Respuesta incorrecta, Sigue intentado ¿Cuanto es 9x7?'))
        if (Pregunta2 == 63) {
            alert('Respuesta correcta')
            break;
        }
    }
    if (Pregunta == 63) {
        alert('Respuesta correcta')
    }
}

function nivelIntermedio() {
    const Pregunta = prompt('¿En qué continente esta japon?');
    while(Pregunta != 'Asia'){
        const Pregunta2 = prompt('Respuesta incorrecta, sigue intentando ¿En qué continente esta japon?')
        if (Pregunta2 == 'Asia') {
            alert('Respuesta correcta')
            break;
        }
    }
    if (Pregunta == 'Asia') {
        alert('Respuesta correcta')
    }
}

function nivelDificil() {
    const Pregunta1 = Number(prompt('¿Cuanto es 10 + 10 x 10 + 10?'));
    while(Pregunta1 != 120 ){
        const Pregunta2 = Number(prompt('Respuesta incorrecta, sigue intentando ¿Cuanto es 10 + 10 x 10 + 10?'))
        if (Pregunta2 == 120) {
            alert('Respuesta correcta')
            break;
        }
    }
    if (Pregunta == 120) {
        alert('Respuesta correcta')
    }
}

