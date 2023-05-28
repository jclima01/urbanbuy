const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
  title: {
    type:String,
 },
 content: {
     type: String,
 },
 price: {
     type: Number,
 },
 order: {
  type: String
 },
 status:{
  type: String
 }
}, { timestamps: true });

  
 
 module.exports = mongoose.model('Purchase', PurchaseSchema);

