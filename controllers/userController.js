//import user model
const users=require("../models/userModel")

exports.signupController=async(req,res)=>{
    //logic
    const {username,email,password,role}=req.body;
    console.log(username,email,password,role);
    try{
       const existingUser=await users.findOne({email:email});
       if(existingUser){
          res.status(400).josn("Already existing User");  
       }else{
         const newUser=new users({
            username,email,password,role
         });
         //save data to mongodb
         await newUser.save();
         res.status(200).json(newUser);   
       }
        
    }catch(err){
        res.status(500).json(err);
    }
}