const express =require('express');
const Contact = require('../models/userSchema');

const router = express.Router();
require("../connection/db");


router.get('/',(req,res) =>{
    res.send('hello routerjs');
});
router.post('/Contact',async (req,res) =>{
    const { email,subject,cont } = req.body;
if(!email || !subject || !cont){
  return res.status(422).json({error:"filled all"});
}
try{

    const userExist = await Contact.findOne({email:email});
    if(userExist){
        return res.status(422).json({error:"User Exist"});
    }
    const contact = new Contact({email,subject,cont});
   const phone = await contact.save();
   if(phone){
    res.status(201).json({message:"message sends success"});
   
    }
}catch(err)
{console.log(err);

}
});


module.exports=router;

