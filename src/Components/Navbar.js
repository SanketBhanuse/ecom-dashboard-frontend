import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className='flex gap-2'>
        <Link to="/">home</Link>
        <Link to="/add">Add</Link>
        <Link to="/update">update</Link>
        <Link to="/logout">logout</Link>
        <Link to="/profile">profile</Link>
      </ul>
    </div>
  )
}

export default Navbar
