import PropTypes from "prop-types";
import { useState } from "react";

// Si la función manejadora de evento, no usa los props, se recomienda colocarla fuera del cuerpo de la función del componente 
/*const handleAdd = (event) => {
  console.log(event)
}*/

function CounterApp({ value }) {  
  // Declarar e inicializar el estado de este componente
  // counter = "el valor pasado como prop"
  const [counter, setCounter] = useState(value);
  
  const handleAdd = (event) => {
    // Modificar el estado del componente
    setCounter(counter + 1);
    // setCounter((counter) => counter + 1)
  }

  const handleSubtract = (event) => {
    setCounter(counter - 1)
  }

  const handleReset = (event) => {
    setCounter(value);
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      {/* Reaccionar a eventos sintéticos de React, si la función no recibe parámetros adicionales, solo le menciona, pero el evento disparado se pasa implicitamente. Caso contrario, el evento pasa como el primer parámetro */}
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 1,
};
