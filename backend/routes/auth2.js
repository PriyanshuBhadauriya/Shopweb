const express = require('express');
const router = express.Router();
require("../connection/db");
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');

const Sign = require("../models/signSchema");
const authenticate =require('../middleware/authenticate');


router.get('/signup',(req,res) =>{
    res.send("hello signrouter");
});

router.post('/Signup', async(req,res) =>{
    const {name,email,phone,password,cpassword} = req.body;
    if(!name || !email ||!phone || !password || !cpassword){
        return res.status(422).json({error:"filled all field"});
    }
    try{
        const userExist = await Sign.findOne({email:email});
        if(userExist){
            return res.status(422).json({error:"User Exist"});
        }else if(password != cpassword){
            return res.status(422).json({error:"password not match"});
        }
        else{

        
        const sign = new Sign({name,email,phone,password,cpassword});

        const signuser = await sign.save()
        if(signuser){
            res.status(201).json({message:"user register sucessfully"});
        }
    }
        
    }catch(err)
    {
        console.log(err);
    }
});
//login route
router.post('/login', async(req,res)=>{
    let token;
    try{
        const {email,password}=req.body;
        if(!email || !password){
        return res.status(400).json({error:"plz fill data"});
        }
        const userLogin =  await Sign.findOne({email:email});
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);
         token =userLogin.generateAuthToken();
        console.log(token);
        res.cookie("jwtoken",token, {
            expires:new Date(Date.now()+ 2589658266),
            httpOnly:true
        });

        if(!isMatch){
            res.status(400).json({error:"Inavalid credentials pass"});
        }else {
            res.json({message:"user login successfully"});
        }
    }else{
        res.status(400).json({error:"Inavalid credentials"});
    }
       // console.log(userLogin);
       

    }catch(err){
        console.log(err);
    }

});
//contact us ja page
router.get('/getdata',authenticate, async (req,res) =>{
    console.log('hello my contact');
    res.send(req.rootUser);
});
router.post('/contact',authenticate,async(req,res) =>{
    try{
      const{email,subject,cont}=req.body;
      if(!email || !subject ||!cont){
        console.log("error in contact form");
        return res.json({error:"please fill all contact form"});
      }
      const userContact = await Sign.findOne({_id:req.UserID});
      if(userContact){
        const userMessage = await userContact.addMessage(email,subject,cont);
        await userContact.save();
        res.status(201).json({message:"user conatact sucessfully"});
      }
    }catch(err){
        console.log(error);
    }
});

module.exports=router;
