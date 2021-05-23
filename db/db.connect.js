const mongoose = require("mongoose");
const mySecret = process.env['dbPwd'];

// "mongodb+srv://pdiresh:pradhanD@1811@cluster0.vwyi8.mongodb.net/ecomm?retryWrites=true&w=majority"

async function initializeDBConnection() {
  try{
    await mongoose.connect("mongodb+srv://pdiresh:pradhanD@1811@cluster0.vwyi8.mongodb.net/ecomm?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    console.log("successfully connected to db");
  }catch(err){
    console.error("mongoose connection failed...",err);
  }
}

module.exports = { initializeDBConnection };
