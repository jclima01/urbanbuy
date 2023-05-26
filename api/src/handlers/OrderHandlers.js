const {
  postOrder,
  getOrdersByUser,
  processPayment,
} = require("../controllers/OrderControllers.js");

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
    const { amount, currency, token  } = req.body;
    const result = await processPayment(amount, currency, token );

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al procesar el pago.' });
  }
};

module.exports = {
  getOrderHandlers,
  postOrderHandlers,
  paymentHandler,
};
