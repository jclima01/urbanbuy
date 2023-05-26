const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
  amount: { type: Number, required:true},
  currency: { type: String, required:true },
   status: { type: String, required:true },
 
}, { timestamps: true });

  
 
 module.exports = mongoose.model('Purchase', PurchaseSchema);

