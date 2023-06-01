const { default: Stripe } = require("stripe");
const Order = require("../models/Order.js");
const User = require("../models/Users/User.js");
const stripe = require("stripe")(
  "sk_test_51NCdNdL2efsICo3fzbVNZmlNnJaJyRuDxAQrBTJBORiye8bCFNq6PqVwqNAcfnqXgmQ9dwySNJ2L6yQHqz17E2js0059R0fJ9h"
);

const postOrder = async (
  fullName,
  status,
  payment,
  email,
  cart,
  total,
  adress,
  userId
) => {
  try {
    const newOrder = new Order({
      fullName,
      status,
      payment,
      email,
      cart,
      total,
      adress,
      user: userId,
    });

    const savedOrder = await newOrder.save();
    const user = await User.findById(userId);
    user.orders.push(savedOrder._id);
    await user.save();

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

const createCheckoutSession = async (cart, userId) => {
  console.log(userId);
  try {
    const line_items = cart?.map((item) => {
      return {
        price_data: {
          product_data: {
            name: item.productName,
            description: item.description,
          },
          currency: "usd",
          unit_amount: Number(item.price * 100),
        },
        quantity: item.quantity,
      };
    });
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: "http://localhost:5173/paymentSuccess?success=true",
      cancel_url: "http://localhost:5173/paymentCanceled?canceled=true",
    });
    const newOrder = new Order({
      fullName: "New Order",
      status: session.payment_status,
      cart: cart,
      total: session.amount_total / 100,
      sessionId: session.id,
      user: userId,
    });
    const savedOrder = await newOrder.save();

    const user = await User.findById(userId);
    user.orders.push(savedOrder._id);
    await user.save();
    return session;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  postOrder,
  getOrdersByUser,
  createCheckoutSession,
};
