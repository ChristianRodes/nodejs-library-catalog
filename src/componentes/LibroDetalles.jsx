import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextoLibros } from "../contextos/ProveedorLibros";
import "./LibroDetalles.css";

const LibroDetalles = () => {
  const { id } = useParams();
  const navegar = useNavigate(); // Para redirigir tras borrar

  // Sacamos los datos y la función de borrar del contexto
  const { biblioteca, eliminarLibro } = useContext(ContextoLibros);

  // Buscamos el libro en el array global
  const libro = biblioteca.find((l) => l.id === id);

  // Si el libro no existe (porque se ha borrado o el ID es malo)
  if (!libro) {
    return (
      <div className="libro-detalles">
        <p>El libro no existe o ha sido eliminado.</p>
        <button onClick={() => navegar("/")}>Volver al inicio</button>
      </div>
    );
  }

  const handleEliminar = () => {
    eliminarLibro(id); // Borramos del estado global
    navegar("/");      // Redirigimos al inicio automáticamente
  };

  return (
    <article className="libro-detalles">
      <img
        className="libro-detalles__imagen"
        src={libro.portada}
        alt={`Portada de ${libro.titulo}`}
      />

      <div className="libro-detalles__contenido">
        <h2>{libro.titulo}</h2>
        <p className="libro-detalles__autor">{libro.autor}</p>
        <p className="libro-detalles__sinopsis">{libro.sinopsis}</p>

        <div className="libro-detalles__acciones">
          <button className="boton-eliminar" onClick={handleEliminar}>
            Eliminar Libro
          </button>
          <button onClick={() => navegar("/")}>← Atrás</button>
        </div>
      </div>
    </article>
  );
};

export default LibroDetalles;