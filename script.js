
const nombre = prompt("Ingrese su nombre: ")
const apellido = prompt("Ingrese su apellido: ")
let anioNacimiento = prompt("Ingrese su año de nacimiento: ")
anioNacimiento = parseInt(anioNacimiento)

console.log("Su nombre completo es: ", nombre + " " + apellido)
console.log("Su edad es: ", (2026 - anioNacimiento))