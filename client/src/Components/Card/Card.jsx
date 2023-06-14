import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const Card = ({ products }) => {
  const cardStyle = useSelector((state) => state.cardStyle);
  return (
    <div className={`${styles.cardContainer} ${styles[cardStyle]}`}>
      {products &&
        products.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product._id}
            className={`${styles.productLink} ${styles[cardStyle]}`}
          >
            <div className={`${styles.productCard} ${styles[cardStyle.productCard]}`}>
              <img
                src={product.imageUrl}
                alt="Product"
                className={styles.productImage}
              />
              <p className={`${styles.productPrice} ${styles[cardStyle]}`}>Price: $ {product.price}</p>
              <p><FaStar className={`${styles.starIcon} ${styles[cardStyle]}`}/>{product.rating}</p>
              <div className={styles.productDescription}> {/* Contenedor del texto */}
                <p>{product.productName}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Card;
