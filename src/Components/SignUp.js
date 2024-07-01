import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();
  const getData = async()=>{
    console.log(name, email, password);
    let result = await fetch('http://localhost:5000/signup',{
      method:'post',
      body: JSON.stringify({name, email, password}),
      headers:{
        'Content-Type':'application/json'
      },
    })
     result = await result.json();
    console.log(result);
    navigate("/")
  }

   
  return (
    <div className='flex justify-center items-center'>
        <div className="contentWrapper flex flex-col gap-2 w-[50%]">
          <form action="" onSubmit={getData}>

            <h1 className='text-center font-bold text-[28px] text-blue-600'>Register Form</h1>
            <label htmlFor="name">Name</label>
            <input className='inputbox border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='name' type="text" placeholder='Enter Name' onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor="email">Email</label>
            <input className='inputbox border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='email' type="email" placeholder='Enter Email'  onChange={(e)=>{setEmail(e.target.value)}} />
            <label htmlFor="password">Password</label>
            <input className='inputbox border-2 border-gray-500 rounded-[5px] p-1 w-full' required name='password' type="password" placeholder='Enter Password'  onChange={(e)=>{setPassword(e.target.value)}}  />

            <button type='submit' className=''  >Submit</button>
          </form>
        </div>
    </div>
  )
}

export default SignUp
