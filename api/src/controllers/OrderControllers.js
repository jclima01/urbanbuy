const { default: Stripe } = require("stripe");
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
  const { title, content, price, order} = req.body;
  console.log(stripe);
  try {
    // Crear el objeto del pago
  
    
    const payment = new Purchase({
      title,
      content,
      price,
      order,
      status: stripe.status
    });
    
    // Guardar el pago en MongoDB
    await payment.save();
    
    // Crear un producto en Stripe
    const product = await stripe.products.create({
      name: title,
      type: 'service',
    });

    // Crear un precio para el producto en Stripe
    await stripe.prices.create({
      unit_amount: price * 100, // El precio se especifica en centavos
      currency: 'ars',
      product: product.id,
    });

    res.status(201).json({ message: 'Pago creado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el pago' });
  }
};



module.exports = {
  postOrder,
  getOrdersByUser,
  processPayment,
};
