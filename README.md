# Ejercicio Asignatura

- [ ] 1 Crear un botón para que un alumno se pueda matricular.  
La dirección seleccionada en Metamask identifica al alumno que se está matriculando.

- [ ] 2 Crear un formulario para que el profesor cree nuevas evaluaciones.

- [ ] 3 Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.

---------------------

Pasos previos:

- Crear un workspace en ganache

- Migrar y compilar los contratos (en el directorio contracts)

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

- Se arranca el servidor web

```
npm start
```

- [ ] 1 Crear un botón para que un alumno se pueda matricular.  
La dirección seleccionada en Metamask identifica al alumno que se está matriculando.
 
 - se crea un botón en la interfaz: en la pestaña de alumnos, en la que se representa el array de matrículas
 - dentro de un contractData que debe invocar a un método matricularse sólo si la cuenta es de alumno (es decir, si no es de profesor)
 - Y se implementa la lógica que cambia el estado (store de drizzle): es decir onSubmit se debe añadir el alumno al array de alumnos matriuclados.

- [ ] 2 Crear un formulario para que el profesor cree nuevas evaluaciones.

- Se crea un formulario en la interfaz (con el componente de react-drizzle de formulario)
- Y se implementa la lógica que cambia el estado

- [ ] 3 Permitir obtener un listado con las notas de todos los alumnos en una determinada evaluación.

 - Se crea un desplegable que permite elegir que evaluacion escoges para ver la nota
 - Y se implementa la lógica que cambia el estado
