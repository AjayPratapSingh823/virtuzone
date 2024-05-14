const express= require('express');
const app=express();
const Admin= require('../model/admin')
const bcrypt=require('bcrypt');

const SignUp=async(req,res)=>{
const {username,password}=req.body;
const existingUser= await Admin.find({username});
if(existingUser){
    res.send("User already exists");
}
const hashedpassword= await bcrypt.hash(password,10);
const newUser= new Admin({username:username, password:hashedpassword});
console.log('User Registered Successfully');
await newUser.save();
}
module.exports=SignUp