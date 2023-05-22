import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";

const Card = ({products}) => {
  return (
    <div className={styles.cardContainer}>
      {" "}
      {products.map((product) => (
        <Link
          to={`/product/${product._id}`}
          key={product._id}
          className={styles.productLink}
        >
          {" "}
          <div className={styles.productCard}>
            {" "}
            <img
              src={product.imageUrl}
              alt="Product"
              className={styles.productImage}
            />{" "}
            <p className={styles.productPrice}>Price: $ {product.price}</p>{" "}
            <p className={styles.productRating}>
              <FaStar className={styles.starIcon} /> {product.rating}
            </p>{" "}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
