import React from 'react'

const Ourpicks=()=> {
    const book =[
        "/assets/book1.jpg",
        "/assets/book2.jpg",
        "/assets/book3.jpg",
    ];
    const movie =[
        "/assets/mov1.jpg",
        "/assets/mov2.jpg",
        "/assets/mov3.jpg",
    ];
    const music =[
        "/assets/al1.jpg",
        "/assets/al2.jpg",
        "/assets/al3.jpg",
    ];
  return (
    <div className=' w-full px-[5vh]'>
      <div className="picks">
        <div className="books flex py-[5vh] justify-center">
        {book.map((image,index)=>{
      return <img className="h-[20vh]  w-[18vh] px-[1.5vh]" src={image} key={index}/>
        }
        )}
        </div>
        <div className="albums flex py-[2vh] justify-center">
        {movie.map((image,index)=>{
      return <img className="h-[20vh]  w-[18vh] px-[1.5vh]" src={image} key={index}/>
        }
        )}
        </div>
        <div className="movies flex py-[5vh] justify-center">
        {music.map((image,index)=>{
      return <img className="h-[15vh]  w-[18vh] px-[1.5vh]" src={image} key={index}/>
        }
        )}
        </div>
      </div>
    </div>
  )
}

export default Ourpicks
