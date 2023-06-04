const {
  postOrder,
  getOrdersByUser,
  updateOrder,
  
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

const updateOrderHandlers = async (req, res) => {
  try {
    const {orderId} = req.params;
    const {status, adress} = req.body;

    const updatedOrder= await updateOrder(orderId, status, adress);
    res.status(200).json(updatedOrder);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOrderHandlers,
  postOrderHandlers,
  updateOrderHandlers,
};
