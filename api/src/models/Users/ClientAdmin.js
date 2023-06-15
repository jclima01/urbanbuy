const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientAdminSchema = new Schema(
  {
    fullName: { type: String },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    logo: { type: String },
    optionsDesing: { type: Array, default: [] },
    catalogue: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    categories: [{ type: Schema.Types.ObjectId, ref:"Category" }],
    bannerText: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissions: { type: String, default: "ClientAdmin" },
    domain: { type: String },
    theme: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClientAdmin", ClientAdminSchema);
