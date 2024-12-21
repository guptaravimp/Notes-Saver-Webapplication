import React from 'react'
import { NavLink } from 'react-router-dom'
// import './nav.css'

function Navbar() {
  return (
    <div className='flex justify-center items-center w-[100%]  bg-white text-black sticky  '>
      <div className=' navigationbar flex w-[100%]  justify-between items-center gap-4  rounded-xl sticky p-2'>
      <div className='flex  flex-row flex-wrap gap-2 align-middle text-3xl items-start  mx-2 '><h1> Notes Saver</h1></div>

      <div className='flex  flex-row flex-wrap gap-2 align-middle text-blue-800 justify-evenly items-start  w-[60%] '>
      <NavLink to="/" className="  text-xl hover:text-green-500 hover:underline font-medium">Home</NavLink>
      <NavLink to="/pastes" className=" hover:text-green-500 hover:underline  text-xl font-medium">Blogs</NavLink>
      <NavLink to="https://www.linkedin.com/in/ravi-gupta-44bb451b1/" className=" hover:text-green-500 hover:underline   text-xl   font-medium">About us</NavLink>
    </div> 
      </div>




    </div>
      
  )
}

export default Navbar
