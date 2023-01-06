import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

const Login = () =>  
{
    const navigate =useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword] =useState("");
    const handleSubmit =async (e) =>{
   e.preventDefault();
   const res = await fetch('/login', {
    method:"POST",
    headers:{
        "Content-type": "application/json"
    },
    body:JSON.stringify({
        email,password
    })
   });
   const data = res.json();
   if(res.status === 400 || !data){
    window.alert("Invalid credentials");
   }else {
    window.alert("Login Successfull");
    navigate('/');
   }
    
}
    

    return(
        <>
        
        <div className='log'>
        <img  className='shoe4' src='https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=600' alt='shoe4'/>
        <h3>Login</h3>
        <form method='POST'>
        <label>User ID
        <input type="text"  value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </label>
        <label>Password</label>
        <input type="password"  value={password} onChange={(e) =>setPassword(e.target.value)} />
        <input type="checkbox" /><label>Are you 18 above</label>
        <input className='btn' onClick={handleSubmit} type='submit' />
        </form>
        </div>
        </>

    )
}
export default Login;