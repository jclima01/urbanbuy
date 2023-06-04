const { default: Stripe } = require("stripe");
const Order = require("../models/Order.js");
const User = require("../models/Users/User.js");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

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
      success_url: "https://urban-buy.netlify.com/paymentSuccess?success=true",
      cancel_url: "https://urban-buy.netlify.com/paymentCanceled?canceled=true",
      shipping_address_collection: {
        allowed_countries: ["AR"], // Specify the allowed countries for shipping
      },
      // shipping_address: {
      //   address: {
      //     line2: address.line2,
      //     city: address.city,
      //     state: address.state,
      //     postal_code: address.postalCode,
      //     country: address.country,
      //   },
      //   name: address.fullName,
      // },
    });
    const newOrder = new Order({
      fullName: "New Order",
      status: session.payment_status === "unpaid" ? "pending" : "unpaid",
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

<<<<<<< HEAD
const createOrder = async (fullName, email, cart, total, userId) => {
  try {
    const newOrder = new Order({
=======
const createOrder = async ({ fullName, email, cart, total, userId }) => {
  try {
    const orders = await Order.create({
>>>>>>> c0761a1f3276e8f8b62f1cc5233467c5b97bcf6b
      fullName: fullName,
      status: "pending",
      email: email,
      cart: cart,
      total: total,
      user: userId,
    });
<<<<<<< HEAD
    const savedOrder = await newOrder.save();
    const user = await User.findById(userId);
    user.orders.push(savedOrder._id);
    await user.save();
    return savedOrder;
=======
    return orders;
>>>>>>> c0761a1f3276e8f8b62f1cc5233467c5b97bcf6b
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  postOrder,
  getOrdersByUser,
  createCheckoutSession,
  createOrder,
};
