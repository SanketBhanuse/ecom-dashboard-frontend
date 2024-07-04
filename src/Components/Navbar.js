import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate =  useNavigate();
  
  const logout = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate('/signup');
    }, 10);
  };
  return (
    <div className=' bg-indigo-700 p-2  text-white '>
       {auth ? 
      <ul className='flex gap-5 font-bold uppercase items-center'>
        <Link to="/">Products</Link>
        <Link to="/add">Add Product</Link>
        {/* <Link to="/update">update product</Link> */}
        <Link to="/profile">profile</Link>
        <Link onClick={logout}  className='border-white border-2 p-1 rounded-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-black ml-auto'>logout</Link> 
      </ul>
      :
      <div className='rightNav flex gap-2 items-center justify-end text-right w-full'>
        <Link to="/login" className="signupWrapper border-white border-2 p-1 rounded-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-black ">Login</Link>
         <Link to="/signup" className="signupWrapper border-white border-2 p-1 rounded-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-black ">  Signup </Link>
      </div>
}
    </div>
  )
}

export default Navbar
