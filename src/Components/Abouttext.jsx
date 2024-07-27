import React from 'react'
import Ourpicks from './Ourpicks'
import End from './End'

function Abouttext(){
  return (
    <div className=' overflow-hidden'>
        <div className='flex justify-center'>
        <img src='/assets/logo.jpg' className='h-[40vh] py-[5vh] w-[30vh]'></img>
        </div>
      <div className=' text-[2vh] tracking-wide px-[4.3vh] uppercase font-light text-center w-full'>
      Our mission is to celebrate diversity by exploring literature from various cultures, backgrounds, and perspectives. Here, we believe in the power of stories to foster empathy, understanding, and connection. Whether you are an avid reader or new to the literary world, our club offers a safe and welcoming space to discuss, learn, and grow together. Join us as we embark on a journey through the pages of books that reflect the richness of the human experience, and become part of a community that values inclusivity and respect for all.
      </div>
      <div className='text-[5vh] font-light text-center mt-[5vh] flex justify-center uppercase  tracking-widest text-[#47382B]'>
        <h1>OUR current favourites</h1>
      </div>
      <Ourpicks/>
      <div><End/></div>
      
    </div>
  )
}

export default Abouttext
