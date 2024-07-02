import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        let auth = localStorage.getItem("user");
        if(auth){
            navigate('/');
        }
    })
    const handleLogin =async()=>{
        console.log(email,password);
        let result = await fetch("http://localhost:5000/login",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':'application/json'
            }
        })
        result = await result.json();
        console.log(result);
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        }else{
            alert("User not Found ... please enter correct details")
        }
    }
    return(
        <div className='flex justify-center items-center'>
        <div className="contentWrapper w-[40%]">
          <div action=""  className=" flex flex-col gap-2">

            <h1 className='text-center font-bold text-[28px] text-blue-600'>Login Form</h1>
            <label htmlFor="email">Email</label>
            <input className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='email' type="email" placeholder='Enter Email'  onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor="password">Password</label>
            <input className=' border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='password' type="password" placeholder='Enter Password'  onChange={(e)=>{setPassword(e.target.value)}}  />
            <button  className=''  onClick={handleLogin}>Submit</button>
          </div>
        </div>
    </div>
    )
}

export default Login;