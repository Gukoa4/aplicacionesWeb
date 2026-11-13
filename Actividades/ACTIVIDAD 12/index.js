// ===== ARREGLOS =====

// a) Cargar 5 números con prompt() y guardarlos con push()
function arreglosA() {
  const numeros = []; // el arreglo se crea fuera del bucle

  for (let i = 0; i < 5; i++) {
    const numero = Number(prompt(`Ingresar el número ${i + 1} de 5:`));
    numeros.push(numero);
  }

  console.log("a) Números cargados:", numeros);
}

// b) Guardar solo los números impares
function arreglosB() {
  const impares = [];

  for (let i = 0; i < 5; i++) {
    const numero = Number(prompt(`Ingresar el número ${i + 1} de 5 (solo se guardan impares):`));
    if (numero % 2 !== 0) {
      impares.push(numero);
    }
  }

  console.log("b) Números impares:", impares);
}

// c) forEach: pasar a MAYÚSCULAS modificando el mismo arreglo
function arreglosC() {
  const frutas = ["pera", "manzana", "banana", "durazno"];

  frutas.forEach((fruta, indice) => {
    frutas[indice] = fruta.toUpperCase();
  });

  console.log("c) forEach (arreglo modificado):", frutas);
}

// d) map: crear un nuevo arreglo en MAYÚSCULAS (no destructivo)
function arreglosD() {
  const frutas = ["pera", "manzana", "banana", "durazno"];
  const frutasMayusculas = frutas.map((fruta) => fruta.toUpperCase());

  console.log("d) Original:", frutas);
  console.log("d) map (nuevo arreglo):", frutasMayusculas);
}

// e) filter: solo las frutas que contienen "na"
function arreglosE() {
  const frutas = ["pera", "manzana", "banana", "durazno"];
  const conNa = frutas.filter((fruta) => {
    if (fruta.includes("na")) {
      return true;
    }
    return false;
  });

  console.log("e) Frutas con 'na':", conNa);
}

// ===== OBJETOS =====

// a) Un objeto con datos de un producto de indumentaria
const producto = {
  nombre: "Remera básica",
  precio: 8500,
  stock: 12,
  talles: ["s", "m", "l"],
};

function objetosA() {
  console.log("a) Producto:", producto);
}

// b) Arreglo de 4 productos (stock variado)
const productos = [
  { nombre: "Remera básica", precio: 8500, stock: 12, talles: ["s", "m", "l"] },
  { nombre: "Jean recto", precio: 25000, stock: 3, talles: ["s", "m", "l"] },
  { nombre: "Campera de abrigo", precio: 48000, stock: 15, talles: ["m", "l"] },
  { nombre: "Buzo con capucha", precio: 22000, stock: 4, talles: ["s", "m"] },
];

function objetosB() {
  console.log("b) Productos:", productos);
}

// c) forEach: imprimir los productos con stock menor a 5
function objetosC() {
  console.log("c) Productos con stock menor a 5:");
  productos.forEach((p) => {
    if (p.stock < 5) {
      console.log(p);
    }
  });
}

// d) map: nuevo arreglo con 10% de descuento (sin modificar el original)
function objetosD() {
  const conDescuento = productos.map((p) => ({
    ...p,
    precio: p.precio * 0.9,
  }));

  console.log("d) Productos con 10% de descuento:", conDescuento);
}

// e) filter: solo productos con stock mayor a 10
function objetosE() {
  const stockAlto = productos.filter((p) => p.stock > 10);

  console.log("e) Productos con stock mayor a 10:", stockAlto);
}

// ===== EJECUCIÓN =====
// Comentar las llamadas que no se quieran ejecutar (a y b piden prompt()).
arreglosA();
arreglosB();
arreglosC();
arreglosD();
arreglosE();

objetosA();
objetosB();
objetosC();
objetosD();
objetosE();
