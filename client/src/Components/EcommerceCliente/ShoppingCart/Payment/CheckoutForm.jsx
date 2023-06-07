import React, { useState } from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements, CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import { useDispatch } from 'react-redux'
import { iniciarPago } from '../../../../redux/actions'
import style from './CheckoutForm.module.css'

const stripePromise = loadStripe('pk_test_51NCdNdL2efsICo3fx814ggdVMwnqDX6oAKxnK5yZjzEsrLsJ6U6IXgkwEhTjqNWoJPe9AU6IwzhE2N4ciN1flTW600F9Ebkw9o')

const CheckoutForm = () => {
  const stripe=useStripe();  
  const elements = useElements();
  const dispatch =  useDispatch();
  const [loading,setLoading] = useState(false);
  const [saveId, setSaveId] = useState("");
  const data = window.localStorage.getItem("cart")
  const productos = JSON.parse(data);
  const primerProducto = productos[0];

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const { error,paymentMethod } = await  stripe.createPaymentMethod({
          type: 'card',
          card: elements.getElement(CardElement),
      });
      setLoading(true)
   
      if(!error){
        {/* const { id } = paymentMethod;
        const body = {
          title: primerProducto?.productName,
          content: primerProducto?.description,
          price: primerProducto?.price,
          status: "Compra Exitosa",
          order: id
        }*/}
       productos.map(product => {
          const { productName, description, price } = product
          const { id } = paymentMethod
          const body = {
            title: productName,
            content: description,
            price: price,
            status: "Compra Exitosa",
            order: id,
          }
         setSaveId(id)
       try {
         dispatch(iniciarPago(body))
         return {success : true}
       } catch (error) {
         return { success : false, error: error.message }
       }
        })
       elements.getElement(CardElement).clear();
       setLoading(false);
      }
  }
    
  return ( 
        <div className={style.checkForm}>
          <p>Ingrese los datos de su tarjeta:</p>  
          <CardElement/>
          <button onClick={handleSubmit}>PAGAR</button>
        </div>
  )
};

export default CheckoutForm;
