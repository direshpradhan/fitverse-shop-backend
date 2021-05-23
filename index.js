const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const {initializeDBConnection} = require("./db/db.connect");
const {Product, addProductsToCollection} = require("./models/products.model");
const productRouter = require("./routes/products.router");
const cartRouter = require("./routes/cart.router");
const wishlistRouter = require("./routes/wishlist.router");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;

initializeDBConnection();
// run once
// addProductsToCollection();


app.get('/', (req, res) => {
  // throw Error("Something is wrong.....")
  res.send('Hello Express app!')
});

app.use("/products",productRouter);
app.use("/cart",cartRouter);
app.use("/wishlist",wishlistRouter);

// 404 route Handler
app.use((req,res)=>{
  res.status(404).json({success:false,message:"The route you're looking for is not available"})
})

// Error Handler
app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(500).json({success:false,message:"Server is having some issues. Please try again after sometime."})
  next();
})

app.listen(PORT, () => {
  console.log('server started at port 3000');
});