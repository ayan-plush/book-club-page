import React from 'react'
import { motion } from 'framer-motion'
const Marquee = () => {
  const upperMarquee =[
    "/assets/pic1.jpg",
    "/assets/pic2.jpg",
    "/assets/pic3.jpg",
    "/assets/pic4.jpg",
    "/assets/pic5.jpg",
    "/assets/pic6.jpg",
    "/assets/pic7.jpg",
    "/assets/pic8.jpg",
  ];
  return (
    <div className=' flex items-center  h-[30vh] w-full bg-[black]'>
     <div className="flex">
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:30, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[20vh]  w-[25vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:30, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[20vh]  w-[25vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:30, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[20vh]  w-[25vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     </div>
    </div>
  );
};

export default Marquee;
