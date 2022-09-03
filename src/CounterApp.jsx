import PropTypes from "prop-types";

// Si la función manejadora de evento, no usa los props, se recomienda colocarla fuera del cuerpo de la función del componente 
const handleAdd = (event) => {
  console.log(event)
}

function CounterApp({ value }) {  
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      {/* Reaccionar a eventos sintéticos de React, si la función no recibe parámetros adicionales, solo le menciona, pero el evento disparado se pasa implicitamente. Caso contrario, el evento pasa como el primer parámetro */}
      <button onClick={handleAdd}>+1</button>
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
