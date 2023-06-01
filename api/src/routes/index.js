const { Router } = require("express");
const express = require('express');
// Importar todos los routers;
const stripe = require("stripe")(
    "sk_test_51NCdNdL2efsICo3fzbVNZmlNnJaJyRuDxAQrBTJBORiye8bCFNq6PqVwqNAcfnqXgmQ9dwySNJ2L6yQHqz17E2js0059R0fJ9h"
  );
  
const ProductRouter = require("./ProductsRoutes.js");
const UsersRouter = require("./UserRoutes.js");
const AdminRouter = require("./AdminRoutes.js");
const ClientAdminRouter = require("./ClientAdminRoutes.js");
const CategoryRoutes = require("./CategoryRoutes.js");
const ReviewRouter = require("./ReviewRoutes.js");
const OrderRouter = require("./OrderRoutes.js");
const WebhookRouter = require("./WebhookRoutes.js");

const mainRouter = Router();
const endpointSecret = "whsec_080e4339ac22924a4100a26a1726c269cf0fdde488cc78c435c33e96e783a08a";

// Configurar los routers

mainRouter.use("/products", ProductRouter);
mainRouter.use("/users", UsersRouter); // ver este Handler, se repite en la ruta /user  !!
mainRouter.use("/admin", AdminRouter);
mainRouter.use("/clientAdmin", ClientAdminRouter);
mainRouter.use("/category", CategoryRoutes);
mainRouter.use("/reviews", ReviewRouter);
mainRouter.use("/orders", OrderRouter);
mainRouter.use("/webhook", WebhookRouter);

// mainRouter.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
//   const sig = request.headers['stripe-signature'];

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (err) {
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }

//   // Handle the event
//   switch (event.type) {
//     case 'payment_intent.succeeded':
//       const paymentIntentSucceeded = event.data.object;
//       // Then define and call a function to handle the event payment_intent.succeeded
//       break;
//     // ... handle other event types
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   // Return a 200 response to acknowledge receipt of the event
//   response.send();
// });


module.exports = mainRouter;
