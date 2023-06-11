const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  updateOrderHandlers,
  deleteOrderHandler,
  paymentHandler,
  createOrderHandler,
  getLastOrderFromUserHandler,
  updateOrderHandler,
} = require("../handlers/OrderHandlers.js");
const { processPayment } = require("../controllers/OrderControllers.js");

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/", processPayment);
OrderRouter.put("/:orderId", updateOrderHandlers);
OrderRouter.delete("/:orderId", deleteOrderHandler);
OrderRouter.post("/checkout/create-checkout-session", paymentHandler);
OrderRouter.post("/order/:userId", createOrderHandler);
OrderRouter.get("/order/:userId", getLastOrderFromUserHandler);
OrderRouter.put("/order/:orderId", updateOrderHandler);
module.exports = OrderRouter;
