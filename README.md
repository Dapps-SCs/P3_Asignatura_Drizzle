# Ejercicio Asignatura

- [ ] 1 Crear un botón para que un alumno se pueda matricular.  
La dirección seleccionada en Metamask identifica al alumno que se está matriculando.

- [ ] 2 Crear un formulario para que el profesor cree nuevas evaluaciones.

- [ ] 3 Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.

---------------------

Pasos previos:

- Crear un workspace en ganache

- Migrar y compilar los contratos

```
npx truffle migrate --reset --compile-all
```

- Se testean los contratos

```
npx truffle test
```

- Rellenarlos

```
npx truffle exec scripts/rellenar.js
```

- [ ] 1 Crear un botón para que un alumno se pueda matricular.  
La dirección seleccionada en Metamask identifica al alumno que se está matriculando.
 
 - Se crea un botón en la interfaz
 - Y se implementa la lógica que cambia el estado

- [ ] 2 Crear un formulario para que el profesor cree nuevas evaluaciones.

- [ ] 3 Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.
