const {
  postOrder,
  getOrdersByUser,
  createCheckoutSession,
  createOrder,
  updateOrder,
  removeProductFormCart,
  reduceQuantity,
  increaseQuantity,
} = require("../controllers/OrderControllers.js");
const { getLastOrderFromUser } = require("../controllers/UserControllers.js");

const Order = require("../models/Order.js");

const getOrderHandlers = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await getOrdersByUser(userId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postOrderHandlers = async (req, res) => {
  try {
    const { userId } = req.params;
    const { fullName, status, payment, email, cart, total, adress } = req.body;
    const newOrder = await postOrder(
      fullName,
      status,
      payment,
      email,
      cart,
      total,
      adress,
      userId
    );
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const paymentHandler = async (req, res) => {
  try {
    const { cart, userId } = req.body;
    const session = await createCheckoutSession(cart, userId);
    res.status(200).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrderHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("params:" + userId);
    const { productId, quantity, fullName, email } = req.body;
    const order = await createOrder(
      productId,
      quantity,
      fullName,
      email,
      userId
    );
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateOrderHandler = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { productId, quantity, increase, reduce } = req.body;
    let order;
    console.log("quantity: " + quantity);
    console.log("increase: " + increase);
    console.log("reduce: " + reduce);
    if (quantity) {
      order = await updateOrder(orderId, productId, quantity);
      console.log(order);
    }
    if (reduce) {
      order = await reduceQuantity(orderId, productId);
      console.log(order);
    }
    if (increase) {
      order = await increaseQuantity(orderId, productId);
      console.log(order);
    }
    if (!quantity && !reduce && !increase) {
      order = await removeProductFormCart(orderId, productId);
      console.log("productId: " + productId);
      console.log(order);
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getLastOrderFromUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const order = await getLastOrderFromUser(userId);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOrderHandlers,
  postOrderHandlers,
  paymentHandler,
  createOrderHandler,
  getLastOrderFromUserHandler,
  updateOrderHandler,
};
