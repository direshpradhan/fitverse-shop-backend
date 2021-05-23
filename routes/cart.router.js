const express = require("express");
const router = express.Router();
const {CartItem} = require("../models/cart.model");
const {extend} = require("lodash");

router.route("/")
  .get(async (req,res)=>{
    try{
      let cartItems = await CartItem.find({}).populate("_id");
      cartItems = cartItems.map(item => ({...item._id._doc,quantity:item.quantity,__v:undefined}));
      res.json({success:true,cartItems});
      
    }catch(error){
      res.status(500).json({success:false,message:"unable to find cart",errorMessage:error.message})
    }
  })
  .post(async (req,res)=>{
    try{
      const cartItem = req.body;
      const NewCartItem = new CartItem(cartItem);
      const savedCartItem = await NewCartItem.save();
      res.json({success:true,savedCartItem});
    }catch(error){
      res.status(500).json({success:false,message:"unable to put item into cart",errorMessage:error.message})
    }
  })

router.route("/:id")
  .post(async (req,res)=>{
    try{
      const { id } = req.params;
      const quantity = req.body;
      console.log(quantity);
      const item = await CartItem.findByIdAndUpdate(id,quantity)
      res.json({success:true,quantity});
    }catch(error){
      res.status(500).json({success:false,message:"unable to update quantity",errorMessage:error.message})
    }
  })
  .delete(async (req,res)=>{
    try{
      const { id } = req.params;
      const item = await CartItem.findById(id);
      await item.remove();
      res.json({success:true,item});
    }catch(error){
      res.status(500).json({success:false,message:"unable to delete product",errorMessage:error.message})
    }
  })

module.exports = router;