import { Routes, Route } from "react-router-dom"

import Inicio from "./componentes/paginas/Inicio"
import Crear from "./componentes/paginas/Crear"
import Buscar from "./componentes/paginas/Buscar"
import Mostrar from "./componentes/paginas/Mostrar"
import Error from "./componentes/paginas/Error"

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/crear" element={<Crear />} />
      <Route path="/buscar" element={<Buscar />} />
      <Route path="/mostrar/:id" element={<Mostrar />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default Rutas
