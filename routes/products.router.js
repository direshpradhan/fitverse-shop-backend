const express = require("express");
const router = express.Router();
const {Product} = require("../models/products.model")

router.route("/")
  .get(async (req,res)=>{
    try{
      const products = await Product.find({});
      res.json({success:true,products});
    }catch(err){
      res.json({success:false,message:"Unable to get products",errorMessage:err.message});
    }
  });
  // .post(async (req,res)=>{
  //   try{
  //     const product = req.body;
  //     const NewProduct = new Product(product);
  //     const savedProduct = NewProduct.save();
  //     res.json({success:true,savedProdct});
  //   }catch(err){
  //     res.json({success:false,message:"Couldn't add product", errorMessage:err.message});
  //   }
  // })

// router.get("/:id",async (req,res)=>{
//   try{
//     const {id} = req.params;
//     const product= await Product.findById(id);
//     res.json({success:true,product});
//   }catch(err){
//     res.json({success:false,message:"Unable to get products",errorMessage:err.message});
//   }
// })

module.exports = router;