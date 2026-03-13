// Bloque 1: Validación de acceso de un socio

const socios = [
  { id: 1, nombre: "Ana", edad: 17, cuotaPagada: true, tipoMembresia: "basica", visitasRealizadas: 12 },
  { id: 2, nombre: "Luis", edad: 25, cuotaPagada: false, tipoMembresia: "premium", visitasRealizadas: 30 },
  { id: 3, nombre: "Marta", edad: 40, cuotaPagada: true, tipoMembresia: "vip", visitasRealizadas: 55 }
];

function evaluarAcceso(socio) {
  // Si no tiene la cuota pagada, no entr.
  if (!socio.cuotaPagada) {
    return false;
  }

  // Si es menor de edad, no entra pero si su membresía es "vip" sí.
  if (socio.edad < 18) {
    return socio.tipoMembresia === "vip";
  }

  // Membresía "basica": puede entrar solo si tiene menos de 20 visitas.
  if (socio.tipoMembresia === "basica") {
    return socio.visitasRealizadas < 20;
  }

  // Membresía "premium": siempre entra si la cuota está pagada.
  if (socio.tipoMembresia === "premium") {
    return true;
  }

  // Membresía "vip": acceso siempre permitido si la cuota está pagada.
  if (socio.tipoMembresia === "vip") {
    return true;
  }

  // Si llega un tipo de membresía desconocido, bloquear por seguridad.
  return false;
}

for (const socio of socios) {
  const puedeEntrar = evaluarAcceso(socio);
  console.log(`${socio.nombre}: ${puedeEntrar ? "Entrar" : "No puede entrar"}`);
}

// BLOQUE 2 — Bucle de evaluación general
function evaluarTodosLosSocios(socios) {
  let puedenEntrar = 0;
  let noPuedenEntrar = 0;

  for (let i = 0; i < socios.length; i++) {
    const socio = socios[i];
    const puedeEntrar = evaluarAcceso(socio);

    if (puedeEntrar) {
      puedenEntrar = puedenEntrar + 1;
    } else {
      noPuedenEntrar = noPuedenEntrar + 1;
    }

    console.log(socio.nombre + ": " + (puedeEntrar ? "Entrar" : "No puede entrar"));
  }

  console.log("Resumen de acceso: " + puedenEntrar + " pueden entrar, " + noPuedenEntrar + " no pueden entrar");
  return { puedenEntrar, noPuedenEntrar };
}

evaluarTodosLosSocios(socios);

// BLOQUE 3 — Recursividad: Cálculo de Bonificación por Fidelidad 
function calcularDescuento(visitas) {
  // Menos de 10 visitas => 0%
  if (visitas < 10) {
    return 0;
  }

  // Restar 10 visitas y sumar 5%
  const descuento = calcularDescuento(visitas - 10) + 5;

  // Limitar siempre hasta 30%
  return Math.min(30, descuento);
}

// Ejemplo
console.log("Descuento ejemplo (55 visitas): " + calcularDescuento(55) + "%");

// BLOQUE 4 — Clasificación de socios con función flecha
const clasificarSocios = (socios) => {
  for (let i = 0; i < socios.length; i++) {
    const socio = socios[i];
    let categoria = "";

    if (socio.visitasRealizadas < 10) {
      categoria = "Nuevo";
    } else if (socio.visitasRealizadas <= 40) {
      categoria = "Frecuente";
    } else {
      categoria = "Elite";
    }

    console.log(socio.nombre + ": " + categoria);
  }
};

clasificarSocios(socios);

// BLOQUE 5 — Búsqueda recursiva de socio por id
function buscarSocioPorId(socios, idBuscado, indice = 0) {
  if (indice >= socios.length) {
    return null;
  }

  if (socios[indice].id === idBuscado) {
    return socios[indice];
  }

  return buscarSocioPorId(socios, idBuscado, indice + 1);
}

console.log("Socio con id 2:");
console.log(buscarSocioPorId(socios, 2));

// BLOQUE FINAL — Integración del sistema
const ejecutarSistema = () => {
  console.log("=== 1) Evaluar accesos ===");
  const resumen = evaluarTodosLosSocios(socios);

  console.log("=== 2) Resumen de accesos ===");
  console.log("Pueden entrar: " + resumen.puedenEntrar);
  console.log("No pueden entrar: " + resumen.noPuedenEntrar);

  console.log("=== 3) Descuentos por fidelidad ===");
  for (let i = 0; i < socios.length; i++) {
    const socio = socios[i];
    const descuento = calcularDescuento(socio.visitasRealizadas);
    console.log(socio.nombre + ": " + descuento + "%");
  }

  console.log("=== 4) Búsqueda de socio ===");
  const socioBuscado = buscarSocioPorId(socios, 2);
  console.log(socioBuscado);
};

console.log("=== 5) Ejecutar sistema completo ===");
ejecutarSistema();
