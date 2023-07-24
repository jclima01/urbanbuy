const User = require("../models/Users/User");
const ClientAdmin = require("../models/Users/ClientAdmin.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const UserRegister = async (fullName, email, password, clientAdminId) => {
  try {
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");
    if (!fullName) throw new Error("FullName is required");
    const user = await User.findOne({ email });
    if (user) throw new Error("User already registered");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newUser = new User({ fullName, email, password: hash });
    const savedUser = await newUser.save();
    const clientAdmin = await ClientAdmin.findById(clientAdminId);
    clientAdmin.users.push(savedUser._id);
    await clientAdmin.save();
    return savedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const UserLogin = async (email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");
    const pass = await bcrypt.compare(password, user.password);

    if (!pass) throw new Error("Password is incorrect");

    const token = jwt.sign({ id: user._id }, process.env.KEY_JWT, {
      expiresIn: "1h",
    });
    return { token, ...user._doc };
  } catch (error) {
    throw new Error(error.message);
  }
};

const UserUpdate = async (userId, fullName, email, password,avatarName) => {
  try {
    const user = await User.findById(userId);
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    if (user) {
      user.fullName = fullName;
      user.email = email;
      user.password = hash;
      user.avatarName = avatarName;
      const updatedUser = await user.save();
      return updatedUser;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};


const UserDelete = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getClientAdminUsers = async (clientAdminId) => {
  try {
    const clientAdmin = await ClientAdmin.findById(clientAdminId)
      .populate("users") // Popula las categorías
      // .populate("clientAdmin") // Popula el modelo ClientAdmin
      .exec();

    return clientAdmin.users;
    // const clientAdminUsers = await User.find({ clientAdmin: clientAdminId });
    // return clientAdminUsers;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId)
      .populate("orders") // Popula las categorías
      // .populate("clientAdmin") // Popula el modelo ClientAdmin
      .exec();
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getLastOrderFromUser = async (userId) => {
  try {
    const user = await User.findById(userId)
      .populate("orders") // Popula las categorías
      // .populate("clientAdmin") // Popula el modelo ClientAdmin
      .exec();
    const lastOrder = user.orders[user.orders.length - 1];
    if (lastOrder.status === "Pending") return lastOrder;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  UserRegister,
  UserLogin,
  UserUpdate,
  UserDelete,
  getClientAdminUsers,
  getUserById,
  getLastOrderFromUser,
};
