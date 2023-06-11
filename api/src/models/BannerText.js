const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BannerTextSchema = new Schema(
  {
    bannerText: { type: String },
    clientAdmin: { type: Schema.Types.ObjectId, ref: "ClientAdmin" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BannerText", BannerTextSchema);