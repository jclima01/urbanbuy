const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.URI_DB;

const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
