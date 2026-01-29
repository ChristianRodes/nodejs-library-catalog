import { BrowserRouter } from "react-router-dom";

// IMPORTANTE: Importamos el Proveedor que hemos creado
import ProveedorLibros from "./contextos/ProveedorLibros";

import Cabecera from "./componentes/estructura/Cabecera";
import Navegacion from "./componentes/estructura/Navegacion";
import PiePagina from "./componentes/estructura/PiePagina";
import Rutas from "./Rutas";

function App() {
  return (
    <BrowserRouter>
      {/* Envolvemos toda la aplicación con el Proveedor.
        De esta forma, cualquier ruta dentro de <Rutas /> 
        podrá usar el contexto de los libros.
      */}
      <ProveedorLibros>
        <Cabecera />
        <Navegacion />
        <Rutas />
        <PiePagina />
      </ProveedorLibros>
    </BrowserRouter>
  );
}

export default App;