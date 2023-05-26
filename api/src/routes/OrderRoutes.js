const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  paymentHandler,
} = require("../handlers/OrderHandlers.js");

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/payment", paymentHandler)
module.exports = OrderRouter;
