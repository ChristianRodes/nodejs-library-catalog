import React, { useState, useEffect, Fragment } from "react";
import ListadoResumen from "./ListadoResumen";
import { Link } from "react-router-dom";
import Libro from "./Libro.jsx";
import bibliotecaJSON from "../assets/bbdd/biblioteca.json"; // Importamos el JSON
import "./ListadoLibros.css";

const ListadoLibros = () => {
  // 1. Estados del componente [cite: 10, 176]
  const [biblioteca, setBiblioteca] = useState([]); // Estado para la lista de libros [cite: 137]
  const [cantidad, setCantidad] = useState(0);      // Estado para el contador [cite: 177]

  // 2. Funciones para manejar el estado [cite: 138]
  const inicializarBiblioteca = () => {
    setBiblioteca(bibliotecaJSON.libros); // Carga los libros del JSON al estado [cite: 62, 126]
  };

  const borrarBiblioteca = () => {
    setBiblioteca([]); // Vacía el array del estado [cite: 87]
  };

  const inventarLibro = () => {
    return {
      id: crypto.randomUUID(),
      titulo: "Yo, robot",
      autor: "Isaac Asimov",
      portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
      completado: false,
      sinopsis: "Obra visionaria de Isaac Asimov..."
    };
  };

  const insertarLibro = () => {
    const nuevoLibro = inventarLibro();
    setBiblioteca([...biblioteca, nuevoLibro]); // Usa spread operator para añadir 
  };

  // 3. Ciclo de vida (Efectos) [cite: 115]
  
  // Carga inicial al montar el componente [cite: 123, 128]
  useEffect(() => {
    inicializarBiblioteca(); 
  }, []);

// Se crea un nuevo useEffect incluyendo la dependencia y el efecto secundario [cite: 195]
useEffect(() => {
  setCantidad(biblioteca.length); // Actualiza el estado con la longitud del array [cite: 188]
  console.log(`La biblioteca contiene ${biblioteca.length} libro(s).`); 
}, [biblioteca]); 

  return (
    <Fragment>
      <section className="listado-libros">
        <h2 className="listado-libros__titulo">Listado de libros</h2>

        {/* Contenedor de botones [cite: 63, 147] */}
        <div className="listado-libros__acciones" style={{ marginBottom: '20px' }}>
          <button className="boton" onClick={() => inicializarBiblioteca()}>Cargar libros</button>
          <button className="boton" onClick={() => borrarBiblioteca()}>Borrar biblioteca</button>
          <button className="boton" onClick={() => insertarLibro()}>Insertar libro</button>
        </div>

        {/* Resumen de cantidad [cite: 181] */}
        <div className="listado-libros__resumen">
          <ListadoResumen cantidad={cantidad} />
        </div>
        
        {/* Renderizado condicional del listado [cite: 36, 52] */}
        <div className="listado-libros__grid">
          {Array.isArray(biblioteca) && biblioteca.length > 0
            ? biblioteca.map((libro) => (
                <Libro key={libro.id} libro={libro} />
              ))
            : <p>No se han encontrado libros.</p>
          }
        </div>
      </section>
    </Fragment>
  );
};

export default ListadoLibros;