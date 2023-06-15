import React from 'react'
import paymentCancelled from "../../../../Img/paymentCancelled.png";
import style from "./PaymentCanceled.module.css";

const PaymentCanceled = () => {

  const handleNavigate = (e) => {
    e.preventDefault()
    
    window.close();
  }
  return (
    <div className= {style.container}>
    
   <img className={style.img} src={paymentCancelled} alt=""/>
  <h2 className={style.h2} >Payment Canceled, now you can close this window!!</h2> 
    <button className={style.button} onClick={handleNavigate}>Close</button>
  </div>
  )
}

export default PaymentCanceled