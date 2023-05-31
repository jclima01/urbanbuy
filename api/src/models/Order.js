const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    fullName: { type: String },
    status: { type: String },
    payment: { type: Boolean, default: false},
    // permissions: { type: String },
    email: { type: String },
    cart: { type: Array, required: true},
    total: { type: Number },
    adress: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);