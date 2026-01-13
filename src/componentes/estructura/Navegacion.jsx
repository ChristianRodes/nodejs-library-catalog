import { NavLink } from "react-router-dom"
import "./Navegacion.css"

const Navegacion = () => {
  return (
    <nav className="navegacion">
      <ul className="navegacion__lista">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/crear">Crear libro</NavLink>
        </li>
        <li>
          <NavLink to="/buscar">Buscar libros</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navegacion
