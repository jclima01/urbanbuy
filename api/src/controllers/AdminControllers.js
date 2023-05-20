const Admin = require("../models/Users/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const AdminRegister = async (fullName, email, password) => {
  try {
    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");
    if (!fullName) throw new Error("FullName is required");
    const admin = await Admin.findOne({ email });
    if (admin) throw new Error("User already registered");
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    const newAdmin = new Admin({ fullName, email, password: hash });

    const savedAdmin = await newAdmin.save();
    return savedAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};

const AdminLogin = async ( email, password) => {
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


const AdminUpdate = async (adminId, fullName, email, password) => {
  try {
    const admin = await Admin.findById(adminId);
    if(admin) {
      admin.fullName = fullName;
      admin.email = email;
      admin.password = password;
    }
    const updatedAdmin = await admin.save();
    return updatedAdmin;
  } catch (error) {
    throw new Error(error.message)
  }
};

const AdminDelete = async (adminId) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(adminId);
    return deletedAdmin;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports = {
  AdminRegister,
  AdminLogin,
  AdminUpdate,
  AdminDelete
};
