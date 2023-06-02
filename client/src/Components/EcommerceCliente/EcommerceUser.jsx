import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';

function EcommerceUser() {
  const filteredProducts = useSelector((state) => state.filteredProducts);

  return (
    <div>
      <h1>Resultados de la búsqueda</h1>
      <Card products={filteredProducts} />
    </div>
  );
}

export default EcommerceUser;
