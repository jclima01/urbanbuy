import React, { useEffect, useRef } from "react";
import style from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getReviews, getClientAdminUsers } from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddToCart from "../EcommerceCliente/AddToCart/AddToCart";
import ProductReview from "../../Components/ProductReview/ProductReview";
import NavEcommerce from "../EcommerceCliente/NavEcommerce";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const reviews = useSelector((state) => state.reviews);
  const users = useSelector((state) => state.clientAdminUsers);
  const clientAdmin = useSelector((state) => state.clientAdmin)



  const sumRatings = reviews.length > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) : 0;
  const averageRatings = reviews.length > 0 ? sumRatings / reviews.length : 0;
  //const comments = reviews.length > 0 ? reviews.map((review) => review.text) : [];

  const comments = reviews.length > 0 ? reviews.map((review) => {
    const user = users.find((user) => user._id === review.user);
    const userName = user ? user.fullName : 'Unknown User';
    return { text: review.text, userName };
  }) : [];


  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productId));
    dispatch(getClientAdminUsers(clientAdmin._id))
    dispatch(getReviews(productId))
  }, [product.stocks]);

  return (
    <>
    <NavEcommerce clientAdmin={clientAdmin}/>
      <div className={style.detailContainer}>
        <div className={style.navButtons}>
          <Link to={`/${clientAdmin.domain}`}>
            <button className={style.button}>go back</button>
          </Link>

          <Link to="/cart">
            <button className={style.button}>go cart</button>
          </Link>
        </div>

        <div className={style.cardContainer}>
          <div>
            <h2 className={style.h2}>{product.productName}</h2>
            <img
              src={product.imageUrl}
              alt={product.productName}
              className={style.img}
            />
            <p>Rating: {averageRatings.toFixed(1)} </p>
            <p>Stock: {product.stocks}</p>
            <p>Price: ${product.price}</p>
            <p>Comments:</p>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  <p>Comment by: {comment.userName}</p>
                  <p>{comment.text}</p>
                </li>

              ))}
            </ul>
          </div>
          <div className={style.descriptionContainer}>
            <p className={style.description}>{product.description}</p>
            <div>
              {product.categories?.map((categorie) => {
                return <div>{categorie.categoryName}</div>;
              })}
            </div>
          </div>

          <AddToCart stock={product.stocks} />
        </div>
        <ProductReview />
      </div>
    </>
  );
};

export default ProductDetail;
