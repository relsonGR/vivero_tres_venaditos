// pages/api/datos.js
//import datos from './../../pages/api/products/index.json';
// Componente que consume los datos del archivo JSON
import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/products/index.json';

function MiComponente() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(datos.plantas);
  }, []);

  return (
    <div>
      {productos.map(producto => (
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>Precio: {producto.precio}</p>
          <p>Descripción: {producto.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default MiComponente;
