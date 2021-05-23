const mongoose = require("mongoose");
const { Schema } = mongoose;

const CartSchema = new Schema({
  _id:{type:Schema.Types.ObjectId,ref:"Product"},
  quantity:Number,
});

const CartItem = mongoose.model("CartItem",CartSchema);

module.exports = {CartItem};
