import React from "react";
import { Products } from "../../data";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { FaStar } from "react-icons/fa";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      {" "}
      {Products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
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