const flor = {
  nombre: "flor",
  pin: 111,
};

let saldo = 100;

const retirosPosibles = [100, 200, 300, 400, 500];

function sumar(deposito) {
  saldo = saldo + deposito;
}

function restar(retiro) {
  saldo = saldo - retiro;
}

function pasarADolar(ars) {
  const usd = ars * 0.00027;
  return usd;
}

/* ==================================================== */
/* ==================================================== */
/* ==================================================== */

const nombreDelUsuario = prompt("Ingrese su nombre");
const pinDelUsuario = parseInt(prompt("Ingrese su PIN"));
let operacion;

if (nombreDelUsuario === "flor" && pinDelUsuario === 111) {
  operacion = prompt(
    "Hola flor, teneś un saldo de $" +
      saldo +
      ". ¿Qué desea hacer? Valores posibles: 1. Retiro 2. Deposito 3. Salir"
  );
}

// RETIRO //

if (operacion === "1") {
  const retiro = prompt("Ingrese el monto a retirar");
  if (retiro <= saldo) {
    restar(retiro);
    alert("Retiro exitoso. Su saldo actual es de $" + saldo);
  } else if (retiro > saldo) {
    alert("No tiene saldo suficiente para realizar el retiro");
  }
}
// DEPOSITO //

if (operacion === "2") {
  const deposito = parseInt(prompt("Ingrese el monto a depositar"));
  alert("Deposito exitoso. Su saldo actual es de $" + saldo);
} else {
  alert("Pin o usuario incorrecto");
}
