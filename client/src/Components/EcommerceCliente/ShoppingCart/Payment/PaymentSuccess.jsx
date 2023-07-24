import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../../redux/actions";
import paymentSuccess from "../../../../Img/paymentSuccess.png";
import style from "./PaymentSuccess.module.css";

const PaymentSuccess = ({clientAdmin, user}) => {


  const handleNavigate = (e) => {
    e.preventDefault()
    
    window.close();
  }

  return (
    <div className= {style.container}>
      {/* <h2>Successfull Payment, now you can close this window</h2> */}
     <img className={style.img} src={paymentSuccess} alt=""/>

      <button className={style.button} onClick={handleNavigate}>Go Back</button>
    </div>
  );
};

export default PaymentSuccess;
