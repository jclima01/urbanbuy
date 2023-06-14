const { default: Stripe } = require("stripe");
const Order = require("../models/Order.js");
const User = require("../models/Users/User.js");
const Product = require("../models/Product.js");
const ClientAdmin = require("../models/Users/ClientAdmin.js");
const { default: mongoose } = require("mongoose");
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
// const deleteOrder = async (orderId) => {
//   try {
//     const orders = await Order.findByIdAndDelete(orderId);
//     return orders;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };


const createCheckoutSession = async (orderId) => {
  try {
    const order = await Order.findById(orderId);
    const line_items = order.cart?.map((item) => {
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
      success_url: "https://urbanbuy.netlify.app/paymentSuccess?success=true",
      cancel_url: "https://urbanbuy.netlify.app/paymentCanceled?canceled=true",
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
    order.sessionId = session.id;
    const orderSaved = await order.save();
    return session;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createOrder = async (productId, quantity, fullName, email, userId) => {
  try {
    const item = await Product.findById(productId);
    const product = item._doc;
    const cart = [];
    if (quantity > product.stocks)
      throw new Error("Quantity exceeds stock limit");
    cart.push({ ...product, quantity: quantity });
    const total = cart.reduce(
      (count, product) => (count += product.quantity * product.price),
      0
    );
    const newOrder = new Order({
      fullName: fullName,
      status: "Pending",
      email: email,
      cart: cart,
      total: total,
      user: userId,
    });
    const orderSaved = await newOrder.save();
    const user = await User.findById(userId);
    user.orders.push(orderSaved._id);
    item.stocks -= quantity;
    const itemSaved = await item.save();
    await user.save();
    return { orderSaved, itemSaved };
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateOrder = async (orderId, productId, quantity) => {
  try {
    const order = await Order.findById(orderId);
    const item = await Product.findById(productId);
    const prod = item._doc;
    if (quantity > prod.stocks) throw new Error("Quantity exceeds stock limit");
    const prodId = new mongoose.Types.ObjectId(prod._id);
    const inCart = order.cart.some((product) => product._id.equals(prodId));
    let newCart;
    if (inCart) {
      newCart = order.cart.map((product) =>
        product._id.equals(prodId)
          ? { ...product, quantity: product.quantity + quantity } // Utilizar 'product' en lugar de 'prod'
          : { ...product }
      );
    } else {
      newCart = [...order.cart, { ...prod, quantity: quantity }];
    }
    const total = newCart.reduce(
      (count, product) => (count += product.quantity * product.price),
      0
    );
    order.cart = newCart; // Actualizar el carrito de la orden con el nuevo carrito
    order.total = Number(total);

    item.stocks -= quantity;
    const itemSaved = await item.save();

    const orderSaved = await order.save();
    return { orderSaved, itemSaved };
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeProductFormCart = async (orderId, productId) => {
  try {
    const order = await Order.findById(orderId);
    const item = await Product.findById(productId);
    const prod = item._doc;
    const prodId = new mongoose.Types.ObjectId(prod._id);
    const cartWithoutProduct = order.cart.filter(
      (product) => !product._id.equals(prodId)
    );
    const itemInCart = order.cart.find((product) => product._id.equals(prodId));

    order.cart = cartWithoutProduct;

    let total = 0;
    if (order.cart.length > 0) {
      total = order.cart.reduce(
        (count, product) => (count += product.quantity * product.price),
        0
      );
    }

    item.stocks += itemInCart.quantity;

    order.total = Number(total);

    const orderSaved = await order.save();
    const itemSaved = await item.save();
    return { orderSaved, itemSaved };
  } catch (error) {
    throw new Error(error.message);
  }
};
const reduceQuantity = async (orderId, productId) => {
  try {
    const order = await Order.findById(orderId);
    const item = await Product.findById(productId);
    const prod = item._doc;
    const prodId = new mongoose.Types.ObjectId(prod._id);
    const productIdx = order.cart.findIndex((product) =>
      product._id.equals(prodId)
    );
    const productInCart = order.cart.find((product) =>
      product._id.equals(prodId)
    );

    const updatedCartList = [...order.cart]; // Crear una copia del array cartList
    if (updatedCartList[productIdx].quantity === 1) {
      updatedCartList.splice(productIdx, 1);
    } else {
      updatedCartList[productIdx] = {
        ...updatedCartList[productIdx],
        quantity: updatedCartList[productIdx].quantity - 1,
      };
    }
    let total = 0;
    if (updatedCartList.length > 0) {
      total = updatedCartList.reduce(
        (count, product) => count + product.quantity * product.price,
        0
      );
    }
    item.stocks += 1;
    const itemSaved = await item.save();

    order.total = Number(total);
    order.cart = updatedCartList;
    const orderSaved = await order.save();
    return { orderSaved, itemSaved };
  } catch (error) {
    throw new Error(error.message);
  }
};

const increaseQuantity = async (orderId, productId) => {
  try {
    const order = await Order.findById(orderId);
    const item = await Product.findById(productId);
    const prod = item._doc;
    const prodId = new mongoose.Types.ObjectId(prod._id);
    const productIdx = order.cart.findIndex((product) =>
      product._id.equals(prodId)
    );
    const productInCart = order.cart.find((product) =>
      product._id.equals(prodId)
    );

    const updatedCartList = [...order.cart];
    updatedCartList[productIdx] = {
      ...updatedCartList[productIdx],
      quantity: updatedCartList[productIdx].quantity + 1,
    };
    let total = 0;
    if (updatedCartList.length > 0) {
      total = updatedCartList.reduce(
        (count, product) => (count += product.quantity * product.price),
        0
      );
    }
    if (item.stocks === 0) {
      throw new Error("Quantity exceeds stock limit");
    } else {
      item.stocks -= 1;
    }
    const itemSaved = await item.save();

    order.cart = updatedCartList;
    order.total = Number(total);

    const orderSaved = await order.save();
    return { orderSaved, itemSaved };
  } catch (error) {
    throw new Error(error.message);
  }
};
const ordersByClient = async (clientId) => {
  try {
    const clientAdmin = await ClientAdmin.findOne({ _id: clientId })
      .populate("users")
      .populate({
        path: "users",
        populate: {
          path: "orders",
          model: "Order",
        },
      })
      .exec();

    if (!clientAdmin) {
      console.log("ClientAdmin no encontrado");
      return;
    }

    const orders = clientAdmin.users.reduce(
      (result, user) => result.concat(user.orders),
      []
    );

    console.log("Órdenes del ClientAdmin:", orders);
    return orders;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las órdenes del ClientAdmin");
  }
};

const updateStatusOrder = async(orderId, status, clientId) => {
  try {
   const updatedOrder = await Order.findById(orderId);

    if (!updatedOrder) {
      
      throw new Error("Order no encontrada");
    }
    
    updatedOrder.status = status;
    
  
    const savedOrder = await updatedOrder.save();
    
    const orderAll = await ordersByClient(clientId);
    console.log(orderAll);
    return orderAll;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  postOrder,
  getOrdersByUser,
  ordersByClient,
  createCheckoutSession,
  createOrder,
  updateOrder,
  updateStatusOrder,
  removeProductFormCart,
  reduceQuantity,
  increaseQuantity,
};
