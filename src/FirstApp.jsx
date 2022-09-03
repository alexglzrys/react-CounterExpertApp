import { Fragment } from "react";

// logica que no se relaciona con un hook, o que su ejecución no dependa de que se tenga que renderizar el componente, se recomienda colocarla fuera del componente
const name = 'Alejandro'
const response = {
    code: 202,
    status: 'success',
    message: 'Registro actualizado con éxito'
}
const saludo = (name) => `Hola que tal ${name}`;

// Las props son el mecanismo que usa React para pasar información unidireccional de un componente padre a un componente hijo
// Las props es un objeto, pero generalmente se le desestructura para indicar que información necesitamos de todo es objeto, y no estar haciendo props.propiedad1, ...
function FirstApp({ title, description, numero}) {
    // Colocar lógica en este punto, hará que se vuelva a ejecutar si el componente es nuevamente renderizado

  return (
    <Fragment>
      <h3>{ title } { numero + 1 }</h3>
      {
      /* Interpolar contenido | expresiones de JS en una vista de JSX. 
      OJO QUE NO SE PERMITEN IMPRIMIR DIRECTAMENTE OBJETOS LITERALES, 
      Se pueden parsear con JSON.strinify() o acceder directamente a sus propiedades */
      }
      <h5>{ name }</h5>
      <p>{ description }</p>
      <p>{ response.message }</p>
      {/* Llamar a una función dentro de JSX, es bueno cuando esta no es Asincrona, ya que de lo contrario, retrasará el pintado del componente en el DOM */}
      <p><strong>{ saludo('Papirus') }</strong></p>
    </Fragment>
  );
}

export default FirstApp;
