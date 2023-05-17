const Admin = require("../models/Users/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const AdminRegister = async (email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");
    const admin = await Admin.findOne({ email });
    if (admin) throw new Error("User already registered");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newAdmin = new Admin({ email, password: hash });

    const savedAdmin = await newAdmin.save();
    return savedAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};

const AdminLogin = async (email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    const admin = await Admin.findOne({ email });
    if (!admin) throw new Error("User not found");
    const pass = await bcrypt.compare(password, admin.password);

    if (!pass) throw new Error("Password is incorrect");

    const token = jwt.sign({ id: admin._id }, process.env.KEY_JWT, {
      expiresIn: "1h",
    });
    return { token, ...admin._doc };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  AdminRegister,
  AdminLogin,
};
