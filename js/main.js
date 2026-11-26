const ANIO_ACTUAL = 2026;

const NOMBRE = prompt("Ingrese su nombre");
const APELLIDO = prompt("Ingrese su apellido");

let anio_nacimiento = prompt("Ingrese su año de nacimiento");
anio_nacimiento = parseInt(anio_nacimiento);

let edad = ANIO_ACTUAL - anio_nacimiento;

alert("Hola " + NOMBRE + " " + APELLIDO + ", tienes " + edad + " años");