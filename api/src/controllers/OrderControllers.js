const Order = require("../models/Order.js");

const postOrder = async (cart, userId) => {
  try {
    const newOrder = new Order({ cart, user: userId });

    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getOrdersByUser = async (userId) => {
  try {
    const orders = await Order.find({ user: userId });
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  postOrder,
  getOrdersByUser,
};
