const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    productName: { type: String },
    description: { type: String },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    stocks: { type: Number, default: 0 },
    imageUrl: { type: String },
    price: { type: Number },
    rating: { type: Number },
    clientAdmin: { type: Schema.Types.ObjectId, ref: "ClientAdmin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
