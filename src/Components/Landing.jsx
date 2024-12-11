import React from 'react'
import Marquee from './Marquee'
import { createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='pt-[5vh] '>
      <a href="https://forms.gle/7wtz3nwse96pwXCCA" className="text-[10vh] text-[#47382B] flex justify-center tracking-tight font-[impacted] font-bold ">
      <img src='/assets/JOINUS.png' className='h-[9.75vh] border-b-[0.1vh] border-b-[#47362D] w-[28.5vh]'></img>
      </a>
      <div className="flex justify-center font-bold text-[#907e5a] text-[1.5vh] uppercase tracking-tighter ">connect. read. converse.</div>
      <div className=' flex justify-center'>
        <img src='/assets/theeye1.png' className='h-[45vh] w-[45vh]'></img>
      </div> 
    </div>
  )
}

export default Landing
