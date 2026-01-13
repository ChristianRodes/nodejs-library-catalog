import { BrowserRouter } from "react-router-dom"

import Cabecera from "./componentes/estructura/Cabecera"
import Navegacion from "./componentes/estructura/Navegacion"
import PiePagina from "./componentes/estructura/PiePagina"
import Rutas from "./Rutas"

function App() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Navegacion />
      <Rutas />
      <PiePagina />
    </BrowserRouter>
  )
}

export default App
