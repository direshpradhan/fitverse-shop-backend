const mongoose = require("mongoose");
const { Schema } = mongoose;

const Wishlist = new Schema({
  _id:{type:Schema.Types.ObjectId,ref:"Product"}
})

const WishlistItem = mongoose.model("WishlistItem",Wishlist);

module.exports = { WishlistItem };