// Datos de ejemplo del gimnasio
const socios = [
  { id: 1, nombre: "Ana", edad: 17, cuotaPagada: true, tipoMembresia: "basica", visitasRealizadas: 12 },
  { id: 2, nombre: "Luis", edad: 25, cuotaPagada: false, tipoMembresia: "premium", visitasRealizadas: 30 },
  { id: 3, nombre: "Marta", edad: 40, cuotaPagada: true, tipoMembresia: "vip", visitasRealizadas: 55 }
];

function evaluarAcceso(socio) {
  if (!socio.cuotaPagada) {
    return false;
  }

  if (socio.edad < 18) {
    return socio.tipoMembresia === "vip";
  }

  if (socio.tipoMembresia === "basica") {
    return socio.visitasRealizadas < 20;
  }

  if (socio.tipoMembresia === "premium" || socio.tipoMembresia === "vip") {
    return true;
  }

  return false;
}

function evaluarTodosLosSocios(lista) {
  let puedenEntrar = 0;
  let noPuedenEntrar = 0;

  for (let i = 0; i < lista.length; i++) {
    const acceso = evaluarAcceso(lista[i]);
    if (acceso) {
      puedenEntrar = puedenEntrar + 1;
    } else {
      noPuedenEntrar = noPuedenEntrar + 1;
    }
  }

  return {
    puedenEntrar,
    noPuedenEntrar,
    total: lista.length
  };
}

function calcularDescuento(visitas) {
  if (visitas < 10) {
    return 0;
  }

  const descuento = calcularDescuento(visitas - 10) + 5;
  return Math.min(30, descuento);
}

function buscarSocioPorId(lista, idBuscado, indice = 0) {
  if (indice >= lista.length) {
    return null;
  }

  if (lista[indice].id === idBuscado) {
    return lista[indice];
  }

  return buscarSocioPorId(lista, idBuscado, indice + 1);
}

function categoriaSocio(visitas) {
  if (visitas < 10) {
    return "Nuevo";
  }

  if (visitas <= 40) {
    return "Frecuente";
  }

  return "Elite";
}

function renderListado() {
  const contenedor = document.getElementById("tarjetas-socios");
  contenedor.innerHTML = "";

  for (let i = 0; i < socios.length; i++) {
    const socio = socios[i];
    const puedeEntrar = evaluarAcceso(socio);
    const estadoClase = puedeEntrar ? "ok" : "bad";
    const estadoTexto = puedeEntrar ? "Acceso permitido" : "Acceso denegado";

    const item = document.createElement("div");
    item.className = "socio-item";

    item.innerHTML =
      "<div class='title'>" + socio.nombre + " (ID: " + socio.id + ")</div>" +
      "<div><span class='label'>Tipo:</span> " + socio.tipoMembresia + "</div>" +
      "<div><span class='label'>Edad:</span> " + socio.edad + "</div>" +
      "<div><span class='label'>Cuota pagada:</span> " + (socio.cuotaPagada ? "Si" : "No") + "</div>" +
      "<div><span class='label'>Visitas:</span> " + socio.visitasRealizadas + "</div>" +
      "<div><span class='label'>Nivel:</span> " + categoriaSocio(socio.visitasRealizadas) + "</div>" +
      "<div><span class='label'>Descuento:</span> <span class='stat'>" + calcularDescuento(socio.visitasRealizadas) + "%</span></div>" +
      "<span class='tag " + estadoClase + "'>" + estadoTexto + "</span>";

    contenedor.appendChild(item);
  }
}

function evaluarInterfaz() {
  const resumen = evaluarTodosLosSocios(socios);
  const cajaResumen = document.getElementById("resumen");

  cajaResumen.innerHTML =
    "<p><strong>Total:</strong> " + resumen.total + "</p>" +
    "<p><strong>Pueden entrar:</strong> " + resumen.puedenEntrar + "</p>" +
    "<p><strong>No pueden entrar:</strong> " + resumen.noPuedenEntrar + "</p>";

  renderListado();
}

function buscarInterfaz() {
  const valor = Number(document.getElementById("buscarId").value);
  const resultado = document.getElementById("resultado-busqueda");
  const socio = buscarSocioPorId(socios, valor);

  if (socio === null) {
    resultado.textContent = "No se encontro un socio con ese ID.";
    return;
  }

  resultado.innerHTML = "Encontrado: " + socio.nombre + " • " + socio.tipoMembresia + " • " + socio.edad + " años";
}

document.getElementById("btn-evaluar").addEventListener("click", evaluarInterfaz);
document.getElementById("btn-buscar").addEventListener("click", buscarInterfaz);

renderListado();
