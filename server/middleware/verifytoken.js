const jwt= require('jsonwebtoken');
const dotenv= require('dotenv');

require('dotenv').config();

const jwtSecret= process.env.JWT_SECRET;

function verifyToken(req,res,next){
    const token = req.headers['authorization']
    if(!token){
        return res.status(401).json({message:'No token provided'});
    }
    jwt.verify(token,jwtSecret,(err,decoded)=>{
        if(err){
            // return res.status(401).json({message:'Failed to authenticate token'});
            console.log('failed to authenticate');
        }
        req.user=decoded.user;
        console.log('Token verified successfully.');
        next();
    })
}

module.exports=verifyToken;