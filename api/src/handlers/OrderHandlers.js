const {postOrder,getOrdersByUser} = require("../controllers/OrderControllers.js");

const getOrderHandlers = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await getOrdersByUser(userId)
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postOrderHandlers = async (req, res) => {
  try {
    const { cart, userId } = req.body;
    const newOrder = await postOrder(cart, userId);
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getOrderHandlers,
  postOrderHandlers,
};
