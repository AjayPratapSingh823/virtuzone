const express= require('express');
const router= express.Router();
const login=require('../controller/LoginRoutes')
const SignUp=require('../controller/SignupRoutes');


router.post('/login',login);
router.post('/sign-up',SignUp)
module.exports= router;