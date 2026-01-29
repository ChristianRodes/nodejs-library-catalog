import React, { useContext, Fragment } from "react";
// Importamos el contexto (asegúrate de que la ruta sea correcta)
import { ContextoLibros } from "../contextos/ProveedorLibros";
import Libro from "./Libro.jsx";
import ListadoResumen from "./ListadoResumen";
import "./ListadoLibros.css";

const ListadoLibros = () => {
  // Extraemos la biblioteca del estado global
  const { biblioteca } = useContext(ContextoLibros);

  return (
    <Fragment>
      <section className="listado-libros">
        <h2 className="listado-libros__titulo">Listado de libros</h2>

        <div className="listado-libros__resumen">
          {/* Pasamos la longitud del array global al resumen */}
          <ListadoResumen cantidad={biblioteca.length} />
        </div>

        <div className="listado-libros__grid">
          {biblioteca.length > 0 ? (
            biblioteca.map((libro) => (
              /* IMPORTANTE: Pasamos la prop como 'datos' para cumplir con la P4/P5 */
              <Libro key={libro.id} datos={libro} />
            ))
          ) : (
            <p>No hay libros en la biblioteca.</p>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default ListadoLibros;