// const stripe = require("stripe")(
//   "sk_test_51NCdNdL2efsICo3fzbVNZmlNnJaJyRuDxAQrBTJBORiye8bCFNq6PqVwqNAcfnqXgmQ9dwySNJ2L6yQHqz17E2js0059R0fJ9h"
// );
// const endpointSecret =
//   "whsec_080e4339ac22924a4100a26a1726c269cf0fdde488cc78c435c33e96e783a08a";
const webhookHandler = async (req, res) => {
  
  try {
    // Verificar la autenticidad del evento utilizando tu clave secreta
    const event = req.body;
   

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        // Then define and call a function to handle the event payment_intent.succeeded
        console.log(paymentIntentSucceeded)
        res.status(200).json(paymentIntentSucceeded);
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  webhookHandler,
};
