import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Card = ({products}) => {
  return (
    <div className={styles.cardContainer}>
      {" "}
      {/* eslint-disable react/prop-types */}
      {products && products.map((product) => (

        <Link
          to={`/product/${product._id}`}
          key={product._id}
          className={styles.productLink}
        >
          <div className={styles.productCard}>
            <img
              src={product.imageUrl}
              alt="Product"
              className={styles.productImage}
            />
            <p className={styles.productPrice}>Price: $ {product.price}</p>
            <p><FaStar className={styles.starIcon} />{product.rating}</p>
            <p>{product.productName}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
