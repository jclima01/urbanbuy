const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  paymentHandler
  
} = require("../handlers/OrderHandlers.js");
const {processPayment} = require("../controllers/OrderControllers.js")

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/checkout/create-checkout-session", paymentHandler);
module.exports = OrderRouter;
