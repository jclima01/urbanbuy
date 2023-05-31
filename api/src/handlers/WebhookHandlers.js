const stripe = require("stripe")(
    "sk_test_51NCdNdL2efsICo3fzbVNZmlNnJaJyRuDxAQrBTJBORiye8bCFNq6PqVwqNAcfnqXgmQ9dwySNJ2L6yQHqz17E2js0059R0fJ9h"
  );
  
const webhookHandler = async (req, res) => {
    const event = req.body;

    try {
      // Verificar la autenticidad del evento utilizando tu clave secreta
      const signature = req.headers['stripe-signature'];
      const eventVerified = stripe.webhooks.constructEvent(req.rawBody, signature, 'whsec_080e4339ac22924a4100a26a1726c269cf0fdde488cc78c435c33e96e783a08a');
  
      // Procesar el evento dependiendo de su tipo
      if (eventVerified.type === 'checkout.session.completed') {
        const session = eventVerified.data.object;
  
        // Aquí puedes acceder a los detalles del pago exitoso
        const paymentIntentId = session.payment_intent;
        const paymentAmount = session.amount_total / 100;
        const paymentCurrency = session.currency;
  
        // Realizar acciones adicionales según tus necesidades
        console.log(paymentIntentId)
        console.log(paymentAmount)
        console.log(paymentCurrency)
        res.sendStatus(200);
      }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  webhookHandler,
};
