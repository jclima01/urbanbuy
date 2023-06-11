const { updateOrder } = require("../controllers/WebhookController");

const webhookHandler = async (req, res) => {
  try {
    const event = req.body;

    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        console.log(checkoutSessionCompleted);
        //agregar el adress
        const updatedOrder = updateOrder(
          checkoutSessionCompleted.id,
          checkoutSessionCompleted.payment_status,
          checkoutSessionCompleted.customer_details.address
        );
        res.status(200).json(updatedOrder);
        break;
      case "payment_intent.created":
        const paymentIntentCreated = event.data.object;
        // Lógica para manejar el evento payment_intent.created
        res.status(200).json(paymentIntentCreated);
        break;

      case "payment_intent.succeeded":
        const paymentIntentSucceeded = event.data.object;

        res.status(200).json(paymentIntentSucceeded);
        break;

      case "payment_intent.failed":
        const paymentIntentFailed = event.data.object;
        // Lógica para manejar el evento payment_intent.failed
        res.status(200).json(paymentIntentFailed);
        break;

      case "charge.succeeded":
        const chargeSucceeded = event.data.object;
        // Lógica para manejar el evento charge.succeeded
        res.status(200).json(chargeSucceeded);
        break;

      case "charge.failed":
        const chargeFailed = event.data.object;
        // Lógica para manejar el evento charge.failed
        res.status(200).json(chargeFailed);
        break;

      case "customer.created":
        const customerCreated = event.data.object;
        // Lógica para manejar el evento customer.created
        res.status(200).json(customerCreated);
        break;

      case "customer.updated":
        const customerUpdated = event.data.object;
        // Lógica para manejar el evento customer.updated
        res.status(200).json(customerUpdated);
        break;

      case "customer.deleted":
        const customerDeleted = event.data.object;
        // Lógica para manejar el evento customer.deleted
        res.status(200).json(customerDeleted);
        break;

      case "subscription.created":
        const subscriptionCreated = event.data.object;
        // Lógica para manejar el evento subscription.created
        res.status(200).json(subscriptionCreated);
        break;

      case "subscription.updated":
        const subscriptionUpdated = event.data.object;
        // Lógica para manejar el evento subscription.updated
        res.status(200).json(subscriptionUpdated);
        break;

      case "subscription.cancelled":
        const subscriptionCancelled = event.data.object;
        // Lógica para manejar el evento subscription.cancelled
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
