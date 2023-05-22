import React, { useState } from 'react';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("Producto agregado al carrito: ", product);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item !== product);
    setCartItems(updatedCartItems);
    console.log("Producto eliminado del carrito: ", product);
  };

  // Función para calcular el total de la compra
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price;
    }
    return total;
  };

  return (
    <div className={`${styles['shopping-cart']} ${styles['mercado-libre']}`}>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <p>Total: {calculateTotal()}</p>
    </div>
  );
}
