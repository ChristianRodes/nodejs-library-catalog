import "./ListadoLibros.css"
import biblioteca from "../assets/bbdd/biblioteca.json"
import Libro from "./Libro"

const ListadoLibros = () => {
  const { libros } = biblioteca

  return (
    <section className="listado-libros">
      <h2 className="listado-libros__titulo">Listado de libros</h2>

      <div className="listado-libros__grid">
        {libros.map((libro) => (
          <Libro key={libro.id} libro={libro} />
        ))}
      </div>
    </section>
  )
}

export default ListadoLibros
