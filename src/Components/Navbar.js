import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-indigo-700 p-2  text-white items-center'>
      <ul className='flex gap-5 font-bold uppercase'>
        <Link to="/">home</Link>
        <Link to="/add">Add Product</Link>
        <Link to="/update">update product</Link>
        <Link to="/logout">logout</Link>
        <Link to="/profile">profile</Link>
      </ul>
      <Link to="/signup" className="signupWrapper border-white border-2 p-1 rounded-[5px] cursor-pointer hover:bg-white hover:text-black hover:border-black ">  Signup </Link>
    </div>
  )
}

export default Navbar
