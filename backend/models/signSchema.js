const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');
const jwt =require('jsonwebtoken');
const { default: userEvent } = require('@testing-library/user-event');



const signSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    date:{
   type:Date,
   default:Date.now
    },
    messages:[
        {
        email:{
            type:String,
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        cont:{
            type:String,
            required:true
        }
    }
],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

//we are hash the password

signSchema.pre('save', async function(next) {
    console.log("hii ");
if(this.isModified('password')){
    this.password =await bcrypt.hash(this.password,12);
    this.cpassword =await bcrypt.hash(this.cpassword,12);
}
next();
});
//we generate token
signSchema.methods.generateAuthToken = async function() {
    try {
  let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
  this.tokens = this.tokens.concat({token:token});
   await this.save();
   return token;
    }catch(err)
    {
        console.log(err);
    }
}

//stored the message
signSchema.methods.addMessage = async function (email,subject,cont){
    try{
        this.messages = this.messages.concat({email,subject,cont});
        await this.save();
        return this.messages;
    }catch(err){
        console.log(error);
    }
}
// in schema part without hash is same before hashing
const Sign = mongoose.model('SIGNUP',signSchema);
module.exports = Sign;