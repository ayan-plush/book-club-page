import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import End from './Components/End'
function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <End/>
    </div>
  )
}

export default Home
