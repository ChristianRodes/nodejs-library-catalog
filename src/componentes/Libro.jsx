import { Link } from "react-router-dom";
import "./Libro.css";
import sinPortada from "../assets/img/sin_portada.png";

const Libro = ({ datos }) => {
  

  if (!datos) return null;


  const { id, titulo, autor, portada } = datos;

  return (
    <Link to={`/mostrar/${id}`} className="libro__link">
      <article className="libro">
        <img
          className="libro__imagen"
          src={portada || sinPortada}
          alt={`Portada de ${titulo}`}
        />
        <h3 className="libro__titulo">{titulo}</h3>
        <p className="libro__autor">{autor}</p>
      </article>
    </Link>
  );
};

export default Libro;