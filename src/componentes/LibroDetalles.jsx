import { useParams, useNavigate } from "react-router-dom"
import biblioteca from "../assets/bbdd/biblioteca.json"
import "./LibroDetalles.css"

const LibroDetalles = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const libro = biblioteca.libros.find((libro) => libro.id === id)

  if (!libro) {
    return <p>Libro no encontrado</p>
  }

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
          <button>Eliminar</button>
          <button onClick={() => navigate("/")}>← Atrás</button>
        </div>
      </div>
    </article>
  )
}

export default LibroDetalles
