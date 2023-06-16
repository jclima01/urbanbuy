import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setReview } from "../../redux/actions";
import style from "./ProductReview.module.css";

const ProductReview = () => {
  //Agregar validaciones!!!
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientAdmin = useSelector((state) => state.clientAdmin);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = useSelector((state) => state.product)._id;
  const userId = useSelector((state) => state.user)._id;

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating === 0 || comment === "") {
      alert(
        "Por favor, selecciona una calificación y deja un comentario antes de enviar la reseña."
      );
      return;
    }
    dispatch(setReview(productId, userId, comment, rating)).finally(() => {
      navigate(`/${clientAdmin.domain}`);
    });
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    console.log("UserId:", userId);
    console.log("ProductId:", productId);
    // Reiniciamos los campos después de enviar la reseña
    setRating(0);
    setComment("");
  };

  return (
    <div className={style.formReview}>
      <h2>Deja una reseña del producto</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.divCal}>
          <label>Calificación:</label>
          <select
            className={style.selectReview}
            value={rating}
            onChange={handleRatingChange}
          >
            <option className={style.optionOne} value={0}>
              Selecciona una calificación
            </option>
            <option value={1}>★ </option>
            <option value={2}>★ ★</option>
            <option value={3}>★ ★ ★</option>
            <option value={4}>★ ★ ★ ★</option>
            <option value={5}>★ ★ ★ ★ ★</option>
          </select>
        </div>
        <div className={style.divCal}>
          <label>Comentario:</label>
          <textarea
            className={style.textareaReview}
            value={comment}
            onChange={handleCommentChange}
            rows={4}
          />
        </div>
        <button className={style.btnReview} type="submit">
          Enviar reseña
        </button>
      </form>
    </div>
  );
};

export default ProductReview;
