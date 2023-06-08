import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../../../redux/actions";

const PaymentSuccess = ({clientAdmin, user}) => {


  const handleNavigate = (e) => {
    e.preventDefault()
    
    window.close();
  }

  return (
    <>
      <div>Payment Success, now you can close this window</div>
      <button onClick={handleNavigate}>go back</button>
    </>
  );
};

export default PaymentSuccess;
