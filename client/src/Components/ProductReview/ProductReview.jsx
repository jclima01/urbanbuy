import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setReview } from '../../redux/actions';



const dispatch = useDispatch();
const navigate = useNavigate();

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
   
  const productId = useSelector((state) => state.product)._id;
  const userId  = useSelector((state) => state.clientAdmin)._id; // cambiar clientAdmin por user cuando el componente se implente desde la page del user.


  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(setReview(productId, userId, comment, rating)).finally(() => {
      navigate("/product");
    });
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    console.log('UserId:', userId);
    console.log('ProductId:', productId);
    // Reiniciamos los campos después de enviar la reseña
    setRating(0);
    setComment('');
  };

  return (
    <div>
      <h2>Deja una reseña del producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Calificación:</label>
          <select value={rating} onChange={handleRatingChange}>
            <option value={0}>Selecciona una calificación</option>
            <option value={1}>1 estrella</option>
            <option value={2}>2 estrellas</option>
            <option value={3}>3 estrellas</option>
            <option value={4}>4 estrellas</option>
            <option value={5}>5 estrellas</option>
          </select>
        </div>
        <div>
          <label>Comentario:</label>
          <textarea value={comment} onChange={handleCommentChange} rows={4} />
        </div>
        <button type="submit">Enviar reseña</button>
      </form>
    </div>
  );
};

export default ProductReview;
