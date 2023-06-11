const {
  postOrder,
  getOrdersByUser,
  createCheckoutSession,
  createOrder,
  updateOrder,
  removeProductFormCart,
  reduceQuantity,
  increaseQuantity,
  ordersByClient,
  updateStatusOrder
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
    const { orderId } = req.body;
    const session = await createCheckoutSession(orderId);
    res.status(200).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createOrderHandler = async (req, res) => {
  try {
    const { userId } = req.params;
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
    let result;

    if (quantity) {
      result = await updateOrder(orderId, productId, quantity);
    }
    if (reduce) {
      result = await reduceQuantity(orderId, productId);
    }
    if (increase) {
      result = await increaseQuantity(orderId, productId);
    }
    if (!quantity && !reduce && !increase) {
      result = await removeProductFormCart(orderId, productId);
    }

    res.status(200).json(result);
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

const updateStatusOrderHandler = async (req, res) => {
try {
  const { orderId } = req.params;
const {status, clientId} = req.body;

const updateOrder = await updateStatusOrder(orderId, status, clientId)
res.status(200).json(updateOrder);


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
  updateStatusOrderHandler
};
