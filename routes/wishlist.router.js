const express = require("express");
const router = express.Router();
const { WishlistItem } = require("../models/wishlist.model");

router.route("/")
  .get(async (req,res)=>{
    try{
      let wishItems = await WishlistItem.find({}).populate("_id");
      wishItems = wishItems.map(item => ({...item._id._doc,__v:undefined}));
      res.json({success:true,wishItems})
    }catch(error){
      res.status(500).json({success:false,message:"cannot get wishlist items",errorMessage:error.message})
    }
  })
  .post(async (req,res)=>{
    try{
      const item = req.body;
      console.log(item);
      const wishItem = await WishlistItem(item).save();
      res.json({success:true,wishItem});
    }catch(error){
      res.status(500).json({success:false,message:"cannot add wishlist item",errorMessage:error.message})
    }
  })

router.delete("/:id",async (req,res)=>{
  try{
    const {id} = req.params;
    const item = await WishlistItem.findById(id).remove();
    res.json({success:true})
  }catch(error){
    res.status(500).json({success:false,message:"cannot delete wishlist item",errorMessage:error.message})
  }
})

module.exports = router;