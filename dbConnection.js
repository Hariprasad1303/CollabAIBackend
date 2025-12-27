//import mongoose
const mongoose=require("mongoose");

//connection string
const connectionString=process.env.DATABASE;

mongoose.connect(connectionString).then(()=>{
    console.log("MOngodb connected successfully") 
}).catch((err)=>{
    console.log("mongodb connection failed");
    console.log(err);
})