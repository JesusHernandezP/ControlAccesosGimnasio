# Control de Accesos a Gimnasio (Práctica JavaScript)

Proyecto académico desarrollado como práctica de programación con enfoque **por bloques funcionales** y commits incrementales.

## Objetivo

Implementar un sistema básico de control de acceso para socios de un gimnasio en JavaScript, cumpliendo con los requisitos de la práctica:

- Validación de acceso por cuota, edad y tipo de membresía.
- Resumen de accesos con bucle.
- Cálculo recursivo de descuentos por fidelidad.
- Clasificación de socios por cantidad de visitas.
- Búsqueda recursiva de socio por `id`.
- Integración final en un flujo ejecutable.

## Qué se implementó

Archivo principal:

- [`gym-acceso.js`](gym-acceso.js)

Funciones principales:

- `evaluarAcceso(socio)`  
  Valida si un socio puede entrar según reglas de la práctica.
- `evaluarTodosLosSocios(socios)`  
  Recorre todos los socios con bucle y calcula cuántos entran / no entran.
- `calcularDescuento(visitas)`  
  Implementa lógica recursiva para sumar 5% por cada bloque de 10 visitas con tope 30%.
- `clasificarSocios(socios)`  
  Función flecha que clasifica como **Nuevo**, **Frecuente** o **Elite**.
- `buscarSocioPorId(socios, idBuscado, indice)`  
  Búsqueda recursiva por índice.
- `ejecutarSistema()`  
  Integra y muestra de forma ordenada los resultados de todos los bloques.

## Metodología de trabajo (transparencia)

Este repositorio se construyó como flujo de colaboración real con un asistente de código:

- Se trabajó con **prompts orientados a tarea** (bloque por bloque), para no mezclar cambios.
- Se revisó la lógica antes de cada cambio.
- Se aplicó la función solicitada con sintaxis junior y estructura simple.
- Se hicieron ajustes manuales cuando fue necesario para mantener consistencia en el resultado.
- Se trabajó con enfoque de **entrega incremental** (cada bloque en su propio commit).

Este estilo de trabajo permite demostrar razonamiento y decisiones de implementación, no solo copiar y pegar código.

## Historial por bloques (commits)

Se hicieron commits incrementales y se fueron subiendo al repositorio:

1. `feat: add access validation for one socio`
2. `feat: add loop-based access evaluation summary`
3. `feat: add recursive discount calculator with 30% cap`
4. `feat: add arrow function to classify socios by visits`
5. `feat: add recursive search of socio by id`
6. `feat: add ejecutarSistema integration flow`

## Cómo probar

Ejecutar en terminal desde la carpeta del proyecto:

```bash
node gym-acceso.js
```

La salida muestra:

- Resultado de acceso por socio (bloque 1)
- Resumen de entrada/salida (bloque 2)
- Ejemplo de descuentos (bloque 3)
- Clasificación por visitas (bloque 4)
- Búsqueda de socio por ID (bloque 5)
- Ejecución completa integrada (bloque final)

## Nota de autoría

Este trabajo está pensado para evidenciar:

- comprensión de las estructuras vistas en clase,
- aplicación práctica de condicionales, bucles y recursividad,
- y uso ético de herramientas de asistencia para acelerar el proceso sin perder el control del diseño y la calidad del código.

