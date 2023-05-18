const ClientAdmin = require("../models/Users/ClientAdmin.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const ClientAdminRegister = async (email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");
    const admin = await ClientAdmin.findOne({ email });
    if (admin) throw new Error("User already registered");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newAdmin = new ClientAdmin({ email, password: hash });

    const savedAdmin = await newAdmin.save();
    return savedAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};

const ClientAdminLogin = async (email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    const clientAdmin = await ClientAdmin.findOne({ email });
    if (!clientAdmin) throw new Error("User not found");
    const pass = await bcrypt.compare(password, clientAdmin.password);

    if (!pass) throw new Error("Password is incorrect");

    const token = jwt.sign({ id: clientAdmin._id }, process.env.KEY_JWT, {
      expiresIn: "1h",
    });
    return { token, ...clientAdmin._doc };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  ClientAdminRegister,
  ClientAdminLogin,
};
