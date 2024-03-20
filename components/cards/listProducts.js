// pages/api/datos.js
//import datos from './../../pages/api/products/index.json';
// Componente que consume los datos del archivo JSON
import React, { useState, useEffect } from 'react';
import datos from './../../pages/api/products/index.json';
import ProductCards from './productsCard';
import { Container, Grid } from '@mui/material';

function MiComponente() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(datos.plantas);
  }, []);

  return (
    <div>

      <Grid container spacing={2}>
        {productos.map((producto) => (
          <Grid  item xs={12} sm={6} md={4} key={producto.id}>
            <ProductCards products={producto} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MiComponente;
