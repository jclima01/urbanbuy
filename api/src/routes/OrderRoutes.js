const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  updateOrderHandlers,
  deleteOrderHandler
} = require("../handlers/OrderHandlers.js");
const {processPayment} = require("../controllers/OrderControllers.js")

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/", processPayment);
OrderRouter.put("/:orderId", updateOrderHandlers);
OrderRouter.delete("/:orderId", deleteOrderHandler);
module.exports = OrderRouter;
