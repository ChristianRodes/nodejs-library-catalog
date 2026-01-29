import React, { Fragment } from "react"; // Falta esta línea para que funcione <Fragment>
import "./ListadoResumen.css";

const ListadoResumen = ({ cantidad }) => {
  return (
    <Fragment>
      {cantidad > 0 
        ? `La biblioteca contiene ${cantidad} libro(s).` 
        : "cero libros."}
    </Fragment>
  );
};

export default ListadoResumen;