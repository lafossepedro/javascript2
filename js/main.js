const carrito = [];

const entradas = [
  { imagen: "🥖", codigo: 1, nombre: 'Pan con tomate', precio: 750 },
  { imagen: "🧀", codigo: 2, nombre: 'Jamon y queso', precio: 1000 },
  { imagen: "🥟", codigo: 3, nombre: 'Empanaditas', precio: 1500 }
];

const bebidas = [
  { imagen: "🫗", codigo: 1, nombre: 'Agua', precio: 500 },
  { imagen: "🥤", codigo: 2, nombre: 'Gaseosa', precio: 800 },
  { imagen: "🍺", codigo: 3, nombre: 'Cerveza', precio: 1200 }
];

function buscarEntrada(codigo) {
  return entradas.find((entrada) => entrada.codigo === codigo);
}

function buscarBebida(codigo) {
  return bebidas.find((bebida) => bebida.codigo === codigo);
}

function comprar() {
  let codigo = parseInt(prompt("Ingresa el código de la entrada que elegiste. \n(el código numérico del HTML)"));
  let entradaElegida = buscarEntrada(codigo);

  if (entradaElegida !== undefined) {
    carrito.push(entradaElegida);
    let respuesta = confirm("¿Deseas elegir ahora tu bebida?");

    if (respuesta === true) {
      let codigoBebida = parseInt(prompt("Ingresa el código de la bebida que deseas."));
      let bebidaElegida = buscarBebida(codigoBebida);

      if (bebidaElegida !== undefined) {
        carrito.push(bebidaElegida);
      } else {
        alert("⛔️ El código de la bebida ingresado no corresponde a ninguna de las opciones.");
      }
    }

    const shop = new Compra(carrito); // Asegúrate de que la clase Compra esté definida en tu archivo .js
    let subtotal = shop.obtenerSubtotal();
    console.table(carrito);
    alert("✅ El costo total de tu compra es de $ " + subtotal + ".\nMuchas gracias por elegirnos.");
  } else {
    alert("⛔️ El código de la entrada ingresado no corresponde a ninguna de las opciones. Refresca para comenzar de nuevo.");
  }
}
