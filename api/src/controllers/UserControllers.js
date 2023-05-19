const User = require("../models/Users/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const UserRegister = async (email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");
    const user = await User.findOne({ email });
    if (user) throw new Error("User already registered");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newUser = new User({ email, password: hash });

    const savedUser = await newUser.save();
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

module.exports = {
  UserRegister,
  UserLogin,
};
