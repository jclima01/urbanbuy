const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    id: { type: String },
    fullName: { type: String, required: true, unique: true },
    clients: { type: Array, default: []  },
    email: { type: String, required: true, unique: true},
    password:  { type: String },
    permissions:  { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
