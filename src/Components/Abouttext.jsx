import React from 'react'
import Ourpicks from './Ourpicks'
import End from './End'

function Abouttext(){
  return (
    <div className=' overflow-hidden'>
        <div className='text-[5vh] font-light text-center mt-[1vh] flex justify-center uppercase  tracking-widest text-[#47382B]'>
        <h1 className='font-semibold font-mono tracking-tighter mb-[1vh]'>OUR PURPOSE</h1>
      </div>
      <div className=' text-[2vh] tracking-wide text-left  px-[10vh] mb-[5vh] uppercase  w-full'>
      At Sahitya, we believe that books are more than pages bound together—they are portals of human understanding, bridges between minds, and catalysts for connection.
In a world increasingly fragmented by digital isolation, we are reimagining the book as a living, breathing conduit of human experience. Our platform is not just about lending books; it's about creating a vibrant third space where stories flow freely, where strangers become companions, and where knowledge transcends physical and social boundaries.
We celebrate the profound intimacy of shared consciousness—the magical moment when a reader discovers their own reflection in another's words, or when a borrowed book carries the subtle imprints of previous readers, each margin note and dog-eared page a whisper of shared humanity.
LitWink is founded on three fundamental beliefs:<br/><br/>
. Knowledge Should Be Accessible: Books are not commodities to be hoarded, but living resources to be circulated, shared, and experienced collectively. We remove barriers to access, making literature a universal commons.<br/><br/>
. Human Connections Matter: Every book exchange is an opportunity for dialogue, empathy, and mutual understanding. We are not just a technological platform, but a living, breathing community where stories connect people across demographics, geographies, and lived experiences.<br/><br/>
. Mutual Consciousness is Our Highest Value: When we read, we expand beyond our individual selves. We become part of a larger narrative—a collective consciousness that transcends individual perspectives and builds bridges of empathy and understanding.<br/><br/>

We are a movement. A reimagining of how stories can unite us, how knowledge can liberate us, and how human connections can transform our understanding of ourselves and each other.
Join us in turning the page towards a more connected, empathetic world.






      </div>
      <Ourpicks/>
      <div><End/></div>
    </div>
  )
}

export default Abouttext
