import biblioteca from "../assets/bbdd/biblioteca.json"
import Libro from "./Libro"

const ListadoLibros = () => {
  const { libros } = biblioteca

  if (!Array.isArray(libros) || libros.length === 0) {
    return <p>No se han encontrado libros.</p>
  }

  return (
    <section>
      <h2>Listado de libros</h2>
      {libros.map((libro) => (
        <Libro key={libro.id} libro={libro} />
      ))}
    </section>
  )
}

export default ListadoLibros
