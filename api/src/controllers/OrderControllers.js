const Order = require("../models/Order.js");
const Purchase = require("../models/Purchase.js");
const User = require("../models/Users/User.js");
const stripe = require('stripe')('sk_test_51NBID4EdWFvWYSp3Ltrb2CfF0bSZIwiJy0TeDpxwqZfmBJsJTXujnYPbfFtiIJEJWlZj0du2qymzqeTI0PwPMnSk00Ay2YyxXV');


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

const processPayment = async (req, res) => {
  
  const {product} = req.body;
  try {
    const foundOrder = await Order.find({ user: user});
    console.log(foundOrder);
    
    if (foundOrder.length === 0) {
      return res.status(400).json({ success: false, error: 'Orden no encontrada' });
    }
    
    const charge = await stripe.charges.create({
      amount: await paymentHandler(product),
      currency: "usd",
      payment_method: product[0].pm,
      confirm: true
    });

    // Almacenar la información de la transacción en la base de datos
    res.send({
      clientSecret: paymentIntent.client_secret,
    })

    res.json({ success: true, message: 'Pago procesado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
};



module.exports = {
  postOrder,
  getOrdersByUser,
  processPayment,
};
