import React from 'react';
import {Products} from '../../data.js'; 
import style from './ProductDetail.module.css'


const ProductDetail = ({ productId }) => {
  const productDetail = Products.find(item => item.id === productId);
  console.log(productDetail)

//   if (!product) {
//     return <p>Producto no encontrado</p>;
//   }

  const { ProductName, description, category, stocks, imageUrl, price, rating } = productDetail;

  return (
    <div className={style.container}>
      <h2 className={style.h2}>{ProductName}</h2>
      <img src={imageUrl} alt={ProductName}  className={style.img}/>
      <p className={style.description}>{description}</p>
      <p >Category: {category.join(', ')}</p>
      <div className={style.hovers}>
      <p>Stocks: {stocks}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
