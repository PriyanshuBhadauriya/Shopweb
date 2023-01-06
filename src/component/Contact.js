
import React, { useState,useEffect } from 'react';
const Contact =() =>
{
    const [user,setUser]=useState({email:"" , subject:"" , cont:""});
    const callContactPage = async () =>{
        try{
            const res =  await fetch('/getdata' , {
                method:"GET",
                headers:{
                    
                    "Content-type":"application/json"
                }
                
            });
            const data =await res.json();
            console.log(data);
            setUser({...user,email:user.email,subject:user.subject,cont:user.cont});
            if(!res.data === 200){
                const error = new Error(res.error);
                throw error;
            }
        }catch(err) {
  console.log(err);
        }
    }
    useEffect (() =>{
        callContactPage();
    },[]);
   
    let name,value;
    const handleInput=(e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {email,subject,cont} = user;
        const res = await fetch('/contact',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email,subject,cont
            })

        });
        const data = await res.json();
        if(data.status === 422 || !data){
            alert("fill all fields");
        
        }
        else{
            window.alert("message send successfully");
            setUser({...user,cont:""});
            console.log("send data");
        }
    }
    
    return (
        <>
        <div className='cont'>
            <img  className="shoe5" src='https://images.pexels.com/photos/5584504/pexels-photo-5584504.jpeg?auto=compress&cs=tinysrgb&w=600' alt='shoe5' />
            <form method='POST'>
            <h2>Contact Us</h2>
            <label>Email id</label>
            <input type="Email" value={user.email} onChange={handleInput}  name="email" required  />
            <label>Subject</label>
            <input type='text'  name="subject" value={user.subject} onChange={handleInput} required />
            <label>Message</label>
           <textarea   name="cont" onChange={handleInput} value={user.cont} required></textarea>
            <button className='btn' onClick={handleSubmit} type='button'>Send</button>
            </form>
        </div>
        </>
    )
}
export default Contact;
