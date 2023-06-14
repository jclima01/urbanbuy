const Order = require("../models/Order.js");

const updateOrder = async (sessionId, paymentStatus, address) => {
  try {
    const order = await Order.findOne({ sessionId });
    order.status = paymentStatus === "paid" ? "Proccess" : "Pending";
    order.payment = paymentStatus === "paid" ? true : false;
    // order.cart = paymentStatus === "paid" ? [] : order.cart;
    //agregar el adress

    order.adress = address;
    const savedOrder = await order.save();
   console.log(savedOrder)
    return savedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  updateOrder,
};
