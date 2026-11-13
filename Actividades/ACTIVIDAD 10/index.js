// ===== CONDICIONALES =====

// a) Mayor o menor de edad
const edad = 20;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// b) Par o impar
const numero = 7;

if (numero % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}

// c) Nota: Reprobado (< 4), Aprobado (4 a 7), Excelente (> 7)
const nota = 8;

if (nota < 4) {
  console.log("Reprobado");
} else if (nota <= 7) {
  console.log("Aprobado");
} else {
  console.log("Excelente");
}

// ===== BUCLES =====

// a) Del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// b) Del 10 al 1 (descendente)
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// c) 20 iteraciones desde 0, par o impar con módulo
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log("El número es par");
  } else {
    console.log("El número es impar");
  }
}

// d) Igual que c), concatenando el número con template literals
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}
