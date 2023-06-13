const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissions: { type: String , default: "User"},
    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
    avatarName:{ type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
