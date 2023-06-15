import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";


/* eslint-disable react/prop-types */

const Card = ({products}) => {
  const clientAdmin = useSelector((state) => state.clientAdmin)
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`${styles.cardContainer} ${styles[theme]}`}>
      {" "}
      {/* eslint-disable react/prop-types */}
      {products && products.map((product) => (
        <Link
          to={`/product/${product._id}`}
          key={product._id}
          className={`${styles.productLink} ${styles[theme]}`}
        >
          <div className={`${styles.productCard} ${styles[theme.productCard]}`}>
            <img
              src={product.imageUrl}
              alt="Product"
              className={styles.productImage}
            />
            <p className={`${styles.productPrice} ${styles[theme]}`}>Price: $ {product.price}</p>
            <p><FaStar className={`${styles.starIcon} ${styles[theme]}`}/>{product.rating}</p>
            <p>{product.productName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
