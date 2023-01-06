import { useNavigate} from 'react-router-dom';
import React,{useState} from "react";
import './home.css';



const Signup =() =>{
    const navigate =useNavigate();
    const [user,setUser] = useState({
        name:"", email:"",phone:"",password:"",cpassword:""

    });
    let name,value;
    const handleInput=(e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});

    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {name,email,phone,password,cpassword}=user;
        const res = await fetch("/Signup", {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,cpassword
            })
        });
        const data=await res.json();
        if(data.status === 422 || !data){
            window.alert("fill all fields");
            console.log("invalid credentials");
        }
        else{
            window.alert("Register sucessfull");
            console.log("register data send");
            navigate('/login');
        }
    }
    
    return(
        <>
        
         <div className="signup">
         
        
        
         <img className="shoe9" src="https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=600" alt="shoe9" />
         <h2>SIGNUP</h2>
            <div className="signup-input">
                <label>Name</label>
                <input type="text"  onChange={handleInput} value={user.name} name="name" />
                <label>Email</label>
                <input type="email"  name="email" onChange={handleInput} value={user.email} />
                <label>Phone</label>
                <input type="tel"   name="phone" onChange={handleInput} value={user.phone} />
                <label>Password</label>
                <input type="password"   name="password" onChange={handleInput} value={user.password}  />
                <label>Confirm Password</label>
                <input type="password"  name="cpassword"  onChange={handleInput} value={user.cpassword}/>
                <button type="submit" onClick={handleSubmit} className="signup-btn">Signup</button>

            </div>

         </div>
        </>
    )
}
export default Signup;
