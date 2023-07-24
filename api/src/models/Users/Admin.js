const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    fullName: { type: String },
    clients: [{ type: Schema.Types.ObjectId, ref: "ClientAdmin" }],
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    permissions: { type: String, default: "Admin"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", AdminSchema);
