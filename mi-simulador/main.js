const LENGUAJE = "JavaScript"

function solicitarLenguaje(mensaje) {
    return prompt(mensaje)
}

const comprobarRespuesta = (respuesta, lenguajeCorrecto) => respuesta === lenguajeCorrecto


function mostrarMensaje(mensaje) {
    alert(mensaje)
}


function jugarAhorcado(lenguajeCorrecto) {
    let intentos = 6
    let gano = false

    mostrarMensaje("Bienvenido al juego del ahorcado")
    mostrarMensaje(
        "Tenés " + intentos +
        " intentos para adivinar el lenguaje de programación."
    )

    while (intentos > 0 && !gano) {
        const respuesta = solicitarLenguaje(
            "Ingresá un lenguaje. Intentos restantes: " + intentos
        )

        gano = comprobarRespuesta(respuesta, lenguajeCorrecto)

        if (gano) {
            mostrarMensaje("¡Ganaste! ¡Adivinaste el lenguaje!")
        } else {
            intentos--
            mostrarMensaje("Respuesta incorrecta. Te quedan " + intentos + " intentos.")
        }
    }

    if (!gano) {
        mostrarMensaje(
            "Lo siento, perdiste. El lenguaje era: " + lenguajeCorrecto
        )
    }
}

jugarAhorcado(LENGUAJE)