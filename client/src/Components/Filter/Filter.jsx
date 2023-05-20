import React, { useState } from "react";
import style from './Filter.module.css'

const Filter = () => {
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  const [rating, setRating] = useState("");

  const [ordenamiento, setOrdenamiento] = useState("az");

  const categorias = ["Categoría 1", "Categoría 2", "Categoría 3"]; // Opciones de categorías

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleOrdenamientoChange = (event) => {
    setOrdenamiento(event.target.value);
  };

  const datos = [
    {
      id: 1,
      nombre: "Elemento 1",
      categoria: "Categoría 1",
      precio: 10,
      rating: 4,
    },
    {
      id: 2,
      nombre: "Elemento 2",
      categoria: "Categoría 2",
      precio: 20,
      rating: 3,
    },
    {
      id: 3,
      nombre: "Elemento 3",
      categoria: "Categoría 1",
      precio: 15,
      rating: 5,
    },
  ];

  let elementosFiltrados = datos.filter((elemento) => {
    if (categoria && elemento.categoria !== categoria) {
      return false;
    }

    if (precio && elemento.rating < precio) {
      return false;
    }

    if (rating && elemento.rating > rating) {
      return false;
    }

    return true;
  });

  if (ordenamiento === "az") {
    elementosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (ordenamiento === "za") {
    elementosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
  } else if (precio === "precio-asc") {
    elementosFiltrados.sort((a, b) => a.precio - b.precio);
  } else if (precio === "precio-desc") {
    elementosFiltrados.sort((a, b) => b.precio - a.precio);
  } else if (rating === "rating-asc") {
    elementosFiltrados.sort((a, b) => a.rating - b.rating);
  } else if (rating === "rating-desc") {
    elementosFiltrados.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div style={{width:'20vw', marginLeft:'30px'}}>
   
      <div className="form-group">
        <label htmlFor="categoria">Categoría:</label>
        <select
          className="form-control"
          id="categoria"
          value={categoria}
          onChange={handleCategoriaChange}
        >
          <option value="">Todos</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ordenamiento">Ordenamiento:</label>
        <select
          className="form-control"
          id="ordenamiento"
          value={precio}
          onChange={handleOrdenamientoChange}
        >
          <option value="precio-asc">Precio (Menor a mayor)</option>
          <option value="precio-desc">Precio (Mayor a menor)</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="ordenamiento">Ordenamiento:</label>
        <select
          className="form-control"
          id="ordenamiento"
          value={precio}
          onChange={handleOrdenamientoChange}
        >
          <option value="rating">Rating (Menor a mayor)</option>
          <option value="rating-desc">Rating (Mayor a menor)</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ordenamiento">Ordenamiento:</label>
        <select
          className="form-control"
          id="ordenamiento"
          value={ordenamiento}
          onChange={handleOrdenamientoChange}
        >
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
       
        </select>
      </div>

      
    </div>
  );
};

export default Filter;
