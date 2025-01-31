import React,{useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

  useEffect(()=>{
  const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
    }
  })
  const getData = async()=>{
    // console.log(name, email, password);
    let result = await fetch('http://localhost:5000/signup',{
      method:'post',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type':'application/json',
      },
    })
     result = await result.json();
    // console.log(result);
    localStorage.setItem("user",JSON.stringify(result.result));
    localStorage.setItem("Token",JSON.stringify(result.auth));
    navigate("/")
  }

   
  return (
    <div className='flex justify-center items-center'>
        <div className="contentWrapper  w-[40%]">
          <div   className='flex flex-col gap-2'>

            <h1 className='text-center font-bold text-[28px] text-blue-600'>Register Form</h1>
            <label htmlFor="name">Name</label>
            <input className='inputbox border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='name' type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor="email">Email</label>
            <input className='inputbox border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='email' type="email" placeholder='Enter Email'  onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor="password">Password</label>
            <input className='inputbox border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='password' type="password" placeholder='Enter Password'  onChange={(e)=>{setPassword(e.target.value)}}  />

            <button onClick={getData} className='bg-indigo-700 px-5 py-2 inline-block w-fit text-white ml-auto rounded-md hover:bg-indigo-400 hover:text-black font-bold mt-4' >Submit</button>
          </div>
        </div>
    </div>
  )
}

export default SignUp
