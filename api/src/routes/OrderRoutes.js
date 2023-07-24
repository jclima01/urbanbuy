const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  paymentHandler,
  createOrderHandler,
  getLastOrderFromUserHandler,
  updateOrderHandler,
  updateStatusOrderHandler,
} = require("../handlers/OrderHandlers.js");
const { processPayment } = require("../controllers/OrderControllers.js");

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/checkout/create-checkout-session", paymentHandler);
OrderRouter.post("/order/:userId", createOrderHandler);
OrderRouter.get("/order/:userId", getLastOrderFromUserHandler);
OrderRouter.put("/order/:orderId", updateOrderHandler);
OrderRouter.put("/orders/:orderId", updateStatusOrderHandler);
module.exports = OrderRouter;
