import { Fragment } from "react";
// En Vite hay que instalar este paquete, CRA ya lo trae por defecto
// Como solo se usa a nivel de desarrollo, no es necesario instalarlo como paquete dependiente de la aplicación - npm i -D 
import PropTypes from 'prop-types';

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

// PropTypes y defaultProps - son objetos que se deben colocar al final de la declaración del componente

// Establecer el tipado de las propiedades que recibe este componente
// Esto solo funciona a nivel de desarrollo, y de forma informativa en consola.
// Cuando se trabaja con TS, este paquete es innecesario
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired
}

// Establecer los valores por defecto de nuestras Props, podemos definir N props aunque no sean los que realmente espera el componente. (desestructuración de los props)
FirstApp.defaultProps = {
    title: 'No hay titulo',
    description: 'No se especificó un subtítulo',
    numero: 1.0
}