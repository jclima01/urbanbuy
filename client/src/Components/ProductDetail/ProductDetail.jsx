import React from 'react';
import {Produtcs} from '../../data.js'; 


const ProductDetail = ({ productId }) => {
  const productDetail = Produtcs.find(item => item.id === productId);
  console.log(productDetail)

//   if (!product) {
//     return <p>Producto no encontrado</p>;
//   }

  const { ProductName, description, category, stocks, imageUrl, price, rating } = productDetail;

  return (
    <div>
      <h2>{ProductName}</h2>
      <img src={imageUrl} alt={ProductName} />
      <p>{description}</p>
      <p>Category: {category.join(', ')}</p>
      <p>Stocks: {stocks}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default ProductDetail;
