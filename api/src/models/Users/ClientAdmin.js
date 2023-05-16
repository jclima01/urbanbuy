const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientAdminSchema = new Schema(
  {
    fullName: { type: String },
    users: { type: Array, default: [] },
    logo: { type: String },
    optionsDesing: { type: Array, default: [] },
    catalogue: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissions: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ClientAdmin", ClientAdminSchema);
