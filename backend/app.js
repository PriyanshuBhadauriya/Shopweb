const express= require('express');
const dotenv = require('dotenv');
const app=express();


dotenv.config({path:'./config.env'});
const PORT=process.env.PORT;
//mongodb connect
const db = require("./connection/db");
db.connect();
app.use(express.json());
//userschema
const Contact = require("./models/userSchema");
app.use(require('./routes/auth'));
const Sign = require("./models/signSchema");
app.use(require('./routes/auth2'));









//middleware
const middleware = (req,res,next) =>{
    console.log("hello middleware");
    next();
}



app.get('/', (req,res) =>{
    res.send("hello backend");
});
//  app.get('/contact', middleware,(req,res) =>{
//      res.cookie("Test",'rohit');
//      res.send('hell wolrd about');
//   });
//   app.get('/signup',middleware,(req,res) =>{
//     res.send('hello signup');
//   });




app.listen(PORT,() =>{
    console.log(`server listen ${PORT}`);
})