// const stripe = require("stripe")(
//   "sk_test_51NCdNdL2efsICo3fzbVNZmlNnJaJyRuDxAQrBTJBORiye8bCFNq6PqVwqNAcfnqXgmQ9dwySNJ2L6yQHqz17E2js0059R0fJ9h"
// );
// const endpointSecret =

const { updateOrder } = require("../controllers/WebhookController");


//   "whsec_080e4339ac22924a4100a26a1726c269cf0fdde488cc78c435c33e96e783a08a";
const webhookHandler = async (req, res) => {
  try {
    const event = req.body;

    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        // Lógica para manejar el evento payment_intent.created

        //agregar el adress
        console.log(checkoutSessionCompleted)
        const updatedOrder = updateOrder(checkoutSessionCompleted.id, checkoutSessionCompleted.payment_status)
        res.status(200).json(updatedOrder);
        break;
      case "payment_intent.created":
        const paymentIntentCreated = event.data.object;
        // Lógica para manejar el evento payment_intent.created
        // console.log(paymentIntentCreated);
        res.status(200).json(paymentIntentCreated);
        break;

      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;


        res.status(200).json(paymentIntentSucceeded);
        break;

      case "payment_intent.failed":
        const paymentIntentFailed = event.data.object;
        // Lógica para manejar el evento payment_intent.failed
        // console.log(paymentIntentFailed);
        res.status(200).json(paymentIntentFailed);
        break;

      case "charge.succeeded":
        const chargeSucceeded = event.data.object;
        // Lógica para manejar el evento charge.succeeded
        // console.log(chargeSucceeded);
        res.status(200).json(chargeSucceeded);
        break;

      case "charge.failed":
        const chargeFailed = event.data.object;
        // Lógica para manejar el evento charge.failed
        // console.log(chargeFailed);
        res.status(200).json(chargeFailed);
        break;

      case "customer.created":
        const customerCreated = event.data.object;
        // Lógica para manejar el evento customer.created
        // console.log(customerCreated);
        res.status(200).json(customerCreated);
        break;

      case "customer.updated":
        const customerUpdated = event.data.object;
        // Lógica para manejar el evento customer.updated
        // console.log(customerUpdated);
        res.status(200).json(customerUpdated);
        break;

      case "customer.deleted":
        const customerDeleted = event.data.object;
        // Lógica para manejar el evento customer.deleted
        // console.log(customerDeleted);
        res.status(200).json(customerDeleted);
        break;

      case "subscription.created":
        const subscriptionCreated = event.data.object;
        // Lógica para manejar el evento subscription.created
        // console.log(subscriptionCreated);
        res.status(200).json(subscriptionCreated);
        break;

      case "subscription.updated":
        const subscriptionUpdated = event.data.object;
        // Lógica para manejar el evento subscription.updated
        // console.log(subscriptionUpdated);
        res.status(200).json(subscriptionUpdated);
        break;

      case "subscription.cancelled":
        const subscriptionCancelled = event.data.object;
        // Lógica para manejar el evento subscription.cancelled
        // console.log(subscriptionCancelled);
        res.status(200).json(subscriptionCancelled);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
        res.status(200).end();
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  webhookHandler,
};
