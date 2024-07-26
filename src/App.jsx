import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import End from './Components/End'

function App() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen bg-cover bg-[url('/assets/paperbg.jpg')] bg-center">
      <Navbar/>
      <Landing/>
      <Marquee/>
      <End/>
    </div>
  )
}

export default App
