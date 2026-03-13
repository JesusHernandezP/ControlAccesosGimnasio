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
