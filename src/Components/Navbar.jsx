import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="  h-[7vh] w-full px-[5vw] py-[3vh]  text-[#47382B] font-medium flex justify-between items-center">
      
    <Link to="/" className="text-[2vh] ">HOME</Link>
    <Link to="/aboutus" className="text-[2vh] ">ABOUT US</Link>
    <Link to="https://forms.gle/7wtz3nwse96pwXCCA" className="text-[2vh] ">JOIN US</Link>
      
    </div>
    </div>
  )
}

export default Navbar
