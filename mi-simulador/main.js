
const LENGUAJE = "JavaScript"
let intentos = 6
let gano = false

alert("Bienvenido al juego del ahorcado")
alert("Tenes 6 intentos para adivinar el lenguaje de programación")
prompt("Presione enter para continuar")

while (intentos > 0 && !gano) {
    
    const palabra = prompt("Ingrese un lenguaje: ")

    if (palabra === LENGUAJE) {
        intentos = 0
        gano = true
        alert("Ganaste. Adivinaste el lenguaje!!!")
    }
    else {
        intentos--;
        alert("Te quedan " + intentos + " intentos")
    }
}

if (intentos == 0 && !gano) {
        alert("Lo siento, perdiste. El lenguaje era: " + LENGUAJE)
}