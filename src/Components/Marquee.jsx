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
    "/assets/pic9.jpg",
    "/assets/pic10.jpg",
    "/assets/pic11.jpg",
    "/assets/pic12.jpg",
    "/assets/pic13.jpg",
    "/assets/pic14.jpg",
    "/assets/pic15.jpg",
    "/assets/pic16.jpg",
    "/assets/pic17.jpg",
    "/assets/pic18.jpg",
    "/assets/pic19.jpg",
    "/assets/pic20.jpg",
  ];
  return (
    <div className=' flex items-center  h-[35vh] w-full bg-[black] bg-opacity-75'>
     <div className="flex">
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[25vh]  w-[30vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
     className=" flex flex-shrink-0 ">
     {upperMarquee.map((image,index)=>{
      return <img className="h-[25vh]  w-[30vh] pr-[5vh]" src={image} key={index}/>
     }
    )}
     </motion.div>
     <motion.div initial={{x:0}} animate={{x:"-100%"}} 
     transition={{duration:80, repeat: Infinity, ease: "linear"}}
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
