// ===== FUNCIONES DE DECLARACIÓN =====

// a) Sin retorno de valor
function saludar() {
  console.log("¡Hola, bienvenido!");
}

saludar();

// b) Sin retorno de valor, con parámetro y template strings
function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`);
}

saludarPersona("Andrés");

// c) Con retorno de valor
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  }
  return false;
}

const resultadoMayor = esMayorDeEdad(20);
const resultadoMenor = esMayorDeEdad(15);
console.log("¿20 años es mayor de edad?", resultadoMayor);
console.log("¿15 años es mayor de edad?", resultadoMenor);

// ===== FUNCIONES DE FLECHA =====

// a) Igual que 1.c, pero como función flecha
const esMayorDeEdadFlecha = (edad) => {
  if (edad >= 18) {
    return true;
  }
  return false;
};

const resultadoFlecha = esMayorDeEdadFlecha(18);
console.log("Flecha - ¿18 años es mayor de edad?", resultadoFlecha);

// b) Comparar dos números con template strings
const compararNumeros = (parametro1, parametro2) => {
  if (parametro1 < parametro2) {
    console.log(`El número ${parametro1} es menor que ${parametro2}`);
  } else if (parametro1 === parametro2) {
    console.log(`El número ${parametro1} es igual que ${parametro2}`);
  } else {
    console.log(`El número ${parametro1} es mayor que ${parametro2}`);
  }
};

// Se usa dentro de un bucle: el iterador es el primer parámetro
for (let i = 0; i <= 10; i++) {
  compararNumeros(i, 5);
}

// ===== FUNCIONES CALLBACK =====

// Callbacks: reciben los dos números e imprimen el resultado
function suma(a, b) {
  console.log(`El resultado de la suma es ${a + b}`);
}

function resta(a, b) {
  console.log(`El resultado de la resta es ${a - b}`);
}

// a) operacion recibe dos números y un callback
// b) mejora: verifica que los argumentos sean números
const operacion = (numero1, numero2, callback) => {
  if (typeof numero1 !== "number" || typeof numero2 !== "number" || isNaN(numero1) || isNaN(numero2)) {
    console.log("Debe ingresar solo números.");
    return;
  }
  callback(numero1, numero2);
};

operacion(8, 3, suma);
operacion(8, 3, resta);
operacion(8, "tres", suma); // Debe ingresar solo números.
operacion("ocho", 3, resta); // Debe ingresar solo números.
