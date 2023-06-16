import React, { useEffect, useRef } from "react";
import style from "./ProductDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  getReviews,
  getClientAdminUsers,
} from "../../redux/actions/index.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddToCart from "../EcommerceCliente/AddToCart/AddToCart";
import ProductReview from "../../Components/ProductReview/ProductReview";
import NavEcommerce from "../EcommerceCliente/NavEcommerce";
import { TfiBackLeft } from "react-icons/tfi";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const reviews = useSelector((state) => state.reviews);
  const users = useSelector((state) => state.clientAdminUsers);
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const theme = useSelector((state) => state.theme);

  const sumRatings =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0)
      : 0;
  const averageRatings = reviews.length > 0 ? sumRatings / reviews.length : 0;
  //const comments = reviews.length > 0 ? reviews.map((review) => review.text) : [];

  const comments =
    reviews.length > 0
      ? reviews.map((review) => {
          const user = users.find((user) => user._id === review.user);
          const userName = user ? user.fullName : "Unknown User";
          return { text: review.text, userName };
        })
      : [];

  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productId));
    dispatch(getClientAdminUsers(clientAdmin._id));
    dispatch(getReviews(productId));
  }, [product.stocks]);

  return (
    <>
      <NavEcommerce clientAdmin={clientAdmin} />
      <div className={style.detailContainer}>
        <div className={style.cardDetail}>
          <div className={style.containerDetails}>
            <Link className={style.Link} to={`/${clientAdmin.domain}`}>
              <div className={style.backarrow}>
                <TfiBackLeft size={30} />
                <strong>Back </strong>
              </div>
            </Link>

            <div className={style.imageDetail}>
              <img
                src={product.imageUrl}
                alt={product.productName}
                className={style.image}
              />
            </div>

            <div className={style.descriptionContainer}>
              <div className={style.containertext}>
                <h1 className={style.hproductname}>{product.productName}</h1>
                <div className={style.description}>
                  <p>{product.description}</p>
                </div>

                <div className={style.detailsproductsall}>
                  <p className={`${style.pricedetail} ${style[theme]}`}>
                    {" "}
                    ${product.price}
                  </p>
                  <p>
                    {" "}
                    <strong>Stocks: </strong> {product.stocks}
                  </p>
                  <p>
                    <strong>Rating: </strong> {averageRatings.toFixed(1)}{" "}
                  </p>
                </div>
              </div>

              <div className={style.categoryRowContainer}>
                <div className="">
                  <strong>Categories</strong>
                  {product.categories?.map((categorie) => {
                    return (
                      <div className={style.categoryRow}>
                        {categorie.categoryName}
                      </div>
                    );
                  })}
                </div>

                <div className="">
                  <AddToCart stock={product.stocks} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className={style.hrdivisor} />
        <ProductReview />
        {/* <div className="">
              <h2 className={style.h2}>{product.productName}</h2>

                              
             
              <p>Comments:</p>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>
                    <p>Comment by: {comment.userName}</p>
                    <p>{comment.text}</p>
                  </li>
                ))}
              </ul>
            </div> */}
      </div>
    </>
  );
};

export default ProductDetail;
