import React from 'react'
import Marquee from './Marquee'
import { createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className='pt-[10vh] '>
      <a href="https://drive.google.com/drive/folders/1v8Mp1UyNP4hvMszvXOoqpGU4mf8JdvLv?usp=drive_link" className="text-[10vh] text-[#47382B] flex justify-center tracking-tight font-[impacted]  font-bold ">JOIN US</a>
      <div className=' flex justify-center'>
        <img src='/assets/theeye.png' className='h-[45vh] w-[45vh]'></img>
      </div> 
    </div>
  )
}

export default Landing
