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
      Welcome to Sahitya Book Club, a warm and close-knit community of passionate readers hailing from diverse backgrounds, all united by a shared love for literature. At Sahitya, we believe that books are more than just stories; they are bridges that connect us across cultures, experiences, and generations. Our members come from every walk of life, each bringing unique perspectives that enrich our discussions and deepen our understanding of the world.

Each month, we come together to explore a thoughtfully curated selection of books, spanning from timeless classics to contemporary gems. Our gatherings are more than book discussions—they are vibrant conversations where ideas are exchanged, friendships are forged, and minds are opened. Whether we are delving into the intricacies of a literary masterpiece or discovering the hidden treasures of an emerging author, our aim is to foster a sense of belonging and mutual respect among our members.

At Sahitya Book Club, we celebrate the power of stories to inspire, challenge, and transform us. We invite you to join us on this literary journey, to share your insights, listen to others, and become a part of our vibrant community. Together, let's explore the boundless world of literature and create lasting memories through the pages we turn.







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
