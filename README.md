# Control de Accesos a Gimnasio (Practica JavaScript)

Proyecto academico desarrollado como practica de programacion con enfoque por bloques funcionales y commits incrementales.

## Objetivo

Implementar un sistema basico de control de acceso para socios de un gimnasio en JavaScript, cumpliendo con los requisitos de la practica:

- Validacion de acceso por cuota, edad y tipo de membresia.
- Resumen de accesos con bucle.
- Calculo recursivo de descuentos por fidelidad.
- Clasificacion de socios por cantidad de visitas.
- Busqueda recursiva de socio por `id`.
- Integracion final en un flujo ejecutable.

## Que se implemento

Archivo principal:

- `gym-acceso.js`

Funciones principales:

- `evaluarAcceso(socio)`  
  Valida si un socio puede entrar segun reglas de la practica.
- `evaluarTodosLosSocios(socios)`  
  Recorre todos los socios con bucle y calcula cuantos entran / no entran.
- `calcularDescuento(visitas)`  
  Implementa logica recursiva para sumar 5% por cada bloque de 10 visitas con tope 30%.
- `clasificarSocios(socios)`  
  Funcion flecha que clasifica como Nuevo, Frecuente o Elite.
- `buscarSocioPorId(socios, idBuscado, indice)`  
  Busqueda recursiva por indice.
- `ejecutarSistema()`  
  Integra y muestra de forma ordenada los resultados de todos los bloques.

## Metodologia de trabajo (transparencia)

Este repositorio se construyo como flujo de colaboracion real con un asistente de codigo:

- Se trabajo con prompts orientados a tarea (bloque por bloque), para no mezclar cambios.
- Se reviso la logica antes de cada cambio.
- Se aplico la funcion solicitada con sintaxis simple y estilo de nivel junior.
- Se hicieron ajustes manuales cuando fue necesario para mantener consistencia en el resultado.
- Se trabajo con enfoque de entrega incremental (cada bloque en su propio commit).

Este estilo de trabajo permite demostrar razonamiento y decisiones de implementacion, no solo copiar y pegar codigo.

## Historial por bloques (commits)

Se hicieron commits incrementales y se fueron subiendo al repositorio:

1. `feat: add access validation for one socio`
2. `feat: add loop-based access evaluation summary`
3. `feat: add recursive discount calculator with 30% cap`
4. `feat: add arrow function to classify socios by visits`
5. `feat: add recursive search of socio by id`
6. `feat: add ejecutarSistema integration flow`

## Como probar

Ejecutar en terminal desde la carpeta del proyecto:

```bash
node gym-acceso.js
```

La salida muestra:

- Resultado de acceso por socio (bloque 1)
- Resumen de entrada/salida (bloque 2)
- Ejemplo de descuentos (bloque 3)
- Clasificacion por visitas (bloque 4)
- Busqueda de socio por ID (bloque 5)
- Ejecucion completa integrada (bloque final)

## Nota de autoria

Este trabajo esta pensado para evidenciar:

- comprension de las estructuras vistas en clase,
- aplicacion practica de condicionales, bucles y recursividad,
- y uso etico de herramientas de asistencia para acelerar el proceso sin perder el control del diseño y la calidad del codigo.
