const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  paymentHandler,
  createOrderHandler
  
} = require("../handlers/OrderHandlers.js");
const {processPayment} = require("../controllers/OrderControllers.js")

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/checkout/create-checkout-session", paymentHandler);
<<<<<<< HEAD
OrderRouter.post("/order/:userId", createOrderHandler);
=======
OrderRouter.post("/order", createOrderHandler);
>>>>>>> c0761a1f3276e8f8b62f1cc5233467c5b97bcf6b
module.exports = OrderRouter;
