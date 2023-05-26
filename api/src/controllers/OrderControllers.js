const Order = require("../models/Order.js");
const Purchase = require("../models/Purchase.js");
const User = require("../models/Users/User.js");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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

const processPayment = async (req, res) =>{
  const { amount, currency, token } = req.body;
  const user = req.User.orders // Obtén el ID del usuario desde la solicitud (ajústalo según tu lógica)

  try {
    const charge = await stripe.charges.create({
      amount,
      currency,
      source: token,
      description: 'Descripción de la compra'
    });

    // Almacenar la información de la transacción en la base de datos
    const purchase = new Purchase({
      amount,
      currency,
      status: 'completed',
      user: user // Asigna el ID del usuario a la transacción
      // Otros campos que necesites almacenar
    });
    await purchase.save();

    res.json({ success: true, message: 'Pago procesado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
}


module.exports = {
  postOrder,
  getOrdersByUser,
  processPayment,
};
