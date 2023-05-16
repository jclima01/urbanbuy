const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    fullName: { type: String },
    clients: { type: Array, default: [] },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissions: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
