import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { iniciarPago } from "../../../../redux/actions";

const stripePromise = loadStripe(
  "pk_test_51NCdNdL2efsICo3fx814ggdVMwnqDX6oAKxnK5yZjzEsrLsJ6U6IXgkwEhTjqNWoJPe9AU6IwzhE2N4ciN1flTW600F9Ebkw9o"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [saveId, setSaveId] = useState("");
  const cart = JSON.parse(localStorage.getItem("cart"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
      const { id } = paymentMethod;
      const body = {
        title: cart.reduce(
          (count, product) => (count += product.productName + " "),
          ""
        ),
        content: cart.reduce(
          (count, product) =>
            (count += product.productName + " " + "qty:" + product.quantity + " "),
          ""
        ),
        price: cart.reduce(
          (count, product) => (count += product.quantity * product.price),
          0
        ),
        status: "Compra Exitosa",
        order: id,
      };
      console.log("response", body);
      setSaveId(id);
      try {
        dispatch(iniciarPago(cart));

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };
  return (
    <div>
      <CardElement />
      <button onClick={handleSubmit}>PAGAR</button>
    </div>
  );
};

export default CheckoutForm;
