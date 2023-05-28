import CheckoutForm from "./CheckoutForm";
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import "../Payment/payment.module.css";

const stripePromise = loadStripe('pk_test_51NCdNdL2efsICo3fx814ggdVMwnqDX6oAKxnK5yZjzEsrLsJ6U6IXgkwEhTjqNWoJPe9AU6IwzhE2N4ciN1flTW600F9Ebkw9o')
const Payment = () => {





  return (
    <div><Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
  </div>
  )
}

export default Payment;