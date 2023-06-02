const Order = require("../models/Order.js");

const updateOrder = async (sessionId, paymentStatus) => {
  try {
    const order = await Order.findOne({ sessionId });
    order.status = paymentStatus === "paid" ? "sending products" : "pending";
    order.payment = paymentStatus === "paid" ? true : false;
    //agregar el adress
    // order.adress = customerDetails;
    const savedOrder = await order.save();
    console.log(savedOrder);
    return savedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  updateOrder,
};
