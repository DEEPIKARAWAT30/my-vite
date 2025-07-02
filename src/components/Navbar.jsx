import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
            <div className="text-lg font-bold">My Website</div>
            <ul className="flex space-x-4">
                <li><NavLink to={"/"} className="hover:text-gray-400">Home</NavLink></li>
                <li><NavLink to={"/about"} className="hover:text-gray-400">About</NavLink></li>
                <li><NavLink to={"/login"} className="hover:text-gray-400">login</NavLink></li>
            </ul>
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar
