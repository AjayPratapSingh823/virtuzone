const express= require('express');
const Admin = require('../model/admin');
const dotenv = require('dotenv')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const app=express();

require('dotenv').config();

const jwtSecret=process.env.JWT_SECRET;
console.log(jwtSecret);

 const login=async(req,res)=>{
   const {username,password}=req.body;
   const user=await Admin.findOne({username})
   if(!user){
      res.status(401).json({error:'Invalid username'}) 
   }
   const passwordvalid=await bcrypt.compare(password,user.password);
   if(!passwordvalid){
    res.status(401).json({error:'Invalid password'})
   }
   if(user && passwordvalid){
    console.log('Admin login successfully');
    jwt.sign({user},jwtSecret,{expiresIn:'1h'},(err,token)=>{
      if(err){console.log(err)}
      res.send(token);
    });
   }else{
      console.log('ERROR: Could not login');
   }

}
module.exports=login;
