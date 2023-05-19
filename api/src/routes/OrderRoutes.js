const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
} = require("../handlers/OrderHandlers.js");

OrderRouter.get("/", getOrderHandlers);
OrderRouter.post("/", postOrderHandlers);

module.exports = OrderRouter;
