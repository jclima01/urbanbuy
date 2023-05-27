const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  
} = require("../handlers/OrderHandlers.js");
const {processPayment} = require("../controllers/OrderControllers.js")

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/payment", processPayment);
module.exports = OrderRouter;
