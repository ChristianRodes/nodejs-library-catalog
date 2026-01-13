import sinPortada from "../assets/img/sin_portada.png";

const Libro = ({ libro }) => {
  const {
    id,
    titulo = "No se ha especificado título",
    autor = "No se ha especificado autor",
    portada
  } = libro;

  return (
    <article id={id}>
      <img
        src={portada ? portada : sinPortada}
        alt={`Portada de ${titulo}`}
        width="150"
        height="225"
      />
      <h3>{titulo}</h3>
      <p>{autor}</p>
    </article>
  );
};

export default Libro;
