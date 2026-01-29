import React, { createContext, useState, useEffect } from "react";
import coleccionOriginal from "../assets/bbdd/biblioteca.json";

// ¡ESTA LÍNEA ES CRUCIAL! Debe tener el export
export const ContextoLibros = createContext();

const ProveedorLibros = ({ children }) => {
  const [biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
    setBiblioteca(coleccionOriginal.libros);
  }, []);

  const eliminarLibro = (id) => {
    setBiblioteca(biblioteca.filter((libro) => libro.id !== id));
  };

  return (
    <ContextoLibros.Provider value={{ biblioteca, eliminarLibro }}>
      {children}
    </ContextoLibros.Provider>
  );
};

export default ProveedorLibros;