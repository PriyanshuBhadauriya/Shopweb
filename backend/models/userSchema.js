const mongoose= require('mongoose');



const userSchema = new mongoose.Schema({
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
}) 

const Contact = mongoose.model('CONTACT',userSchema);
module.exports = Contact;
