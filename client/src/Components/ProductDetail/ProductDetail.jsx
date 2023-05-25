import React, { useEffect } from "react";
import style from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddToCart from "../EcommerceCliente/AddToCart/AddToCartButton";
import RemoveFromCartButton from "../EcommerceCliente/RemoveFromCartButton/RemoveFromCartButton";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);


  console.log(cart);
  return (
    <div className={style.container}>
      <h2 className={style.h2}>{product.productName}</h2>
      <img
        src={product.imageUrl}
        alt={product.productName}
        className={style.img}
      />
      <p className={style.description}>{product.description}</p>
      {/* <p>Category: {product.categories.join(", ")}</p> */}
      <div className={style.hovers}>
        <p>Stock: {product.stocks}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
      </div>
      <Link to="/homecliente">
        <button className={style.button}>go back</button>
      </Link>
      <Link to="/cart">
        <button className={style.button}>go cart</button>
      </Link>
      <AddToCart product={product} />
      <RemoveFromCartButton product={product} />
      <ul>{cart?.map((product) => {
        <li>
          <h5>{product.productName}</h5>
          <h5>{product.quantity}</h5>
        </li>
      })}</ul>
    </div>
  );
};

export default ProductDetail;
