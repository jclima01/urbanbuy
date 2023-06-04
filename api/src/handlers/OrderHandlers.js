const {
  postOrder,
  getOrdersByUser,
  createCheckoutSession,
  createOrder,
} = require("../controllers/OrderControllers.js");

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
    console.log("params:" + userId)
    const { fullName, email, cart, total } = req.body;
    const order = await createOrder(fullName, email, cart, total, userId);
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
};
