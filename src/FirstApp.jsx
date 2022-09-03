import { Fragment } from "react";

function FirstApp() {
  return (
    <Fragment>
      <h3>Mi primer componente</h3>
      <p>Los componentes de React deben tener un solo elmento padre, para ello se recomienda encapsular su contenido en un Fragment</p>
    </Fragment>
  );
}

export default FirstApp;
