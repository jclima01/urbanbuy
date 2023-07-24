const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    text: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    product: { type: Schema.Types.ObjectId, ref: "Product"},
    rating:{ type: Number }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);